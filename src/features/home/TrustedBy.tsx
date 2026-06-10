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
    <section className="overflow-hidden border-t border-black/10 py-10 md:py-14">
      <Container>
        <p className="mb-8 text-center text-xs uppercase tracking-[0.25em] text-zinc-500 md:mb-10 md:text-sm">
          Trusted By Real Estate Professionals
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-16 md:gap-y-8">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-base font-medium text-zinc-400 md:text-lg"
            >
              {brand}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}