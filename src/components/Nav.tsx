import { motion } from 'framer-motion'
import { useScrolled } from './ui'

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
  const scrolled = useScrolled()

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
            ? 'mt-3 rounded-2xl border border-fog/40 bg-foam/85 px-4 shadow-[0_8px_30px_rgba(11,22,18,0.08)] backdrop-blur-md sm:px-6'
            : ''
        }`}
      >
        <a href="#top" className="font-display text-lg font-bold tracking-[0.18em] text-ink sm:text-xl">
          KAIROS
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onBook}
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-foam transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Book a session
        </button>
      </div>
    </motion.header>
  )
}
