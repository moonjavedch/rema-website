'use client'

import Container from '@/components/layout/Container'
import { motion } from 'framer-motion'

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
return ( <section className="bg-zinc-50 py-32"> <Container>

    <div className="max-w-3xl">
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
        Featured Work
      </p>

      <h2 className="text-5xl font-light tracking-tight md:text-7xl">
        Creative systems built
        <br />
        for real estate growth.
      </h2>
    </div>

    <div className="mt-24 flex flex-col gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
          }}
          className="group overflow-hidden rounded-[32px] border border-black/10 bg-white"
        >
          <div className="grid md:grid-cols-2">

            <div className="flex min-h-[260px] items-center justify-center border-b border-black/10 md:min-h-[420px] md:border-b-0 md:border-r">

              <div className="text-center">

                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Visual Placeholder
                </p>

                <p className="mt-4 text-lg text-zinc-400">
                  Future Image / Video / Motion
                </p>

              </div>

            </div>

            <div className="flex flex-col justify-center p-8 md:p-16">

              <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                {project.category}
              </span>

              <h3 className="mt-4 text-3xl font-medium leading-tight transition duration-300 group-hover:translate-x-2 md:text-5xl">
                {project.title}
              </h3>

              <div className="mt-10 flex items-center justify-between">

                <div className="text-5xl font-light text-zinc-200 md:text-7xl">
                  0{index + 1}
                </div>

                <div className="translate-x-0 text-sm uppercase tracking-[0.25em] text-zinc-500 transition duration-300 group-hover:translate-x-2">
                  View Project →
                </div>

              </div>

            </div>

          </div>
        </motion.div>
      ))}
    </div>

  </Container>
</section>

)
}

