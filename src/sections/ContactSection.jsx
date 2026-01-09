import WhatsAppIcon from '~icons/simple-icons/whatsapp'
import GrabIcon from '~icons/simple-icons/grab'
import GojekIcon from '~icons/simple-icons/gojek'
import InstagramIcon from '~icons/simple-icons/instagram'

export function ContactSection() {
  const contacts = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/6285277760791',
      className: 'border-green-500 bg-green-950 text-white',
      icon: WhatsAppIcon,
    },
    {
      name: 'GrabFood',
      href: 'https://food.grab.com/id/id/restaurant/kraby-paty-tebing-tinggi-bandar-utama-delivery/6-C3U3CAWHMFBWVE',
      className: 'border-red-400 bg-red-200 text-black',
      icon: GrabIcon,
    },
    {
      name: 'GoFood',
      href: 'https://gofood.co.id/pematangsiantar/restaurant/krabby-patty-tebing-tinggi-kota-5ae25c14-0da7-474b-9d8f-5d9b2fceb3e3',
      className: 'border-red-300 bg-red-500 text-white',
      icon: GojekIcon,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/krabbypattytebingtinggi/',
      className: 'border-black bg-white text-black',
      icon: InstagramIcon,
    },
  ]

  return (
    <>
      <h2 className="font-display mt-8 text-center text-4xl tracking-wide">
        Kami ada di
      </h2>

      <div className="mt-2 flex flex-wrap gap-2 not-lg:flex-col">
        {contacts.map(({ name, href, className, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-full border-4 p-4 text-4xl font-medium ${className}`}
          >
            <Icon /> {name}
          </a>
        ))}
      </div>

      <p className="mt-2 max-w-xl text-center text-2xl">
        Buka Senin-Sabtu, 19:00-24:00 WIB
      </p>
    </>
  )
}
