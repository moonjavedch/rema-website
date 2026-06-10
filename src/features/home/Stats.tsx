import Container from "@/components/layout/Container";

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
              <div className="mb-4 text-5xl font-light leading-none md:mb-5 md:text-7xl xl:text-[5.5rem]">
                {stat.value}
              </div>

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