import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from './ui'

export function Space() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section id="space" ref={ref} className="bg-mist px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="font-display text-xs font-semibold tracking-[0.3em] text-leaf uppercase">
            The space
          </p>
          <h2 className="font-display mt-3 text-4xl leading-tight font-bold tracking-tight text-ink sm:text-5xl text-balance">
            A house that knows when to disappear.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Soft plaster, low timber, garden light. The rooms are tuned for conversation and silence —
            never for spectacle. You will not find a logo wall or a playlist that fights you.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 max-w-sm">
            {[
              ['Rooms', '4'],
              ['Garden', 'Open'],
              ['Kitchen', 'Live fire'],
              ['City', 'Quiet edge'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs tracking-[0.2em] text-muted uppercase">{k}</dt>
                <dd className="font-display mt-1 text-2xl font-bold text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/6]">
            <motion.div
              className="absolute inset-0 scale-110 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80')",
                ...(reduce ? {} : { y }),
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ink/10" />
          </div>
          <p className="mt-4 text-sm text-muted">Main atelier · north light · limestone floor</p>
        </Reveal>
      </div>
    </section>
  )
}
