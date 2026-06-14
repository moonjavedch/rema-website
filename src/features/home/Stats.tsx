'use client'
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const stats = [
  {
    value: "340%",
    label: "Average Lead Increase",
  },
  {
    value: "68%",
    label: "Faster Lead Response",
  },
  {
    value: "150+",
    label: "Campaigns Launched",
  },
  {
    value: "95%",
    label: "Client Retention",
  },
];

export default function Stats() {
  return (
    <section className="border-t border-black/10 py-24 md:py-36 xl:py-44">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Results
          </p>

          <h2 className="text-4xl font-light leading-none md:text-6xl xl:text-7xl">
            Real Growth.
            <br />
            Real Numbers.
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            Growth is only meaningful when it can be measured.
            Every system we build is designed around performance,
            conversion and long-term scalability.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-2 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-black/10 p-8 md:p-12"
            >
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6 }}
  className="mb-4 text-5xl font-light leading-none md:mb-5 md:text-7xl xl:text-[5.5rem]"
>
  {stat.value === '340%' && (
    <CountUp
      start={0}
      end={340}
      duration={2.5}
      suffix="%"
     
    />
  )}

  {stat.value === '68%' && (
    <CountUp
      start={0}
      end={68}
      duration={2.5}
      suffix="%"
     
    />
  )}

  {stat.value === '150+' && (
    <CountUp
      start={0}
      end={150}
      duration={2.5}
      suffix="+"
      
    />
  )}

  {stat.value === '95%' && (
    <CountUp
      start={0}
      end={95}
      duration={2.5}
      suffix="%"
      
    />
  )}
</motion.div>

              <p className="text-lg text-zinc-600 md:text-xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}