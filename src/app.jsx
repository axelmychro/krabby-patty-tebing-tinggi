import { useState } from 'preact/hooks'
import { HeroSection } from './sections/HeroSection'
import { MenuSection } from './sections/MenuSection'
import { PageFooter, PageHeader, PageNav } from './Page'
import {
  AboutSection,
  ContactSection,
  LocationSection,
} from './sections/Sections'

export function App() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <PageHeader navOpen={navOpen} onNavToggle={() => setNavOpen(!navOpen)} />
      <main>
        <HeroSection />
        <MenuSection />
        <PageNav isOpen={navOpen} onClose={() => setNavOpen(false)} />
        <AboutSection />
        <LocationSection />
        <ContactSection />
      </main>
      <PageFooter />
    </>
  )
}
