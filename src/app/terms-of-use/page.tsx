import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function TermsOfUsePage() {
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
        <section className="border-b border-black/10 pb-20 md:pb-24">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Legal
            </p>

           <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none">
              Terms Of Use
            </h1>

            <p className="mt-10 text-zinc-600">
              Last Updated: January 2026
            </p>
          </Container>
        </section>

        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-4xl space-y-16">

              <div>
                <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
                  Acceptance Of Terms
                </h2>

                <p className="text-zinc-600">
                  By accessing and using this website, you agree to be
                  bound by these Terms of Use and all applicable laws.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
                  Services
                </h2>

                <p className="text-zinc-600">
                  REMA provides marketing, branding, advertising,
                  automation and AI-related services for real estate
                  professionals. Specific deliverables are defined
                  separately within client agreements.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
                  Intellectual Property
                </h2>

                <p className="text-zinc-600">
                  All website content, branding, graphics, designs,
                  text and materials remain the property of REMA
                  unless otherwise agreed in writing.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
                  User Responsibilities
                </h2>

                <p className="text-zinc-600">
                  Users agree not to misuse the website, interfere with
                  operations or engage in unlawful activity through any
                  REMA platform or service.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
                  Limitation Of Liability
                </h2>

                <p className="text-zinc-600">
                  REMA shall not be liable for indirect, incidental
                  or consequential damages arising from use of the
                  website or services.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
                  Modifications
                </h2>

                <p className="text-zinc-600">
                  We reserve the right to update these Terms of Use
                  at any time. Continued use of the website constitutes
                  acceptance of revised terms.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
                  Contact Information
                </h2>

                <p className="text-zinc-600">
                  Questions regarding these terms may be directed to
                  hello@rema.ca.
                </p>
              </div>

            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}