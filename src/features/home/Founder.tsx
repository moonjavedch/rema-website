import Container from '@/components/layout/Container'

export default function Founder() {
  return (
    <section className="py-20 md:py-28 lg:py-[180px]">
      <Container>

        <div className="grid gap-10 md:gap-12 lg:grid-cols-[220px_1fr] lg:gap-24">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              About REMA
            </p>
          </div>

          <div>

            <h2 className="max-w-6xl text-4xl md:text-6xl lg:text-7xl font-light leading-tight lg:leading-none">
              Helping real estate professionals
              <br />
              grow through modern marketing,
              <br />
              automation and intelligent systems.
            </h2>

            <p className="mt-10 md:mt-14 max-w-3xl text-lg md:text-xl leading-relaxed text-zinc-600">
              Most agents don't have a lead problem.
              They have a system problem.
            </p>

            <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-zinc-600">
              REMA was built to solve that problem by combining
              lead generation, branding, websites, advertising,
              AI automation and CRM systems into one connected
              growth engine designed specifically for real estate.
            </p>

            <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-zinc-600">
              Instead of juggling disconnected tools and vendors,
              our clients operate with a unified system that
              generates opportunities, follows up automatically
              and helps convert more prospects into clients.
            </p>

            <div className="mt-12 md:mt-16">
              <p className="text-xl font-medium">
                Steve
              </p>

              <p className="mt-2 text-zinc-500">
                Founder & CEO, REMA
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}