'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
     <header
  className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
    scrolled
      ? 'bg-white/90 backdrop-blur-md border-black/10'
      : 'bg-white border-black/10'
  }`}
  style={{
    height: scrolled ? '78px' : '90px',
    width: '100%',
  }}
>
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 md:px-10 xl:px-16">

          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image
              src="/images/rema-logo-black.png"
              alt="REMA"
              width={180}
              height={68}
              priority
              className="h-auto w-[120px] md:w-[160px]"
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
  {[
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ].map((item) => (
    <Link
      key={item.href}
      href={item.href}
      // font size can be managed here.
     className={`group relative text-[16px] transition-colors duration-300 ${
        pathname === item.href
          ? 'text-black'
          : 'text-zinc-600 hover:text-black'
      }`}
    >
      {item.label}

      <span
        className={`absolute -bottom-2 left-0 h-[1.5px] bg-black transition-all duration-300 ${
          pathname === item.href
            ? 'w-full'
            : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  ))}
</nav>

          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="relative flex h-8 w-8 items-center justify-center md:hidden"
>
  <span
    className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
      menuOpen ? 'rotate-45' : '-translate-y-2'
    }`}
  />

  <span
    className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
      menuOpen ? 'opacity-0' : ''
    }`}
  />

  <span
    className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
      menuOpen ? '-rotate-45' : 'translate-y-2'
    }`}
  />
</button>

          <div
            className="hidden md:flex items-center"
            style={{
              gap: '12px',
            }}
          >
            <Link
              href="/ai-assistant"
              className="rounded-full border border-black px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-md"
            >
              Talk To REMA AI
            </Link>

            <Link
              href="/book-call"
             className="rounded-full bg-black px-5 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              Book A Call
            </Link>
          </div>
        </div>
      </header>

      <div
  className={`fixed inset-0 top-[90px] z-40 bg-white md:hidden transition-all duration-300 ${
    menuOpen
      ? 'pointer-events-auto translate-y-0 opacity-100'
      : 'pointer-events-none -translate-y-4 opacity-0'
  }`}
>
        <div className="fixed inset-0 top-[90px] z-40 bg-white md:hidden">
          <div className="flex h-full flex-col gap-6 overflow-y-auto p-8">

            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>

            <Link href="/how-it-works" onClick={() => setMenuOpen(false)}>
              How It Works
            </Link>

            <Link href="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <div className="mt-8 flex flex-col gap-4">

              <Link
                href="/ai-assistant"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-black px-5 py-4 text-center transition hover:bg-black hover:text-white"
              >
                Talk To REMA AI
              </Link>

              <Link
                href="/book-call"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-black px-5 py-4 text-center text-white transition hover:opacity-90"
              >
                Book A Call
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}