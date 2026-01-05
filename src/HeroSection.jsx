import { ArrowBigDown } from 'lucide-preact'
import { useMemo } from 'preact/hooks'
import { fullMenu } from './fullMenu'
import { OrderCTA } from './components/OrderCTA'

export function HeroSection() {
  const featuredMenu = useMemo(
    () => fullMenu.filter((item) => item.featured),
    []
  )

  const formatPrice = (price) => `Rp${price.toLocaleString('id-ID')}`

  return (
    <section id='home' className='mt-8 mx-4'>
      <h2 className='text-2xl text-center font-cursive tracking-wide'>
        Menu Pilihan
      </h2>

      {featuredMenu.length <= 0 ? (
        <p className='text-center mt-4'>Tidak ada menu pilihan saat ini.</p>
      ) : (
        <>
          <div className='flex flex-col mt-4 gap-4 items-center'>
            {featuredMenu.map((item) => (
              <div
                key={item.id}
                target='_blank'
                rel='noopener noreferrer'
                className='border-2 rounded-xl block size-full max-w-sm p-2 bg-amber-300 border-amber-500 shadow transition-transform'
              >
                <div className='flex flex-row justify-between overflow-hidden'>
                  <div className='p-2 flex-1'>
                    <h3 className='font-medium text-2xl tracking-tight text-red-400 text-shadow-xs'>
                      {item.label}
                    </h3>
                    <p className='text-zinc-500'>{item.description}</p>
                    <p className='block uppercase text-xl font-semibold tracking-wide text-zinc-800'>
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <img
                    src={item.image}
                    className='aspect-square max-h-32 max-w-32 object-cover object-center size-full rounded-lg shadow'
                    alt={item.label}
                    loading='lazy'
                  />
                </div>

                <OrderCTA variant='gofood' />
                <OrderCTA variant='grabfood' />
              </div>
            ))}
          </div>

          <div className='flex items-center justify-center py-4'>
            <a
              href='#menu'
              className='flex gap-2 bg-red-300 border-red-100 text-yellow-100 border-2 p-2 rounded-sm hover:bg-red-400 transition-colors'
            >
              Lihat menu yang lain <ArrowBigDown size={20} />
            </a>
          </div>
        </>
      )}
    </section>
  )
}
