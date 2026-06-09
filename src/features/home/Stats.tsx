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
    <section
      style={{
        paddingTop: "180px",
        paddingBottom: "180px",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Container>

        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Results
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-none">
            Real growth.
            <br />
            Real numbers.
          </h2>

          <p
            className="max-w-2xl text-xl leading-relaxed text-zinc-600"
            style={{
              marginTop: "40px",
            }}
          >
            Growth is only meaningful when it can be measured.
            Every system we build is designed around performance,
            conversion and long-term scalability.
          </p>
        </div>

        <div
          style={{
            marginTop: "100px",
            display: "grid",
            gridTemplateColumns: "repeat(2,minmax(0,1fr))",
            gap: "32px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-black/10"
              style={{
                padding: "48px",
              }}
            >
              <div
                style={{
                  fontSize: "5.5rem",
                  lineHeight: 1,
                  fontWeight: 300,
                  marginBottom: "20px",
                }}
              >
                {stat.value}
              </div>

              <p className="text-xl text-zinc-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}