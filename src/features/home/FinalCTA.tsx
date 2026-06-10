import Link from 'next/link'
import Container from '@/components/layout/Container'

export default function FinalCTA() {
  return (
    <section className="border-t border-black/10 py-20 md:py-32">
      <Container>
        <div className="max-w-5xl">

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Ready To Grow?
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl xl:text-7xl">
            Build a lead generation system
            <br className="hidden md:block" />
            that works while you sleep.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            From targeted advertising to AI-powered qualification, REMA helps
            real estate professionals generate, nurture, and convert more
            leads.
          </p>

          <Link
            href="/book-call"
            className="mt-10 inline-block rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
          >
            Book A Strategy Call
          </Link>

        </div>
      </Container>
    </section>
  )
}