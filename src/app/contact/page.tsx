import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function ContactPage() {
return (
<> <Navbar />

```
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
      Contact REMA
    </p>

    <h1 className="max-w-6xl text-5xl md:text-7xl font-medium tracking-tight leading-none">
      Let's Build Your
      <br />
      Lead Generation
      <br />
      System Together.
    </h1>

    <p
      className="max-w-3xl text-xl leading-relaxed text-zinc-600"
      style={{
        marginTop: '80px',
      }}
    >
      Ready to generate more qualified leads and close more deals?
      Speak with our team or our AI assistant today.
    </p>

   
  </Container>
</section>

    <section className="py-32 border-b border-black/10">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Send Us A Message
            </p>

            <h2 className="text-5xl md:text-7xl font-light mb-12">
              Tell us about your goals.
            </h2>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-black/10 bg-white px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-black/10 bg-white px-5 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number (WhatsApp Preferred)"
                className="w-full rounded-xl border border-black/10 bg-white px-5 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Company / Brokerage Name"
                className="w-full rounded-xl border border-black/10 bg-white px-5 py-4 outline-none"
              />

              <select className="w-full rounded-xl border border-black/10 bg-white px-5 py-4 outline-none">
                <option>Service Interested In</option>
                <option>Full Lead Generation System</option>
                <option>AI Chatbots & Automation</option>
                <option>Branding & Logo Design</option>
                <option>Landing Page Development</option>
                <option>Digital Advertising</option>
                <option>Other</option>
              </select>

              <textarea
                rows={6}
                placeholder="Project Details / Message"
                className="w-full rounded-xl border border-black/10 bg-white px-5 py-4 outline-none"
              />

              <button
  className="rounded-full bg-black font-medium text-white"
  style={{
    padding: '18px 40px',
    marginTop: '12px',
  }}
>
  Send Message
</button>
            </div>
          </div>

          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Instant Help
            </p>

           <div className="rounded-3xl border border-black/10 p-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black" />

                <div>
                  <p className="font-medium">REMA AI</p>
                  <p className="text-sm text-zinc-500">
                    Online Now
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-zinc-100 p-4">
                  Hi, I'm REMA AI. How can I help you grow your
                  real estate business today?
                </div>

                <div className="flex flex-wrap gap-3">
                 <Link
  href="/services"
  className="rounded-full border px-4 py-2 transition hover:bg-black hover:text-white"
>
  I Need More Leads
</Link>

<Link
  href="/book-call"
  className="rounded-full border px-4 py-2 transition hover:bg-black hover:text-white"
>
  Book A Call
</Link>

<Link
  href="/pricing"
  className="rounded-full border px-4 py-2 transition hover:bg-black hover:text-white"
>
  Tell Me About Pricing
</Link>
                </div>

                <Link
  href="/ai-assistant"
  className="mt-4 inline-block rounded-full bg-black px-8 py-3 text-white transition hover:opacity-90"
>
  Start Chat
</Link>
              </div>

              <p className="mt-8 text-zinc-600">
                Talk to our AI instantly. It can answer questions,
                qualify your needs and schedule a strategy call.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section className="py-32 border-b border-black/10">
      <Container>
        <h2 className="text-5xl md:text-7xl font-light mb-16">
          Our Locations
        </h2>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h3 className="text-3xl mb-6">
              Canada (Head Office)
            </h3>

            <p className="text-zinc-600">
              REMA Real Estate Marketing Agency
              <br />
              Toronto, Ontario, Canada
              <br />
              +1 (647) 555-0189
              <br />
              hello@rema.ca
            </p>
          </div>

          <div>
            <h3 className="text-3xl mb-6">
              United States
            </h3>

            <p className="text-zinc-600">
              REMA USA
              <br />
              Austin, Texas
              <br />
              +1 (512) 555-0291
            </p>
          </div>
        </div>
      </Container>
    </section>

    <section className="py-32 border-b border-black/10">
      <Container>
  <h2 className="text-5xl md:text-7xl font-light mb-12">
    Additional Contact Options
  </h2>

  <div
    className="flex flex-wrap items-center"
    style={{
      gap: '24px',
    }}
  >
   <Link
  href="/book-call"
  className="rounded-full bg-black font-medium text-white transition hover:opacity-90"
  style={{
    padding: '18px 40px',
  }}
>
  Book Strategy Call
</Link>

<Link
  href="https://wa.me/16475550189"
  className="rounded-full border border-black font-medium transition hover:bg-black hover:text-white"
  style={{
    padding: '18px 40px',
  }}
>
  WhatsApp Business
</Link>

<Link
  href="mailto:hello@rema.ca"
  className="rounded-full border border-black font-medium transition hover:bg-black hover:text-white"
  style={{
    padding: '18px 40px',
  }}
>
  Email Us
</Link>
  </div>

  <p
    className="text-zinc-600"
    style={{
      marginTop: '40px',
    }}
  >
    We usually respond within 1–2 hours during business days.
  </p>
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
