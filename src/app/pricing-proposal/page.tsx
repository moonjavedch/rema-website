import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="py-32">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Pricing
            </p>

            <h1 className="max-w-5xl text-6xl font-bold md:text-8xl">
              Transparent pricing for predictable growth.
            </h1>
<br />
            <p className="mt-10 max-w-3xl text-xl text-zinc-600">
              Choose the right marketing and AI growth system for your real
              estate business.
            </p>

           
          </Container>
        </section>

        <section className="border-t border-black/10 py-32">
          <Container>
            <h2 className="mb-16 text-5xl font-bold">
              Choose Your Growth Package
            </h2>

            <div className="space-y-20">
              <div>
                <p className="text-zinc-400 mb-3">01</p>
                <h3 className="text-4xl font-bold">Starter</h3>
                <p className="mt-4 text-zinc-600">
                  Perfect for individual agents entering growth mode.
                </p>
                <p className="mt-4 text-lg font-medium">
                  Starting From
                </p>
              </div>

              <div>
                <p className="text-zinc-400 mb-3">02</p>
                <h3 className="text-4xl font-bold">Growth</h3>
                <p className="mt-4 text-zinc-600">
                  Complete lead generation and automation ecosystem.
                </p>
                <p className="mt-4 text-lg font-medium">
                  Most Popular
                </p>
              </div>

              <div>
                <p className="text-zinc-400 mb-3">03</p>
                <h3 className="text-4xl font-bold">Enterprise</h3>
                <p className="mt-4 text-zinc-600">
                  Custom systems for teams, brokerages and high-volume growth.
                </p>
                <p className="mt-4 text-lg font-medium">
                  Custom Solution
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-black/10 py-32">
          <Container>
            <h2 className="mb-16 text-5xl font-bold">
              Compare All Features
            </h2>

            <div className="space-y-6 text-lg">
              <p>✓ Custom Branding & Logo</p>
              <p>✓ Landing Page Development</p>
              <p>✓ Lead Generation Funnel</p>
              <p>✓ AI Chatbot & Automation</p>
              <p>✓ WhatsApp Integration</p>
              <p>✓ CRM Integration</p>
              <p>✓ Ad Campaign Management</p>
              <p>✓ Monthly Reports</p>
              <p>✓ Dedicated Support</p>
              <p>✓ Strategy Calls</p>
            </div>
          </Container>
        </section>

        <section className="border-t border-black/10 py-32">
          <Container>
            <h2 className="mb-16 text-5xl font-bold">
              Optional Services
            </h2>

            <div className="space-y-8">
              <p>Landing Page Development</p>
              <p>Advanced AI Training & Customization</p>
              <p>Managed Advertising Campaigns</p>
              <p>Brokerage Team Training</p>
              <p>Monthly Content Creation</p>
            </div>
          </Container>
        </section>

        <section className="border-t border-black/10 py-32">
          <Container>
            <h2 className="mb-16 text-5xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <p>What is included in each package?</p>
              <p>Can I pay one-time instead of monthly?</p>
              <p>How fast can you launch my system?</p>
              <p>Do you work with brokerages?</p>
              <p>What markets do you serve?</p>
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
      <button
        className="rounded-full bg-black font-medium text-white"
        style={{
          padding: '18px 40px',
        }}
      >
        Get Your Free Lead Audit
      </button>

      <button
        className="rounded-full border border-black font-medium"
        style={{
          padding: '18px 40px',
        }}
      >
        Talk To REMA AI
      </button>
    </div>
  </div>
</Container>
        </section>
      </main>

      <Footer />
    </>
  )
}