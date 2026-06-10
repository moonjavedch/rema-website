import Container from '@/components/layout/Container'

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 xl:py-44">
      <Container>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-24">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Testimonials
            </p>
          </div>

          <div className="max-w-5xl">

            <h2 className="text-4xl font-light leading-[1.05] md:text-6xl xl:text-7xl">
              "REMA completely transformed
              <br className="hidden md:block" />
              the way we generate and
              <br className="hidden md:block" />
              manage leads."
            </h2>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-zinc-600 md:text-xl">
              The automation alone saved our team countless hours every
              week. Response times improved dramatically, lead quality
              increased and our entire follow-up process became far more
              efficient.
            </p>

            <div className="mt-14 border-t border-black/10 pt-8 md:mt-16">
              <p className="text-lg font-medium md:text-xl">
                Sarah Thompson
              </p>

              <p className="mt-2 text-zinc-500">
                Real Estate Broker
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}