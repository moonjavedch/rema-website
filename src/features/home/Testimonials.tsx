import Container from '@/components/layout/Container'

export default function Testimonials() {
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
              Testimonials
            </p>
          </div>

          <div className="max-w-5xl">

            <h2
              className="text-5xl md:text-7xl font-light leading-none"
            >
              "REMA completely transformed
              <br />
              the way we generate and
              <br />
              manage leads."
            </h2>

            <p
              className="max-w-3xl text-xl leading-relaxed text-zinc-600"
              style={{
                marginTop: '56px',
              }}
            >
              The automation alone saved our team countless hours every
              week. Response times improved dramatically, lead quality
              increased and our entire follow-up process became far more
              efficient.
            </p>

            <div
              style={{
                marginTop: '72px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <p className="text-xl font-medium">
                Sarah Thompson
              </p>

              <p
                className="mt-2 text-zinc-500"
              >
                Real Estate Broker
              </p>
            </div>

          </div>
        </div>

      </Container>
    </section>
  )
}