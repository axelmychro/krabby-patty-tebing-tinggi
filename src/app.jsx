import "./app.css";
import { HeroSection } from "./HeroSection";
import { MenuSection } from "./MenuSection";

export function App() {
  return (
    <>
      <div>
        <header className="bg-red-400 p-4">
          <a href="#">
            <h1 className="text-2xl text-pretty text-center sm:text-4xl font-display border-b-2">
              Krabby Patty Tebing Tinggi
            </h1>
          </a>
        </header>
        <HeroSection />
        <MenuSection />
      </div>
    </>
  );
}
