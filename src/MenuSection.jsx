import { useMemo } from "preact/hooks";
import { Utensils, ArrowBigRight, ArrowBigDown } from "lucide-preact";
import { fullMenu } from "./fullMenu";

export function MenuSection() {
  const featuredMenu = useMemo(
    () => fullMenu.filter((item) => !item.featured),
    [],
  );

  const orderLink =
    "https://gofood.co.id/pematangsiantar/restaurant/krabby-patty-tebing-tinggi-kota-5ae25c14-0da7-474b-9d8f-5d9b2fceb3e3";

  return (
    <section id="home" className="mt-8 mx-4">
      <h2 className="text-2xl text-center font-cursive tracking-wide">
        Menu Selengkapnya
      </h2>

      <div className="flex flex-col mt-4 gap-4 items-center">
        {featuredMenu.map((item) => (
          <a
            key={item.name}
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 rounded-xl block size-full max-w-sm p-2 bg-amber-300 border-amber-500 shadow"
          >
            <div className="flex flex-row justify-between overflow-hidden">
              <div className="p-2">
                <h3 className="font-medium text-2xl tracking-tight text-red-400 text-shadow-xs">
                  {item.name}
                </h3>
                <p className="text-zinc-500">{item.description}</p>
                <p className="block uppercase text-xl font-semibold tracking-wide text-zinc-800">
                  {item.price}
                </p>
              </div>

              <img
                src={item.image}
                className="aspect-square max-h-32 max-w-32 object-cover object-center size-full rounded-lg shadow"
                alt={item.name}
                loading="lazy"
              />
            </div>

            <div className="p-2 mt-2 justify-center text-lg flex items-center gap-2 shadow font-semibold bg-red-400 border-4 text-yellow-50 border-red-600 rounded-full">
              <Utensils size={20} /> ORDER DI GOFOOD <ArrowBigRight size={20} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
