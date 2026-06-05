import Container from '@/components/layout/Container'

const services = [
  {
    number: '01',
    title: 'Lead Generation Systems',
    description:
      'We build complete lead acquisition systems that attract, capture and qualify real estate prospects automatically.',
  },
  {
    number: '02',
    title: 'AI Automation',
    description:
      'From instant lead qualification to appointment booking, our AI systems work around the clock so opportunities never go cold.',
  },
  {
    number: '03',
    title: 'Branding & Visual Identity',
    description:
      'Logo design, brokerage branding and professional visual systems that position you as the obvious choice in your market.',
  },
  {
    number: '04',
    title: 'High-Converting Landing Pages',
    description:
      'Custom-designed experiences built to convert traffic into conversations, appointments and clients.',
  },
  {
    number: '05',
    title: 'Digital Advertising',
    description:
      'Strategic Facebook, Instagram and Google campaigns designed specifically for real estate professionals.',
  },
  {
    number: '06',
    title: 'Marketing Materials',
    description:
      'Property flyers, social media content, email campaigns and marketing assets designed to support every stage of your growth.',
  },
]

export default function Services() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Services
          </p>

          <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
            Growth systems built for modern real estate professionals.
          </h2>
        </div>

        <div className="mt-24 flex flex-col gap-32">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid gap-10 border-t border-black/10 pt-10 md:grid-cols-12"
            >
              <div className="md:col-span-2">
                <span className="text-sm font-medium text-zinc-500">
                  {service.number}
                </span>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-3xl font-bold md:text-5xl">
                  {service.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-lg leading-relaxed text-zinc-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}