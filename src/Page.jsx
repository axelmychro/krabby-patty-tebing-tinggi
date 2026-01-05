import { navigationLinks } from './data/navigationLinks'
import { ArrowBigRightDash, MenuSquare } from 'lucide-preact'

export function PageHeader({ navOpen, onNavToggle }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex min-h-16 min-w-full items-center justify-end bg-red-400 px-2 sm:px-4 lg:px-8 lg:py-2">
      <a className="flex-1" href="#">
        <h1 className="font-display text-shadow text-2xl not-sm:text-balance sm:text-3xl">
          Kraby Paty Tebing Tinggi
        </h1>
      </a>

      <div className="flex flex-wrap items-center gap-2 not-lg:hidden">
        {navigationLinks.map(link => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              className="flex items-center gap-2 truncate rounded-sm bg-zinc-50 px-1 text-xl text-zinc-950 capitalize"
              href={link.href}
            >
              <Icon size={20} />
              {link.label}
            </a>
          )
        })}
      </div>

      <button
        className="z-50 lg:hidden"
        role="button"
        aria-label="Navigation menu"
        onClick={onNavToggle}
      >
        <MenuSquare size={48} />
      </button>
    </header>
  )
}

export function PageNav({ isOpen, onClose }) {
  return (
    <nav
      className={`fixed inset-0 left-[60%] z-10 space-y-4 border-l p-2 backdrop-blur-xs transition-transform lg:hidden ${isOpen ? '' : 'translate-x-full'}`}
    >
      <button
        className="flex items-center gap-2 truncate rounded-md border bg-zinc-50 px-1 text-2xl capitalize dark:bg-zinc-950"
        onClick={onClose}
      >
        Kembali <ArrowBigRightDash />
      </button>
      {navigationLinks.map(link => {
        const Icon = link.icon
        return (
          <a
            className="flex items-center gap-2 truncate rounded-md border bg-zinc-50 px-1 text-2xl capitalize dark:bg-zinc-950"
            key={link.label}
            href={link.href}
            onClick={onClose}
          >
            <Icon size={24} />
            {link.label}
          </a>
        )
      })}
    </nav>
  )
}
