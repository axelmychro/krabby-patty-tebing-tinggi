import { ArrowBigDown } from 'lucide-preact'
import { MenuList } from './components/MenuList'

export function HeroSection() {
  return (
    <section id="home" className="mx-2 mt-4 sm:mt-8">
      <h2 className="font-cursive text-center text-2xl tracking-wide">
        Menu Pilihan
      </h2>

      <MenuList filter="featured" ctaSize="md" />

      <div className="flex items-center justify-center py-4">
        <a
          href="#menu"
          className="flex gap-2 rounded-sm border-2 border-red-300 bg-red-400 p-2 text-yellow-100"
        >
          Lihat menu yang lain <ArrowBigDown size={20} />
        </a>
      </div>
    </section>
  )
}
