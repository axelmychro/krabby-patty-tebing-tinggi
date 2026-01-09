export function LocationSection() {
  return (
    <>
      <h2 className="sr-only">Lokasi</h2>

      <iframe
        title="Maps from Google"
        className="size-full min-h-64 max-w-xl min-w-64 rounded-lg border-zinc-950 lg:min-h-96"
        src="https://www.google.com/maps/embed?pb=!4v1767683093917!6m8!1m7!1sd9076-CI1Wuai7Er4F8mbA!2m2!1d3.330792182880741!2d99.15704024974357!3f215.4850929239648!4f-6.6124245645686415!5f0.5382469523460184"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="max-w-xl">
        <a
          className="text-lg"
          href="https://maps.app.goo.gl/eZi7UQ5bsqkXTnk89"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jl. Lintas Sumatera No. 71, Tebing Tinggi, North Sumatra
        </a>
        <small className="block text-xs">3°19'50.6"N 99°09'25.1"E</small>
      </div>
    </>
  )
}
