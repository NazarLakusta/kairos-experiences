import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePastHero } from './ui'

type NavProps = {
  onBook: () => void
}

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#space', label: 'Space' },
  { href: '#booking', label: 'Book' },
]

export function Nav({ onBook }: NavProps) {
  const scrolled = usePastHero()
  const [open, setOpen] = useState(false)
  const onDark = !scrolled

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 py-4 transition-all duration-500 sm:px-8 ${
          scrolled
            ? 'mt-3 rounded-2xl border border-fog/50 bg-foam px-4 shadow-[0_8px_30px_rgba(11,22,18,0.1)] sm:px-6'
            : ''
        }`}
      >
        <a
          href="#top"
          className={`font-display text-lg font-bold tracking-[0.18em] sm:text-xl ${
            onDark ? 'text-foam' : 'text-ink'
          }`}
        >
          KAIROS
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                onDark ? 'text-fog/80 hover:text-foam' : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBook}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] ${
              onDark ? 'bg-foam text-ink' : 'bg-ink text-foam'
            }`}
          >
            Book a session
          </button>
          <button
            type="button"
            className={`rounded-full p-2 md:hidden ${onDark ? 'text-foam' : 'text-ink'}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 rounded-2xl border border-ink/10 bg-foam/95 p-4 shadow-lg backdrop-blur-md md:hidden"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-ink hover:bg-mist"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
