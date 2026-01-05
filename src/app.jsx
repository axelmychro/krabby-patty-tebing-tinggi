import { HeroSection } from './HeroSection'
import { MenuSection } from './MenuSection'
import { PageNav } from './PageNav'
import { MenuSquare } from 'lucide-preact'
import { useState } from 'preact/hooks'
import { navigationLinks } from './data/navigationLinks'

export function App() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-10 flex min-h-16 min-w-full items-center justify-end bg-red-400 px-2 lg:py-2">
        <a className="flex-1" href="#">
          <h1 className="font-display text-shadow text-2xl not-sm:text-balance sm:text-3xl">
            Kraby Paty Tebing Tinggi
          </h1>
        </a>

        <div className="flex flex-wrap items-center gap-2 not-lg:hidden">
          {navigationLinks.map(link => (
            <a
              key={link.label}
              className="flex items-center truncate rounded-sm bg-zinc-50 px-1 text-xl text-zinc-950 capitalize"
              href={link.href}
            >
              <link.icon size={20} />
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="z-50 lg:hidden"
          role="button"
          aria-label="Navigation menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          <MenuSquare size={48} />
        </button>
      </header>

      <HeroSection />
      <MenuSection />
      <PageNav isOpen={navOpen} onClose={() => setNavOpen(false)} />
    </>
  )
}
