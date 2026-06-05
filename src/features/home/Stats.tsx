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
    <section className="py-32 border-t border-black/10">
      <Container>
        <p className="text-sm uppercase tracking-[0.3em] text-black/50 mb-6">
          Results
        </p>

        <h2 className="text-5xl md:text-7xl font-light mb-20">
          Real growth.
          <br />
          Real numbers.
        </h2>

        <div className="grid grid-cols-2 gap-16 border-4 border-red-500">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-4 border-blue-500 pt-8"
            >
              <div className="text-7xl md:text-8xl font-light mb-4">
                {stat.value}
              </div>

              <p className="text-xl text-black/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}