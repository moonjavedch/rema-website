'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '@/components/layout/Container'

const testimonials = [
  {
    quote:
      'REMA completely transformed the way we generate and manage leads.',
    body:
      'The automation alone saved our team countless hours every week. Response times improved dramatically, lead quality increased and our entire follow-up process became far more efficient.',
    name: 'Sarah Thompson',
    role: 'Real Estate Broker',
  },
  {
    quote:
      'Our lead volume increased within the first month.',
    body:
      'The combination of landing pages, paid advertising and AI qualification gave us a predictable pipeline for the first time.',
    name: 'Michael Carter',
    role: 'Team Leader',
  },
  {
    quote:
      'The system feels like having another employee.',
    body:
      'REMA automated tasks that used to consume our day. We now focus on clients instead of chasing leads.',
    name: 'Jennifer Lee',
    role: 'Broker Owner',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    )
  }

  return (
    <section className="py-24 md:py-36 xl:py-44 overflow-hidden">
      <Container>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-24">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Testimonials
            </p>
          </div>

          <div className="max-w-5xl">

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <h2 className="text-4xl font-light leading-[1.05] md:text-6xl xl:text-7xl">
                  "{testimonials[current].quote}"
                </h2>

                <p className="mt-10 max-w-3xl text-lg leading-relaxed text-zinc-600 md:text-xl">
                  {testimonials[current].body}
                </p>

                <div className="mt-14 border-t border-black/10 pt-8 md:mt-16">
                  <p className="text-lg font-medium md:text-xl">
                    {testimonials[current].name}
                  </p>

                  <p className="mt-2 text-zinc-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>

            </AnimatePresence>

            <div className="mt-12 flex items-center gap-4">

              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-black transition hover:bg-black hover:text-white"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-black transition hover:bg-black hover:text-white"
              >
                →
              </button>

              <div className="ml-4 flex gap-2">

                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      current === index
                        ? 'w-10 bg-black'
                        : 'w-2 bg-zinc-300'
                    }`}
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}