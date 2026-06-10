import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function BookCallPage() {
  return (
    <>
      <Navbar />

    <main className="pt-24 md:pt-32">
       <section className="py-20 md:py-28">
          <Container>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Strategy Call
            </p>

           <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-none">
              Book Your
              <br />
              Free Strategy Call.
            </h1>

            <p className="mt-10 max-w-3xl text-xl text-zinc-600">
              Calendly scheduling will be connected during Phase 2.
            </p>

            <div className="mt-12 md:mt-16 rounded-3xl border border-black/10 p-6 md:p-12">
             <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                Scheduling Widget Placeholder
              </h2>

              <p className="mt-4 text-zinc-600">
                This section will contain the live Calendly booking system.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}