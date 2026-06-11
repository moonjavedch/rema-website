import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function NotFound() {
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
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-5xl">
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
                Error 404
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none">
                Page Not
                <br />
                Found.
              </h1>

              <p className="mt-8 md:mt-12 max-w-3xl text-lg md:text-xl leading-relaxed text-zinc-600">
                The page you're looking for doesn't exist or may have been moved.
              </p>

              <div className="mt-10 md:mt-14 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="rounded-full bg-black px-6 md:px-10 py-4 font-medium text-white transition hover:opacity-90"
                >
                  Back To Home
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-black px-6 md:px-10 py-4 font-medium transition hover:bg-black hover:text-white"
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