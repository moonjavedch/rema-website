import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Inline styles force the layout below the fixed header without relying on Tailwind v4 compiling rules */}
      <main style={{ paddingTop: '140px', display: 'block', width: '100%' }}>
        
        {/* Top Intro Section */}
        <section className="border-b border-black/10 pb-20 md:pb-24">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              About REMA
            </p>

          <h1 className="max-w-6xl text-5xl md:text-7xl font-medium tracking-tight leading-none">
              Your Strategic
              <br />
              Real Estate
              <br />
              Growth Partner.
            </h1>

            <p className="mt-8 md:mt-10 max-w-3xl text-lg md:text-xl leading-relaxed text-zinc-600">
              We help real estate professionals across Canada, the United States,
              the United Kingdom and Europe generate consistent opportunities
              through intelligent marketing systems and AI automation.
            </p>
          </Container>
        </section>

        {/* Our Story Section */}
<section className="border-b border-black/10 py-20 md:py-28">
          <Container>
            <div className="max-w-4xl">
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
                Our Story
              </p>

              <h2 className="mb-8 md:mb-10 text-4xl md:text-6xl lg:text-7xl font-light leading-none">
                Built to solve the biggest growth challenges in real estate.
              </h2>

             <p className="text-lg md:text-xl leading-relaxed text-zinc-600">
                REMA was founded with a clear mission: helping real estate
                professionals overcome inconsistent lead flow, wasted advertising
                budgets, slow follow-up systems and fragmented marketing efforts.
                We combine proven real estate marketing strategies with modern AI
                automation to build complete lead generation ecosystems that work
                around the clock.
              </p>
            </div>
          </Container>
        </section>

        {/* Leadership Section */}
       <section className="border-b border-black/10 py-20 md:py-28">
          <Container>
           <div className="grid gap-10 md:gap-16 lg:grid-cols-[1fr_1.5fr]">
              <div>
                <div className="aspect-[4/5] rounded-3xl border border-black/10 bg-zinc-100" />
              </div>

              <div>
                <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Leadership
                </p>

                <h2 className="mb-8 text-4xl md:text-6xl lg:text-7xl font-light leading-none">
                  Meet Steve.
                </h2>

              <p className="mb-8 text-lg md:text-xl leading-relaxed text-zinc-600">
                  Steve leads REMA's vision of combining real estate marketing
                  expertise with intelligent automation. His focus is helping
                  agents and brokerages spend less time chasing leads and more
                  time closing deals.
                </p>

                <p className="font-medium">Steve</p>

                <p className="text-zinc-500">
                  President & CEO
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Mission & Values Section */}
        <section className="border-b border-black/10 py-20 md:py-28">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Mission & Values
            </p>

<h2 className="mb-14 md:mb-20 text-4xl md:text-6xl lg:text-7xl font-light leading-none">
              Growth through
              <br />
              intelligence.
            </h2>

            <div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              <div>
                <h3 className="mb-4 text-xl md:text-2xl font-medium tracking-tight">Canada-First Expertise</h3>
                <p className="text-zinc-600">
                  Deep understanding of Canadian real estate with global standards.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl md:text-2xl font-medium tracking-tight">Results-Driven Innovation</h3>
                <p className="text-zinc-600">
                  Marketing strategy powered by modern AI systems.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl md:text-2xl font-medium tracking-tight">Transparency</h3>
                <p className="text-zinc-600">
                  Clear communication, reporting and accountability.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl md:text-2xl font-medium tracking-tight">Client Success</h3>
                <p className="text-zinc-600">
                  Every decision begins with client outcomes.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl md:text-2xl font-medium tracking-tight">Continuous Optimization</h3>
                <p className="text-zinc-600">
                  Always improving systems, campaigns and automation.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl md:text-2xl font-medium tracking-tight">Long-Term Growth</h3>
                <p className="text-zinc-600">
                  Building sustainable systems rather than short-term tactics.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Global Reach Section */}
       <section className="border-b border-black/10 py-20 md:py-28">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Global Reach
            </p>

            <h2 className="mb-8 md:mb-10 text-4xl md:text-6xl lg:text-7xl font-light leading-none">
              Serving real estate
              <br />
              professionals worldwide.
            </h2>

            <p className="max-w-3xl text-xl text-zinc-600">
              Proudly supporting agents, teams and brokerages throughout Canada,
              the United States, the United Kingdom and expanding across Europe.
            </p>

<div className="mt-12 md:mt-16 h-[240px] md:h-[420px] lg:h-[500px] rounded-3xl bg-zinc-100" />
          </Container>
        </section>

        {/* Final CTA Section - Fixed margin-bottom forces layout separation from Footer */}
     <section className="py-20 md:py-32">
<Container>
  <div className="max-w-5xl">
    <h2 className="text-5xl md:text-8xl font-semibold tracking-tight leading-none">
      Ready to stop guessing
      <br />
      and start growing?
    </h2>

    <p
      className="max-w-3xl text-xl leading-relaxed text-zinc-600"
      style={{
        marginTop: '48px',
      }}
    >
      Build a smarter marketing system, generate more qualified leads,
      and automate your growth with REMA.
    </p>

    <div
      className="flex flex-wrap items-center"
      style={{
        marginTop: '56px',
        gap: '24px',
      }}
    >
      <Link
  href="/contact"
  className="rounded-full bg-black font-medium text-white"
  style={{
    padding: '18px 40px',
  }}
>
  Get Your Free Lead Audit
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
        
      </main>

      <Footer />
    </>
  )
}