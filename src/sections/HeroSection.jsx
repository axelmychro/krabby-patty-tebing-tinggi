import { ArrowBigDown } from 'lucide-preact'
import { MenuList } from '../components/MenuList'

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-2 pt-4 sm:pt-8"
    >
      <p className="text-shadow mt-16 text-center text-sm tracking-wide text-pretty sm:text-lg">
        HALAL FOOD. Buka Senin-Sabtu, 17:00-23:00 WIB. Kota Tebing Tinggi,
        Sumatera Utara
      </p>

      <h2 className="font-cursive mt-2 text-center text-4xl tracking-wide underline lg:mt-8">
        Menu Pilihan
      </h2>

      <MenuList filter="featured" ctaSize="md" />

      <div className="flex items-center justify-center py-4">
        <a
          href="#menu"
          className="flex items-center gap-2 rounded-full border-2 bg-yellow-300 px-2 text-zinc-950"
        >
          Lihat menu yang lain <ArrowBigDown size={16} />
        </a>
      </div>
    </section>
  )
}
