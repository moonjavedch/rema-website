import Container from '@/components/layout/Container'

export default function Founder() {
  return (
    <section className="py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              About REMA
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Helping real estate professionals grow through modern marketing,
              automation and intelligent systems.
            </h2>

            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-zinc-600">
              REMA was founded to help serious agents and brokerages generate
              more opportunities, improve lead quality and build scalable growth
              systems. We combine strategic marketing, premium creative work and
              AI-powered automation to create a complete client acquisition
              ecosystem.
            </p>

            <div className="mt-10">
              <p className="font-semibold">Steve</p>
              <p className="text-zinc-500">
                Founder & CEO, REMA
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}