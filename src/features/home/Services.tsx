import Container from '@/components/layout/Container'

const services = [
  {
    number: '01',
    title: 'Lead Generation Systems',
    description:
      'Ads, landing pages, CRM, automation and AI qualification working together as one intelligent growth engine.',
  },
  {
    number: '02',
    title: 'AI Chatbots & Automation',
    description:
      '24/7 lead qualification, appointment booking and intelligent prospect nurturing.',
  },
  {
    number: '03',
    title: 'Websites & Landing Pages',
    description:
      'Custom real estate websites and high-converting landing pages built for performance.',
  },
  {
    number: '04',
    title: 'Digital Advertising',
    description:
      'Strategic Facebook and Google advertising campaigns designed to generate qualified opportunities.',
  },
  {
    number: '05',
    title: 'Branding & Visual Identity',
    description:
      'Professional brand systems built specifically for real estate agents, teams and brokerages.',
  },
  {
    number: '06',
    title: 'Marketing Materials',
    description:
      'Property marketing, social content, email campaigns and promotional assets that elevate your brand.',
  },
]

export default function Services() {
  return (
    <section
      style={{
        paddingTop: '160px',
        paddingBottom: '160px',
      }}
    >
      <Container>

        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Services
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-none">
            Everything needed to grow
            <br />
            a modern real estate business.
          </h2>
        </div>

        <div style={{ marginTop: '120px' }}>
          {services.map((service) => (
            <div
              key={service.number}
              style={{
                paddingTop: '64px',
                paddingBottom: '64px',
                borderTop: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1.2fr 1fr',
                  gap: '4rem',
                  alignItems: 'start',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '3rem',
                      fontWeight: 300,
                      color: '#a1a1aa',
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: '2.5rem',
                      lineHeight: 1.05,
                      fontWeight: 500,
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-xl text-xl leading-relaxed text-zinc-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}