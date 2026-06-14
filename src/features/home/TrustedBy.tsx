'use client'

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
  const marqueeBrands = [...brands, ...brands]

  return (
    <section className="overflow-hidden border-t border-black/10 py-12 md:py-16">
      <Container>
        <p className="mb-10 text-center text-xs uppercase tracking-[0.25em] text-zinc-500 md:text-sm">
          Trusted By Real Estate Professionals
        </p>
      </Container>

      <div className="overflow-hidden">
        <div className="trusted-marquee flex items-center">
          {marqueeBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="mx-10 shrink-0 text-lg font-medium text-zinc-400 md:mx-16 md:text-xl"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}