import Link from 'next/link'
import Container from '@/components/layout/Container'

export default function Hero() {
  return (
    <section
  className="relative flex min-h-screen overflow-hidden"
  style={{
    paddingTop: '140px',
    paddingBottom: '80px',
    alignItems: 'center',
  }}
>
      <Container>
        <div className="max-w-7xl">
          
          <p className="mb-10 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Real Estate Marketing Agency
          </p>

          <h1 className="max-w-6xl text-6xl font-medium leading-[0.92] tracking-tight md:text-7xl xl:text-[5.5rem]">
            Real Estate
            <br />
            Growth Systems
            <br />
            Built To Scale.
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-600 md:text-2xl">
            Websites, paid advertising, branding, AI automation and lead
            generation systems built specifically for real estate
            professionals.
          </p>

         <div
  className="flex flex-wrap items-center"
  style={{
    marginTop: '26px',
    gap: '24px',
  }}
>
  <Link
  href="/book-call"
  className="rounded-full bg-black font-medium text-white transition hover:opacity-90"
  style={{
    padding: '18px 40px',
  }}
>
  Book A Strategy Call
</Link>

<Link
  href="/services"
  className="rounded-full border border-black font-medium transition hover:bg-black hover:text-white"
  style={{
    padding: '18px 40px',
  }}
>
  Explore Services
</Link>
</div>
        </div>
      </Container>

      <div className="pointer-events-none absolute right-0 top-0 h-full w-[40%] opacity-30">
        <div className="h-full w-full bg-gradient-to-l from-zinc-200 to-transparent" />
      </div>
    </section>
  )
}