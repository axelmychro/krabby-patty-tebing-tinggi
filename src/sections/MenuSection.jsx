import { MenuList } from '../components/MenuList'
import { ArrowBigDown } from 'lucide-preact'

export function MenuSection() {
  return (
    <>
      <h2 className="font-cursive mt-8 text-center text-4xl tracking-wide underline">
        Menu Selengkapnya
      </h2>

      <MenuList filter="unfeatured" ctaSize="sm" />
    </>
  )
}
