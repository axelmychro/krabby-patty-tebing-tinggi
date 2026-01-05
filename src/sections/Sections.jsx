import { siWhatsapp } from 'simple-icons'
import { ArrowBigDown } from 'lucide-preact'
import { GoFood, GrabFood, WhatsApp } from '../components/SimpleIcons'

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center px-2 pt-16"
    >
      <h2 className="font-cursive mt-8 text-center text-4xl tracking-wide underline">
        Tentang Kami
      </h2>

      <p className="mt-2 max-w-xl text-center text-2xl leading-relaxed">
        Kraby Paty adalah usaha burger di Tebing Tinggi yang buka setiap malam
        setelah jam kerja. Kami fokus pada menu sederhana, rasa nikmat, dan
        porsi yang bikin kenyang.
      </p>

      <div className="flex items-center justify-center py-4">
        <a
          href="#location"
          className="flex items-center gap-2 rounded-full border-4 bg-yellow-300 px-2 text-zinc-950"
        >
          Lokasi usaha <ArrowBigDown size={16} />
        </a>
      </div>
    </section>
  )
}

export function LocationSection() {
  return (
    <section
      id="location"
      className="flex min-h-screen flex-col items-center justify-center px-2 pt-16"
    >
      <h2 className="sr-only">Lokasi</h2>

      <iframe
        className="size-full min-h-64 max-w-xl min-w-64 rounded-lg border-zinc-950 lg:min-h-96"
        src="https://www.google.com/maps/embed?pb=!4v1767635018397!6m8!1m7!1sgMi2TuOEgcg2Mj19oCH_Xw!2m2!1d3.331449074421391!2d99.15573409211527!3f283.96179835510117!4f-6.273047641713603!5f0.7820865974627469"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <p className="max-w-xl text-lg">
        Jl. Kapten F Tandean, Bandar Utama, Kec. Tebing Tinggi Kota, Kota Tebing
        Tinggi, Sumatera Utara 20998
      </p>

      <div className="flex items-center justify-center py-4">
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full border-4 bg-yellow-300 px-2 text-zinc-950"
        >
          Hubungi kami <ArrowBigDown size={16} />
        </a>
      </div>
    </section>
  )
}

export function ContactSection() {
  const contacts = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/6285277760791',
      className: 'border-green-500 bg-green-950 text-white',
      icon: WhatsApp,
    },
    {
      name: 'GrabFood',
      href: 'https://food.grab.com/...',
      className: 'border-red-400 bg-red-200 text-black',
      icon: GrabFood,
    },
    {
      name: 'GoFood',
      href: 'https://gofood.co.id/...',
      className: 'border-red-300 bg-red-500 text-white',
      icon: GoFood,
    },
  ]

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-2 pt-16"
    >
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
        Buka Senin-Sabtu, 17:00-23:00 WIB
      </p>
    </section>
  )
}
