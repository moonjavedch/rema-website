import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}

       <section className="pt-36 pb-20 md:pt-44 md:pb-28">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              How It Works
            </p>

           <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95]">
              A Complete Lead Generation System Built For Real Estate Growth.
            </h1>

           <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-zinc-600">
              We don't just run ads. We build complete marketing systems that
              attract, qualify and convert high-quality real estate leads.
            </p>
          </Container>
        </section>

        {/* Trusted By */}

        <section className="border-t border-black/10 py-12 md:py-16">
          <Container>
            <p className="mb-10 text-center text-sm uppercase tracking-[0.25em] text-zinc-500">
              Trusted By Real Estate Professionals
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-zinc-400 text-sm md:text-base">
              <span>RE/MAX</span>
              <span>Royal LePage</span>
              <span>eXp Realty</span>
              <span>Century 21</span>
              <span>Keller Williams</span>
              <span>Sotheby's</span>
            </div>
          </Container>
        </section>

        {/* The Reality */}

        <section className="py-32 border-t border-black/10">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              The Reality
            </p>

            <h2 className="mb-12 md:mb-16 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95]">
              Struggling with these challenges?
            </h2>

            <div className="space-y-10 md:space-y-12">
              <div>
                <h3 className="text-2xl font-semibold">
                  Inconsistent Leads
                </h3>
                <p className="text-zinc-600">
                  No steady flow of qualified opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Wasting Money on Ads
                </h3>
                <p className="text-zinc-600">
                  High costs and poor conversions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Slow Follow-Ups
                </h3>
                <p className="text-zinc-600">
                  Delayed responses result in lost clients.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Lack Of System
                </h3>
                <p className="text-zinc-600">
                  No process to capture, qualify and close leads.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Our Solution */}

        <section className="py-32 border-t border-black/10">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Our Solution
            </p>

            <h2 className="mb-10 md:mb-12 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95]">
              We build systems that deliver results.
            </h2>

            <p className="max-w-3xl text-xl text-zinc-600">
              A proven framework that generates, qualifies and converts
              real estate leads around the clock.
            </p>
          </Container>
        </section>

        {/* How It Works */}

        <section className="py-32 border-t border-black/10">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Process
            </p>

            <h2 className="mb-20 text-5xl font-bold md:text-7xl">
              How REMA Works
            </h2>

            <div className="space-y-16">
              <div>
                <span className="text-zinc-400">01</span>
                <h3 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">
                  We Launch Ads
                </h3>
              </div>

              <div>
                <span className="text-zinc-400">02</span>
                <h3 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">
                  Leads Land On Optimized Pages
                </h3>
              </div>

              <div>
                <span className="text-zinc-400">03</span>
                <h3 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">
                  AI Qualifies Leads Instantly
                </h3>
              </div>

              <div>
                <span className="text-zinc-400">04</span>
                <h3 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">
                  You Close More Clients
                </h3>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}

        <section className="py-32 border-t border-black/10">
          <Container>
                     <div className="max-w-5xl">
                      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95]">
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
                           marginTop: '40px',
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