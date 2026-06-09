import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function FAQsPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          paddingTop: '140px',
          display: 'block',
          width: '100%',
        }}
      >
        <section
          style={{
            paddingBottom: '100px',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Frequently Asked Questions
            </p>

            <h1 className="max-w-6xl text-5xl md:text-7xl font-medium tracking-tight leading-none">
              Everything You Need
              <br />
              To Know About
              <br />
              REMA.
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-zinc-600">
              Everything you need to know about our real estate marketing
              systems, AI automation and how we help realtors grow their
              business.
            </p>
          </Container>
        </section>

        <section
          style={{
            paddingTop: '100px',
            paddingBottom: '100px',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <Container>
            <h2 className="text-5xl md:text-7xl font-light mb-20">
              Common Questions
              <br />
              Answered.
            </h2>

            <div className="space-y-20">
              <div>
                <h3 className="mb-10 text-3xl font-medium">
                  General Questions
                </h3>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      What exactly does REMA do?
                    </h4>

                    <p className="text-zinc-600">
                      We build complete intelligent marketing systems for
                      realtors and brokerages, combining branding,
                      landing pages, digital advertising and AI-powered
                      lead automation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Which markets do you serve?
                    </h4>

                    <p className="text-zinc-600">
                      We primarily serve Canada, the United States,
                      the United Kingdom and expanding European markets.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Who is Steve?
                    </h4>

                    <p className="text-zinc-600">
                      Steve is REMA's President & CEO based in Canada and
                      leads strategic growth initiatives for clients.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-10 text-3xl font-medium">
                  Services & Process
                </h3>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      How long does it take to launch a system?
                    </h4>

                    <p className="text-zinc-600">
                      Most systems are launched within 2–4 weeks,
                      depending on complexity and integrations.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Do you offer one-time projects?
                    </h4>

                    <p className="text-zinc-600">
                      Yes. We offer both one-time projects and ongoing
                      managed growth partnerships.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Can you work with my existing website?
                    </h4>

                    <p className="text-zinc-600">
                      Absolutely. We can integrate with your existing
                      systems or build everything from scratch.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-10 text-3xl font-medium">
                  AI & Technology
                </h3>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      How do your AI chatbots work?
                    </h4>

                    <p className="text-zinc-600">
                      Our AI agents qualify leads, answer questions,
                      book appointments and nurture prospects 24/7.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Which platforms do you use?
                    </h4>

                    <p className="text-zinc-600">
                      OpenAI, ManyChat, HubSpot, Facebook Ads,
                      Google Ads and custom automation systems.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-10 text-3xl font-medium">
                  Pricing & Investment
                </h3>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      What are your pricing options?
                    </h4>

                    <p className="text-zinc-600">
                      We offer Starter, Growth and Enterprise solutions.
                      Custom packages are also available.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Is there a contract?
                    </h4>

                    <p className="text-zinc-600">
                      Yes. Every engagement includes clear deliverables,
                      timelines and responsibilities.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-10 text-3xl font-medium">
                  Results & Support
                </h3>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      How do you measure success?
                    </h4>

                    <p className="text-zinc-600">
                      We track lead volume, cost per lead,
                      appointments booked and overall ROI.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      What support do you provide?
                    </h4>

                    <p className="text-zinc-600">
                      Ongoing optimization, reporting,
                      strategy guidance and direct team support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section
          style={{
            paddingTop: '100px',
            paddingBottom: '100px',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <Container>
            <h2 className="text-5xl md:text-7xl font-light mb-12">
              Can't Find
              <br />
              Your Answer?
            </h2>

            <div
              className="flex flex-wrap items-center"
              style={{
                gap: '24px',
              }}
            >
<Link
  href="/ai-assistant"
  className="rounded-full bg-black font-medium text-white transition hover:opacity-90"
  style={{
    padding: '18px 40px',
  }}
>
  Talk To REMA AI
</Link>

<Link
  href="/book-call"
  className="rounded-full border border-black font-medium transition hover:bg-black hover:text-white"
  style={{
    padding: '18px 40px',
  }}
>
  Book A Strategy Call
</Link>

<Link
  href="https://wa.me/16475550189"
  className="rounded-full border border-black font-medium transition hover:bg-black hover:text-white"
  style={{
    padding: '18px 40px',
  }}
>
  WhatsApp Us
</Link>
            </div>
          </Container>
        </section>

        <section
          style={{
            paddingTop: '120px',
            paddingBottom: '160px',
          }}
        >
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
  className="rounded-full bg-black font-medium text-white transition hover:opacity-90"
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