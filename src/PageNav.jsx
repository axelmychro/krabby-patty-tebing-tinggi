import { navigationLinks } from './data/navigationLinks'
import { ArrowBigRightDash } from 'lucide-preact'

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
        return (
          <a
            className="flex items-center gap-2 truncate rounded-md border bg-zinc-50 px-1 text-2xl capitalize dark:bg-zinc-950"
            key={link.label}
            href={link.href}
            onClick={onClose}
          >
            <link.icon size={24} />
            {link.label}
          </a>
        )
      })}
    </nav>
  )
}
