import { Home, UtensilsCrossed, MapPin, Info, Phone } from 'lucide-preact'
import { HomeSection } from '../sections/HomeSection'
import { MenuSection } from '../sections/MenuSection'
import { AboutSection } from '../sections/AboutSection'
import { LocationSection } from '../sections/LocationSection'
import { ContactSection } from '../sections/ContactSection'

export const navigationLinks = [
  {
    label: 'beranda',
    section: 'home',
    href: '#home',
    icon: Home,
    nextSectionCTA: 'Lihat menu yang lain',
    component: HomeSection,
  },
  {
    label: 'menu',
    section: 'menu',
    href: '#menu',
    icon: UtensilsCrossed,
    nextSectionCTA: 'Tentang kami',
    component: MenuSection,
  },
  {
    label: 'kami',
    section: 'about',
    href: '#about',
    icon: Info,
    nextSectionCTA: 'Lokasi usaha',
    component: AboutSection,
  },
  {
    label: 'lokasi',
    section: 'location',
    href: '#location',
    icon: MapPin,
    nextSectionCTA: 'Hubungi kami',
    component: LocationSection,
  },
  {
    label: 'hubungi',
    section: 'contact',
    href: '#contact',
    icon: Phone,
    nextSectionCTA: false,
    component: ContactSection,
  },
]
