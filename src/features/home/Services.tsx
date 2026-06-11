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
    <section className="py-20 md:py-28 lg:py-40">
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

       <div className="mt-16 md:mt-24 lg:mt-[120px]">
         {services.map((service) => (
  <div
    key={service.title}
    className="border-t border-black/10 py-10 md:py-14 lg:py-16"
  >
              <div className="grid gap-8 md:gap-10 lg:grid-cols-[180px_1.2fr_1fr] lg:gap-16">
                <div>
                 <span className="text-4xl md:text-5xl font-light text-zinc-400">
                    {service.number}
                  </span>
                </div>

                <div>
                 <h3 className="text-3xl md:text-4xl leading-tight font-medium">
                    {service.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-xl text-lg md:text-xl leading-relaxed text-zinc-600">
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