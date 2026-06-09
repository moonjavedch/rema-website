import Link from 'next/link'

export default function Navbar() {
  return (
    <header 
      className="fixed left-0 right-0 top-0 z-50 bg-white border-b border-black/10"
      style={{ height: '90px', width: '100%' }}
    >
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 md:px-10 xl:px-16">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          REMA
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link href="/services">Services</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

       <div
  className="flex items-center"
  style={{
    gap: '12px',
  }}
>
          <Link
  href="/ai-assistant"
 className="rounded-full border border-black px-5 py-3 text-sm transition hover:bg-black hover:text-white"
>
  Talk To REMA AI
</Link>

<Link
  href="/book-call"
  className="rounded-full bg-black px-5 py-3 text-sm text-white"
>
  Book A Call
</Link>
        </div>
      </div>
    </header>
  )
}