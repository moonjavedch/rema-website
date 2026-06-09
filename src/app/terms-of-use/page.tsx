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
        <section
          style={{
            paddingBottom: '100px',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Legal
            </p>

            <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none">
              Terms Of Use
            </h1>

            <p
              className="text-zinc-600"
              style={{ marginTop: '40px' }}
            >
              Last Updated: January 2026
            </p>
          </Container>
        </section>

        <section
          style={{
            paddingTop: '100px',
            paddingBottom: '160px',
          }}
        >
          <Container>
            <div className="max-w-4xl space-y-16">

              <div>
                <h2 className="text-3xl mb-4">
                  Acceptance Of Terms
                </h2>

                <p className="text-zinc-600">
                  By accessing and using this website, you agree to be
                  bound by these Terms of Use and all applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
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
                <h2 className="text-3xl mb-4">
                  Intellectual Property
                </h2>

                <p className="text-zinc-600">
                  All website content, branding, graphics, designs,
                  text and materials remain the property of REMA
                  unless otherwise agreed in writing.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
                  User Responsibilities
                </h2>

                <p className="text-zinc-600">
                  Users agree not to misuse the website, interfere with
                  operations or engage in unlawful activity through any
                  REMA platform or service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
                  Limitation Of Liability
                </h2>

                <p className="text-zinc-600">
                  REMA shall not be liable for indirect, incidental
                  or consequential damages arising from use of the
                  website or services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
                  Modifications
                </h2>

                <p className="text-zinc-600">
                  We reserve the right to update these Terms of Use
                  at any time. Continued use of the website constitutes
                  acceptance of revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
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