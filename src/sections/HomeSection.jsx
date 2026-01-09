import { MenuList } from '../components/MenuList'

export function HomeSection() {
  return (
    <>
      <p className="text-shadow mt-16 text-center text-sm tracking-wide text-pretty sm:text-lg">
        HALAL FOOD. Buka Senin-Sabtu, 19:00-24:00 WIB. Kota Tebing Tinggi,
        Sumatera Utara
      </p>

      <h2 className="font-cursive mt-2 text-center text-4xl tracking-wide underline lg:mt-8">
        Menu Pilihan
      </h2>

      <MenuList filter="featured" ctaSize="md" />
    </>
  )
}
