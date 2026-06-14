'use client'

import Container from '@/components/layout/Container'
import { motion } from 'framer-motion'

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Services
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-none">
            Everything needed to grow
            <br />
            a modern real estate business.
          </h2>
        </motion.div>

        <div className="mt-16 md:mt-24 lg:mt-[120px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className="group border-t border-black/10 py-10 transition-all duration-500 hover:bg-zinc-50 md:py-14 lg:py-16"
            >
              <div className="grid gap-8 md:gap-10 lg:grid-cols-[180px_1.2fr_1fr] lg:gap-16">

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl font-light text-zinc-300 transition-all duration-500 group-hover:text-black md:text-5xl">
                    {service.number}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h3 className="text-3xl leading-tight font-medium transition-all duration-300 group-hover:translate-x-2 md:text-4xl">
                    {service.title}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="max-w-xl text-lg leading-relaxed text-zinc-600 md:text-xl">
                    {service.description}
                  </p>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}