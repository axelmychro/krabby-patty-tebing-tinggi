import { navigationLinks } from './data/navigationLinks'
import { NewSection } from './components/NewSection'
import { PageHeader, PageNav, PageFooter } from './PageProps'
import { useState } from 'preact/hooks'

export function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <PageHeader navOpen={navOpen} onNavToggle={() => setNavOpen(!navOpen)} />
      <PageNav isOpen={navOpen} onClose={() => setNavOpen(false)} />

      <main>
        {navigationLinks.map((link, index) => (
          <NewSection
            key={link.section}
            current={link}
            next={navigationLinks[index + 1]}
          />
        ))}
      </main>

      <PageFooter />
    </>
  )
}
