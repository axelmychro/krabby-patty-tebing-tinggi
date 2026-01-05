import { fullMenu } from '../data/fullMenu'
import { OrderCTA } from './OrderCTA'

const formatPrice = price => `Rp${price.toLocaleString('id-ID')}`

export function MenuList({ filter = 'all', ctaSize = 'md' }) {
  let filteredItems = []

  switch (filter) {
    case 'featured':
      filteredItems = fullMenu.filter(item => item.featured)
      break
    case 'unfeatured':
      filteredItems = fullMenu.filter(item => !item.featured)
      break
    default:
      filteredItems = fullMenu
  }

  if (filteredItems.length === 0) {
    return (
      <p className="py-4 text-center text-zinc-500">
        Tidak ada menu yang tersedia.
      </p>
    )
  }

  return (
    <div className="mt-2 flex flex-wrap items-center justify-center gap-2 not-lg:flex-col">
      {filteredItems.map(item => (
        <div
          key={item.id}
          className="block w-full max-w-sm rounded-xl border-2 border-amber-500 bg-amber-300 p-2 shadow"
        >
          <div className="flex flex-row justify-between overflow-hidden">
            <div className="flex-1 p-2">
              <h3 className="text-2xl font-medium tracking-wide text-red-400 text-shadow-xs">
                {item.label}
              </h3>
              <p className="tracking-wide text-zinc-500">{item.description}</p>
              <p className="block text-xl font-semibold tracking-tight text-zinc-800 uppercase">
                {formatPrice(item.price)}
              </p>
            </div>

            <img
              src={item.image}
              className="aspect-square max-h-32 max-w-32 rounded-lg object-cover object-center shadow"
              alt={item.label}
              loading="lazy"
            />
          </div>

          <div
            className={`gap-2 ${
              ctaSize === 'sm' ? 'grid grid-cols-2 ' : 'flex flex-col '
            } mt-2`}
          >
            <OrderCTA variant="gofood" size={ctaSize} />
            <OrderCTA variant="grabfood" size={ctaSize} />
          </div>
        </div>
      ))}
    </div>
  )
}
