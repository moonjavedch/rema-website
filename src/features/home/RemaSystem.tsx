import Container from '@/components/layout/Container'

const systemSteps = [
  {
    number: '01',
    title: 'Traffic Sources',
    items: [
      'Facebook Advertising',
      'Google Advertising',
      'Audience Targeting',
    ],
    description:
      'Strategic advertising campaigns generate qualified traffic from buyers, sellers, investors and renters.',
  },
  {
    number: '02',
    title: 'Landing Pages',
    items: [
      'Conversion Design',
      'Lead Capture Forms',
      'Offer Positioning',
    ],
    description:
      'Dedicated landing pages convert visitors into real opportunities through clear messaging and optimized user experience.',
  },
  {
    number: '03',
    title: 'Lead Capture',
    items: [
      'Instant Submission',
      'Qualification Data',
      'Contact Collection',
    ],
    description:
      'Every lead enters the REMA ecosystem with the information required to begin intelligent follow-up.',
  },
  {
    number: '04',
    title: 'WhatsApp Engagement',
    items: [
      'Instant Messaging',
      'Lead Interaction',
      'Fast Response',
    ],
    description:
      'Prospects receive immediate engagement through WhatsApp Business, increasing response rates and trust.',
  },
  {
    number: '05',
    title: 'AI Qualification',
    items: [
      'Lead Qualification',
      'Question Handling',
      'Appointment Booking',
    ],
    description:
      'AI agents qualify prospects, answer questions and identify the highest-intent opportunities automatically.',
  },
  {
    number: '06',
    title: 'CRM Management',
    items: [
      'Lead Storage',
      'Pipeline Tracking',
      'Follow-Up Systems',
    ],
    description:
      'Every lead is organized and tracked through the CRM to ensure no opportunity is lost.',
  },
  {
    number: '07',
    title: 'Automation Layer',
    items: [
      'Make Integrations',
      'Workflow Automation',
      'Data Synchronization',
    ],
    description:
      'Automation connects every platform together and eliminates manual work across the lead journey.',
  },
  {
    number: '08',
    title: 'Sales Conversion',
    items: [
      'Qualified Leads',
      'Booked Appointments',
      'Closed Deals',
    ],
    description:
      'Your team focuses on conversations and closings while the system handles the repetitive work.',
  },
]

export default function RemaSystem() {
  return (
    <section className="border-t border-black/10 py-32">
      <Container>

        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            The REMA System
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-none">
            From first click
            <br />
            to closed deal.
          </h2>

          <p
            className="max-w-3xl text-xl leading-relaxed text-zinc-600"
            style={{ marginTop: '48px' }}
          >
            Every component works together to generate, capture,
            qualify, nurture and convert leads through one
            intelligent growth system.
          </p>
        </div>

        <div style={{ marginTop: '120px' }}>
          {systemSteps.map((step) => (
            <div
              key={step.number}
              style={{
                paddingTop: '80px',
                paddingBottom: '80px',
                borderTop: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '220px 1fr 1.5fr',
                  gap: '4rem',
                  alignItems: 'start',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '5rem',
                      lineHeight: 1,
                      fontWeight: 300,
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-8">
                    {step.title}
                  </h3>

                  <div className="space-y-4">
                    {step.items.map((item) => (
                      <div
                        key={item}
                        className="text-zinc-600"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="max-w-xl text-xl leading-relaxed text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '120px',
            paddingTop: '80px',
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <div className="max-w-5xl">
            <h3 className="text-5xl md:text-7xl font-light leading-none">
              One connected
              <br />
              growth system.
            </h3>

            <p
              className="max-w-3xl text-xl leading-relaxed text-zinc-600"
              style={{ marginTop: '48px' }}
            >
              Traffic. Leads. Qualification. Automation.
              CRM. Sales. Every stage works together to
              create predictable growth for modern real estate
              professionals.
            </p>
          </div>
        </div>

      </Container>
    </section>
  )
}