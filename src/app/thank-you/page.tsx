import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '40px' }}>
        <section className="py-32">
          <Container>
            <div className="max-w-4xl">
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
                Thank You
              </p>

              <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-none">
                We've Received
                <br />
                Your Request.
              </h1>

              <p className="mt-10 max-w-2xl text-xl text-zinc-600">
                A member of the REMA team will review your information and
                contact you shortly.
              </p>

              <div className="mt-16 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="rounded-full bg-black px-8 py-4 text-white"
                >
                  Back To Home
                </Link>

                <Link
  href="/services"
  className="rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
>
  Explore Services
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