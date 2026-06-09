import Link from 'next/link'
import Container from '@/components/layout/Container'

export default function FinalCTA() {
  return (
    <section className="border-t border-black/10 py-32">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Ready To Grow?
          </p>

          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
            Build a lead generation system that works while you sleep.
          </h2>

          <p className="mt-8 max-w-2xl text-xl text-zinc-600">
            From targeted advertising to AI-powered qualification, REMA helps
            real estate professionals generate, nurture, and convert more
            leads.
          </p>

         <Link
  href="/book-call"
  className="mt-12 inline-block rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
>
  Book A Strategy Call
</Link>
        </div>
      </Container>
    </section>
  )
}