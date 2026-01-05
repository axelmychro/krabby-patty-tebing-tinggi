import './app.css'
import { HeroSection } from './HeroSection'
import { MenuSection } from './MenuSection'

export function App() {
  return (
    <>
      <div>
        <header className="bg-red-400 sm:p-4">
          <a href="#">
            <h1 className="font-display border-b-2 text-center text-2xl not-sm:text-balance sm:text-4xl">
              Krabby Patty Tebing Tinggi
            </h1>
          </a>
        </header>
        <HeroSection />
        <MenuSection />
      </div>
    </>
  )
}
