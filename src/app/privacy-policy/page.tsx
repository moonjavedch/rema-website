import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function PrivacyPolicyPage() {
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
            paddingBottom: '80px',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Legal
            </p>

            <h1 className="max-w-6xl text-6xl md:text-8xl font-semibold tracking-tight leading-none">
              Privacy Policy
            </h1>

            <p
              className="max-w-3xl text-zinc-600"
              style={{
                marginTop: '40px',
              }}
            >
              Last Updated: January 2026
            </p>
          </Container>
        </section>

        <section
          style={{
            paddingTop: '100px',
            paddingBottom: '140px',
          }}
        >
          <Container>
            <div className="max-w-4xl space-y-16">

              <div>
                <h2 className="text-3xl mb-4">
                  Introduction
                </h2>

                <p className="text-zinc-600 leading-relaxed">
                  REMA respects your privacy and is committed to protecting
                  your personal information. This Privacy Policy explains
                  how we collect, use and safeguard information obtained
                  through our website, marketing systems and communication
                  channels.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
                  Information We Collect
                </h2>

                <p className="text-zinc-600 leading-relaxed">
                  We may collect your name, email address, phone number,
                  company information, project requirements and other
                  information you voluntarily provide through forms,
                  consultations and communications.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
                  How We Use Information
                </h2>

                <p className="text-zinc-600 leading-relaxed">
                  Information is used to provide services, communicate
                  with clients, improve our systems, schedule consultations,
                  respond to inquiries and deliver marketing services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
                  Cookies & Analytics
                </h2>

                <p className="text-zinc-600 leading-relaxed">
                  Our website may use cookies, analytics tools and tracking
                  technologies to improve user experience and understand
                  website performance.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
                  Data Protection
                </h2>

                <p className="text-zinc-600 leading-relaxed">
                  We implement reasonable technical and organizational
                  measures to protect information from unauthorized access,
                  disclosure or misuse.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
                  Third-Party Services
                </h2>

                <p className="text-zinc-600 leading-relaxed">
                  We may use trusted third-party platforms such as CRM,
                  advertising, analytics and AI providers to deliver our
                  services. These providers maintain their own privacy
                  policies and security standards.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">
                  Contact Us
                </h2>

                <p className="text-zinc-600 leading-relaxed">
                  For privacy-related questions, please contact REMA
                  at hello@rema.ca.
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