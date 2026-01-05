import { MenuList } from './components/MenuList'

export function MenuSection() {
  return (
    <section id="menu" className="mt-8">
      <h2 className="font-cursive text-center text-2xl tracking-wide">
        Menu Selengkapnya
      </h2>

      <MenuList filter="unfeatured" ctaSize="sm" />
    </section>
  )
}
