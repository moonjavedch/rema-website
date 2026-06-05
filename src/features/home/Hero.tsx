import Container from '@/components/layout/Container'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-white">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Real Estate Marketing Agency
          </p>

          <h1 className="text-6xl font-semibold leading-none tracking-tight md:text-8xl">
            Real Estate
            <br />
            Growth Systems
            <br />
            Built To Scale.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-zinc-600 md:text-xl">
            Websites, paid advertising, branding, AI automation and lead
            generation systems built specifically for real estate professionals.
          </p>
        </div>
      </Container>
    </section>
  )
}