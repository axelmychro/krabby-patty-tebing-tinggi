import { Utensils, ShoppingBag, ArrowBigRight } from 'lucide-preact'

export function OrderCTA({ variant = 'gofood', size = 'md' }) {
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
      bgColor: 'bg-green-500',
      borderColor: 'border-green-600',
      textColor: 'text-white',
      icon: <ShoppingBag size={20} />,
    },
  }

  const sizeClasses = {
    sm: 'text-sm rounded-xl text-end',
    md: 'text-lg rounded-2xl',
  }

  const selectedVariant = variants[variant] || variants.gofood
  const selectedSizeClass = sizeClasses[size] || sizeClasses.md

  return (
    <a
      href={selectedVariant.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${selectedVariant.bgColor} duration-200 hover:scale-103 focus:scale-103 ${selectedVariant.borderColor} ${selectedVariant.textColor} p-2 uppercase ${selectedSizeClass} flex items-center justify-center gap-2 border-4 text-lg leading-none font-semibold shadow`}
    >
      {selectedVariant.icon} Order {selectedVariant.platform}{' '}
      <ArrowBigRight size={20} />
    </a>
  )
}
