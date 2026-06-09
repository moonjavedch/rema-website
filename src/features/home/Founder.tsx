import Container from '@/components/layout/Container'

export default function Founder() {
  return (
    <section
      style={{
        paddingTop: '180px',
        paddingBottom: '180px',
      }}
    >
      <Container>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '6rem',
            alignItems: 'start',
          }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              About REMA
            </p>
          </div>

          <div>

            <h2
              className="max-w-6xl text-5xl md:text-7xl font-light leading-none"
            >
              Helping real estate professionals
              <br />
              grow through modern marketing,
              <br />
              automation and intelligent systems.
            </h2>

            <p
              className="max-w-3xl text-xl leading-relaxed text-zinc-600"
              style={{
                marginTop: '56px',
              }}
            >
              Most agents don't have a lead problem.
              They have a system problem.
            </p>

            <p
              className="max-w-3xl text-xl leading-relaxed text-zinc-600"
              style={{
                marginTop: '32px',
              }}
            >
              REMA was built to solve that problem by combining
              lead generation, branding, websites, advertising,
              AI automation and CRM systems into one connected
              growth engine designed specifically for real estate.
            </p>

            <p
              className="max-w-3xl text-xl leading-relaxed text-zinc-600"
              style={{
                marginTop: '32px',
              }}
            >
              Instead of juggling disconnected tools and vendors,
              our clients operate with a unified system that
              generates opportunities, follows up automatically
              and helps convert more prospects into clients.
            </p>

            <div
              style={{
                marginTop: '64px',
              }}
            >
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