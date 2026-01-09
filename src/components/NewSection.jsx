import { ArrowBigDown } from 'lucide-preact'

export function NewSection({ current, next }) {
  const SectionComponent = current.component

  return (
    <section
      id={current.section}
      className="flex min-h-screen flex-col items-center justify-center px-2 pt-4 sm:pt-8"
    >
      {/* render actual section */}
      <SectionComponent />

      {/* CTA ke section berikutnya */}
      {next && current.nextSectionCTA && (
        <ToNextSection href={next.href} label={current.nextSectionCTA} />
      )}
    </section>
  )
}

function ToNextSection({ href, label }) {
  return (
    <div className="flex items-center justify-center py-4">
      <a
        href={href}
        className="flex items-center gap-2 rounded-full border-2 bg-yellow-300 px-2 text-zinc-950 duration-200 hover:scale-103 focus:scale-103"
      >
        {label} <ArrowBigDown size={16} />
      </a>
    </div>
  )
}
