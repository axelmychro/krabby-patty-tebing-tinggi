import { MenuList } from '../components/MenuList'
import { ArrowBigDown } from 'lucide-preact'

export function MenuSection() {
  return (
    <section
      id="menu"
      className="flex min-h-screen flex-col items-center justify-center px-2 pt-16"
    >
      <h2 className="font-cursive mt-8 text-center text-4xl tracking-wide underline">
        Menu Selengkapnya
      </h2>

      <MenuList filter="unfeatured" ctaSize="sm" />

      <div className="flex items-center justify-center py-4">
        <a
          href="#about"
          className="flex items-center gap-2 rounded-full border-2 bg-yellow-300 px-2 text-zinc-950"
        >
          Tentang kami <ArrowBigDown size={16} />
        </a>
      </div>
    </section>
  )
}
