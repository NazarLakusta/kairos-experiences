export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-foam px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-bold tracking-[0.18em] text-ink">KAIROS</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Portfolio case — private experiences studio with services and booking. Built as a demo of
            AI-assisted web craft: modern stack, intentional motion, production-minded code.
          </p>
        </div>
        <div className="text-sm text-muted">
          <p>hello@kairos.studio</p>
          <p className="mt-1">© {new Date().getFullYear()} KAIROS · Demo site</p>
        </div>
      </div>
    </footer>
  )
}
