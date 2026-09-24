import { motion } from 'framer-motion'
import { services, type Service } from '../data/services'
import { Reveal } from './ui'

type ServicesProps = {
  onSelect: (service: Service) => void
}

export function Services({ onSelect }: ServicesProps) {
  return (
    <section id="services" className="relative bg-foam px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-xs font-semibold tracking-[0.3em] text-leaf uppercase">
            Services
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl leading-tight font-bold tracking-tight text-ink sm:text-5xl text-balance">
            Four formats. One standard of attention.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Each session is paced, lit, and plated for the people in the room — never for a crowd.
          </p>
        </Reveal>

        <ul className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.06} y={20}>
              <li className="group grid gap-4 py-8 md:grid-cols-[1.2fr_1fr_auto] md:items-end md:gap-8">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {service.name}
                    </h3>
                    <span className="text-sm text-muted">
                      {service.duration} · {service.capacity}
                    </span>
                  </div>
                  <p className="mt-3 max-w-lg text-muted">{service.summary}</p>
                </div>
                <p className="hidden text-sm leading-relaxed text-muted md:block">{service.detail}</p>
                <div className="flex items-center justify-between gap-6 md:flex-col md:items-end md:justify-end">
                  <span className="font-display text-lg font-semibold text-leaf">{service.price}</span>
                  <motion.button
                    type="button"
                    onClick={() => onSelect(service)}
                    className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-foam"
                    whileTap={{ scale: 0.97 }}
                  >
                    Book this
                  </motion.button>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
