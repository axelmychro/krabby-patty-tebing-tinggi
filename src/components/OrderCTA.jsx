import { Utensils, ShoppingBag, ArrowBigRight } from 'lucide-preact'

export function OrderCTA({ variant }) {
  const variants = {
    gofood: {
      href: 'https://gofood.co.id/pematangsiantar/restaurant/krabby-patty-tebing-tinggi-kota-5ae25c14-0da7-474b-9d8f-5d9b2fceb3e3',
      platform: 'GOFOOD',
      bgColor: 'bg-red-500',
      borderColor: 'border-red-600',
      textColor: 'text-yellow-50',
      icon: <Utensils size={20} />,
    },
    grabfood: {
      href: 'https://food.grab.com/id/id/restaurant/kraby-paty-tebing-tinggi-bandar-utama-delivery/6-C3U3CAWHMFBWVE',
      platform: 'GRABFOOD',
      bgColor: 'bg-green-500 hover:bg-green-500',
      borderColor: 'border-green-600',
      textColor: 'text-white',
      icon: <ShoppingBag size={20} />,
    },
  }

  const selectedVariant = variants[variant] || variants.default

  return (
    <a
      href={selectedVariant.href}
      className={`${selectedVariant.bgColor} ${selectedVariant.borderColor} ${selectedVariant.textColor} uppercase  p-2 mt-2 justify-between text-lg flex items-center gap-2 shadow font-semibold  border-4   rounded-full `}
    >
      {selectedVariant.icon} Order {selectedVariant.platform}{' '}
      <ArrowBigRight size={20} />
    </a>
  )
}
