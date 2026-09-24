import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronLeft, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { services, timeSlots, type Service } from '../data/services'
import { Modal, Reveal } from './ui'

type BookingProps = {
  open: boolean
  onClose: () => void
  initialServiceId?: string | null
}

type FormState = {
  serviceId: string
  date: string
  time: string
  guests: number
  name: string
  email: string
  notes: string
}

const empty: FormState = {
  serviceId: services[0].id,
  date: '',
  time: '',
  guests: 2,
  name: '',
  email: '',
  notes: '',
}

function nextDays(count: number) {
  const out: { value: string; label: string }[] = []
  const start = new Date()
  start.setHours(12, 0, 0, 0)
  for (let i = 2; i < count + 2; i++) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    if (d.getDay() === 1) continue // closed Mondays
    out.push({
      value: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      }),
    })
    if (out.length >= count) break
  }
  return out
}

export function BookingPanel({ open, onClose, initialServiceId }: BookingProps) {
  const dates = useMemo(() => nextDays(8), [])
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>(() => ({
    ...empty,
    serviceId: initialServiceId ?? empty.serviceId,
  }))
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const selected = services.find((s) => s.id === form.serviceId) as Service

  const resetAndClose = () => {
    onClose()
    setTimeout(() => {
      setStep(0)
      setSubmitted(false)
      setError(null)
      setForm({ ...empty, serviceId: initialServiceId ?? empty.serviceId })
    }, 280)
  }

  useEffect(() => {
    if (!open) return
    setSubmitted(false)
    setError(null)
    setStep(0)
    setForm({
      ...empty,
      serviceId: initialServiceId ?? empty.serviceId,
    })
  }, [open, initialServiceId])

  const canNext =
    step === 0
      ? Boolean(form.serviceId)
      : step === 1
        ? Boolean(form.date && form.time)
        : form.name.trim().length > 1 && /.+@.+\..+/.test(form.email)

  const submit = () => {
    if (!canNext) {
      setError('Please complete the required fields.')
      return
    }
    setError(null)
    setSubmitted(true)
  }

  return (
    <Modal open={open} onClose={resetAndClose} labelledBy="booking-title">
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.3em] text-leaf uppercase">
              Booking
            </p>
            <h2 id="booking-title" className="font-display mt-2 text-2xl font-bold tracking-tight text-ink">
              {submitted ? 'Request received' : 'Reserve a moment'}
            </h2>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            className="rounded-full p-2 text-muted transition-colors hover:bg-mist hover:text-ink"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {!submitted ? (
          <>
            <div className="mt-6 flex gap-2" aria-hidden>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i <= step ? 'bg-leaf' : 'bg-ink/10'
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                {step === 0 && (
                  <fieldset>
                    <legend className="text-sm font-semibold text-ink">Choose a service</legend>
                    <div className="mt-4 grid gap-2">
                      {services.map((s) => (
                        <label
                          key={s.id}
                          className={`flex cursor-pointer items-start justify-between gap-4 rounded-2xl border px-4 py-3 transition-colors ${
                            form.serviceId === s.id
                              ? 'border-leaf bg-leaf/5'
                              : 'border-ink/10 hover:border-ink/25'
                          }`}
                        >
                          <span>
                            <span className="block font-display font-semibold text-ink">{s.name}</span>
                            <span className="mt-0.5 block text-sm text-muted">
                              {s.duration} · {s.price}
                            </span>
                          </span>
                          <input
                            type="radio"
                            name="service"
                            className="mt-1 accent-leaf"
                            checked={form.serviceId === s.id}
                            onChange={() => setForm((f) => ({ ...f, serviceId: s.id }))}
                          />
                        </label>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 1 && (
                  <div className="space-y-6">
                    <fieldset>
                      <legend className="text-sm font-semibold text-ink">Date</legend>
                      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                        {dates.map((d) => (
                          <button
                            key={d.value}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, date: d.value }))}
                            className={`shrink-0 rounded-2xl border px-3 py-3 text-left transition-colors ${
                              form.date === d.value
                                ? 'border-leaf bg-leaf text-foam'
                                : 'border-ink/10 hover:border-ink/25'
                            }`}
                          >
                            <span className="block text-xs opacity-80">{d.label.split(' ')[0]}</span>
                            <span className="font-display text-sm font-semibold">
                              {d.label.split(' ').slice(1).join(' ')}
                            </span>
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className="text-sm font-semibold text-ink">Time</legend>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, time: t }))}
                            className={`rounded-xl border py-2.5 text-sm font-semibold transition-colors ${
                              form.time === t
                                ? 'border-leaf bg-leaf text-foam'
                                : 'border-ink/10 hover:border-ink/25'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <label className="block">
                      <span className="text-sm font-semibold text-ink">Guests</span>
                      <input
                        type="number"
                        min={1}
                        max={16}
                        value={form.guests}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, guests: Number(e.target.value) || 1 }))
                        }
                        className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-3 py-2.5 outline-none focus:border-leaf"
                      />
                    </label>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <p className="rounded-2xl bg-mist px-4 py-3 text-sm text-muted">
                      <span className="font-semibold text-ink">{selected.name}</span>
                      {' · '}
                      {form.date} at {form.time} · {form.guests} guests
                    </p>
                    <label className="block">
                      <span className="text-sm font-semibold text-ink">Name</span>
                      <input
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-3 py-2.5 outline-none focus:border-leaf"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-ink">Email</span>
                      <input
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-3 py-2.5 outline-none focus:border-leaf"
                        placeholder="you@studio.com"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-ink">Notes (optional)</span>
                      <textarea
                        value={form.notes}
                        onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                        rows={3}
                        className="mt-2 w-full resize-none rounded-xl border border-ink/15 bg-white px-3 py-2.5 outline-none focus:border-leaf"
                        placeholder="Dietary needs, occasion, accessibility…"
                      />
                    </label>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {error ? <p className="mt-4 text-sm text-red-700">{error}</p> : null}

            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setError(null)
                  setStep((s) => Math.max(0, s - 1))
                }}
                disabled={step === 0}
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted disabled:opacity-30"
              >
                <ChevronLeft size={16} />
                Back
              </button>
              {step < 2 ? (
                <button
                  type="button"
                  onClick={() => {
                    if (!canNext) {
                      setError('Select the required options to continue.')
                      return
                    }
                    setError(null)
                    setStep((s) => s + 1)
                  }}
                  className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-foam transition-transform hover:scale-[1.02]"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  className="rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-foam transition-transform hover:scale-[1.02]"
                >
                  Send request
                </button>
              )}
            </div>
            <p className="mt-4 text-xs text-muted">
              Demo booking — no payment. Confirmation email is simulated locally.
            </p>
          </>
        ) : (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leaf/15 text-leaf">
              <Check size={28} strokeWidth={2.5} />
            </div>
            <p className="mt-5 text-muted leading-relaxed">
              Thanks, {form.name.split(' ')[0]}. We will confirm{' '}
              <span className="font-semibold text-ink">{selected.name}</span> on {form.date} at{' '}
              {form.time} within a few hours.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-8 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-foam"
            >
              Done
            </button>
          </motion.div>
        )}
      </div>
    </Modal>
  )
}

type BookingCTAProps = {
  onBook: () => void
}

export function BookingCTA({ onBook }: BookingCTAProps) {
  return (
    <section id="booking" className="relative overflow-hidden bg-leaf px-5 py-24 text-foam sm:px-8 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(246,249,247,0.25), transparent 40%), radial-gradient(circle at 90% 80%, rgba(11,22,18,0.35), transparent 45%)',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display max-w-2xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl text-balance">
            Ready when the moment is.
          </h2>
          <p className="mt-4 max-w-lg text-fog/90">
            Tell us the format, pick a slot, and we will hold the house for you. No account required.
          </p>
          <button
            type="button"
            onClick={onBook}
            className="mt-8 rounded-full bg-foam px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Open booking
          </button>
        </Reveal>
      </div>
    </section>
  )
}
