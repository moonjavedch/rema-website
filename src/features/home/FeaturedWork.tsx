import Container from '@/components/layout/Container'

const projects = [
  {
    category: 'Lead Generation',
    title: 'Luxury Realtor Lead Funnel',
  },
  {
    category: 'AI Automation',
    title: '24/7 AI Qualification System',
  },
  {
    category: 'Branding',
    title: 'Brokerage Identity Refresh',
  },
  {
    category: 'Landing Pages',
    title: 'Seller Leads Conversion Experience',
  },
  {
    category: 'Digital Advertising',
    title: 'High-ROI Facebook Campaign',
  },
  {
    category: 'Marketing Materials',
    title: 'Premium Property Marketing Suite',
  },
]

export default function FeaturedWork() {
  return (
    <section className="py-32 bg-zinc-50">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Featured Work
          </p>

          <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
            Creative systems built for real estate growth.
          </h2>
        </div>

        <div className="mt-24 flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[32px] border border-black/10 bg-white"
            >
              <div className="grid md:grid-cols-2">
                <div className="flex min-h-[220px] md:min-h-[380px] items-center justify-center border-b border-black/10 md:border-b-0 md:border-r px-6">
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                      Visual Placeholder
                    </p>

                    <p className="mt-4 text-lg text-zinc-400">
                      Future Image / Video / Motion
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 md:p-16">
                  <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    {project.category}
                  </span>

                 <h3 className="mt-4 text-2xl font-bold leading-tight md:text-5xl">
                    {project.title}
                  </h3>

                  <div className="mt-8 text-5xl font-bold text-zinc-200 md:text-7xl">
                    0{index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}