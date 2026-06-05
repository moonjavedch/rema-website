import Container from '@/components/layout/Container'

export default function Testimonials() {
  return (
    <section className="py-32">
      <Container>
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Testimonials
        </p>

        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            "REMA completely transformed the way we generate and manage leads.
            The automation alone saved our team countless hours every week."
          </h2>

          <div className="mt-10">
            <p className="font-semibold">
              Sarah Thompson
            </p>

            <p className="text-zinc-500">
              Real Estate Broker
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}