import Container from '@/components/layout/Container'

const brands = [
  'RE/MAX',
  'Royal LePage',
  'eXp Realty',
  'Century 21',
  'Keller Williams',
  'Sotheby’s',
  'HomeLife',
  'Coldwell Banker',
]

export default function TrustedBy() {
  return (
    <section className="border-t border-black/10 py-10 overflow-hidden">
      <Container>
        <p className="mb-10 text-center text-sm uppercase tracking-[0.25em] text-zinc-500">
          Trusted By Real Estate Professionals
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-lg font-medium text-zinc-400"
            >
              {brand}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}