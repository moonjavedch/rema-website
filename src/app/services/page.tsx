import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="py-32">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Services
            </p>

            <h1 className="max-w-5xl text-6xl font-bold md:text-8xl">
              Complete growth systems for modern real estate businesses.
            </h1>

            <p className="mt-10 max-w-3xl text-xl text-zinc-600">
              From lead generation and AI automation to websites,
              branding and advertising, REMA builds systems designed
              to help agents and brokerages grow faster.
            </p>
          </Container>
        </section>

        <section className="border-t border-black/10 py-32">
          <Container>
            <div className="space-y-24">
              <div>
                <p className="mb-3 text-zinc-400">01</p>
                <h2 className="text-4xl font-bold">
                  Lead Generation Systems
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-600">
                  Complete funnels connecting advertising,
                  landing pages, automation and CRM systems.
                </p>
              </div>

              <div>
                <p className="mb-3 text-zinc-400">02</p>
                <h2 className="text-4xl font-bold">
                  AI Chatbots & Automation
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-600">
                  Intelligent lead qualification, appointment
                  booking and automated nurturing.
                </p>
              </div>

              <div>
                <p className="mb-3 text-zinc-400">03</p>
                <h2 className="text-4xl font-bold">
                  Websites & Landing Pages
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-600">
                  Premium websites and conversion-focused
                  landing pages built specifically for real estate.
                </p>
              </div>

              <div>
                <p className="mb-3 text-zinc-400">04</p>
                <h2 className="text-4xl font-bold">
                  Digital Advertising
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-600">
                  Strategic Facebook and Google advertising
                  campaigns focused on qualified opportunities.
                </p>
              </div>

              <div>
                <p className="mb-3 text-zinc-400">05</p>
                <h2 className="text-4xl font-bold">
                  Branding & Visual Identity
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-600">
                  Logos, visual systems and brand positioning
                  designed for real estate professionals.
                </p>
              </div>

              <div>
                <p className="mb-3 text-zinc-400">06</p>
                <h2 className="text-4xl font-bold">
                  Marketing Materials
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-600">
                  Property marketing, social media content,
                  email campaigns and promotional assets.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-black/10 py-32">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Why Choose REMA
            </p>

            <h2 className="mb-16 text-5xl font-bold md:text-7xl">
              Built specifically for real estate.
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold">
                  Industry Focused
                </h3>

                <p className="mt-2 text-zinc-600">
                  Everything we build is designed around the real estate sales process.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  AI-Powered Systems
                </h3>

                <p className="mt-2 text-zinc-600">
                  Automation and intelligent qualification working around the clock.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Conversion Driven
                </h3>

                <p className="mt-2 text-zinc-600">
                  Focused on leads, appointments and business growth.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-black/10 py-32">
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