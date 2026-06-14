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

          <h2 className="text-5xl md:text-8xl font-semibold tracking-tight leading-none">
            Build a lead generation system
            
            that works while you sleep.
          </h2>

          <p
            className="max-w-3xl text-xl leading-relaxed text-zinc-600"
            style={{
              marginTop: '48px',
            }}
          >
            From targeted advertising to AI-powered qualification, REMA helps
            real estate professionals generate, nurture and convert more
            qualified leads.
          </p>

          <div
            className="flex flex-wrap items-center"
            style={{
              marginTop: '56px',
              gap: '24px',
            }}
          >
            <Link
              href="/book-call"
              className="rounded-full bg-black font-medium text-white"
              style={{
                padding: '18px 40px',
              }}
            >
              Book A Strategy Call
            </Link>

            <Link
              href="/ai-assistant"
              className="rounded-full border border-black font-medium transition hover:bg-black hover:text-white"
              style={{
                padding: '18px 40px',
              }}
            >
              Talk To REMA AI
            </Link>
          </div>

        </div>
      </Container>
    </section>
  )
}