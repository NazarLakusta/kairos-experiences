import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type HeroProps = {
  onBook: () => void
}

export function Hero({ onBook }: HeroProps) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35])

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative min-h-[100svh] overflow-hidden bg-ink text-foam"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={reduce ? undefined : { y: yImage, opacity }}
        aria-hidden
      >
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(42,122,104,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(168,137,90,0.18),transparent_45%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
        <motion.p
          className="font-display mb-5 text-xs font-semibold tracking-[0.35em] text-fog/90 uppercase"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Private experiences studio
        </motion.p>

        <motion.h1
          className="font-display max-w-4xl text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.88] font-extrabold tracking-tight text-balance"
          initial={reduce ? false : { opacity: 0, y: 36, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
        >
          KAIROS
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md text-base leading-relaxed text-fog/90 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
        >
          Moments composed with intention — tastings, rituals, and closed-door dinners in a house designed for presence.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        >
          <button
            type="button"
            onClick={onBook}
            className="rounded-full bg-foam px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Reserve a moment
          </button>
          <a
            href="#services"
            className="text-sm font-medium text-fog/85 underline-offset-4 transition-colors hover:text-foam hover:underline"
          >
            Explore services
          </a>
        </motion.div>

        <motion.div
          className="mt-14 flex items-center gap-3 text-xs tracking-[0.2em] text-fog/55 uppercase"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          aria-hidden
        >
          <span className="h-px w-10 bg-fog/40" />
          Scroll
        </motion.div>
      </div>
    </section>
  )
}
