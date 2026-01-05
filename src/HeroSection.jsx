import { ArrowBigDown } from 'lucide-preact'
import { MenuList } from './components/MenuList'

export function HeroSection() {
  return (
    <section id="home" className="px-2 pt-4 sm:pt-8">
      <p className="text-shadow mt-16 text-center text-sm font-semibold text-pretty sm:text-lg">
        HALAL FOOD. Senin-Sabtu, 17:00-23:00 WIB. Kota Tebing Tinggi, Sumatera
        Utara
      </p>

      <h2 className="font-cursive mt-2 text-center text-2xl tracking-wide">
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
