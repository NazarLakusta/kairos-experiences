import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './ui'

const line =
  'We design the pause between arriving and remembering — the light, the pacing, the plate that lands when conversation softens.'

export function Manifesto() {
  const reduce = useReducedMotion()
  const words = line.split(' ')

  return (
    <section className="bg-mist px-5 py-20 sm:px-8 sm:py-24" aria-label="Manifesto">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display text-xs font-semibold tracking-[0.3em] text-leaf uppercase">
            Manifesto
          </p>
        </Reveal>
        <h2 className="font-display mt-6 text-2xl leading-snug font-bold tracking-tight text-ink sm:text-4xl text-balance">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.28em] inline-block"
              initial={reduce ? false : { opacity: 0.15, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{
                duration: 0.45,
                delay: reduce ? 0 : i * 0.028,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  )
}
