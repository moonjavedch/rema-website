import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Link from 'next/link'

export default function AIAssistantPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '40px' }}>
        <section className="py-24">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              REMA AI
            </p>

            <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-none">
              Your AI Real Estate
              <br />
              Growth Assistant.
            </h1>

            <p className="mt-10 max-w-3xl text-xl text-zinc-600">
              REMA AI will soon help qualify leads, answer questions,
              recommend services and schedule strategy calls.
            </p>

            <div className="mt-16 rounded-3xl border border-black/10 p-10">
              <div className="rounded-2xl bg-zinc-100 p-5">
                Hi, I'm REMA AI. Full AI functionality will be connected during
                Phase 2 development.
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book-call"
                  className="rounded-full bg-black px-8 py-4 text-white"
                >
                  Book A Strategy Call
                </Link>

                <Link
  href="/contact"
  className="rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
>
  Contact REMA
</Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}