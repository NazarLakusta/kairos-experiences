import { processSteps } from '../data/services'
import { Reveal } from './ui'

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink px-5 py-24 text-foam sm:px-8 sm:py-32">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-leaf/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-brass/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-xs font-semibold tracking-[0.3em] text-fog/70 uppercase">
            Process
          </p>
          <h2 className="font-display mt-3 max-w-xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl text-balance">
            From inquiry to the first breath in the room.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={0.08 * i}>
              <li>
                <span className="font-display text-sm font-semibold tracking-[0.25em] text-brass">
                  {step.n}
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-fog/75 leading-relaxed">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
