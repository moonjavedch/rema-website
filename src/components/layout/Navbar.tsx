'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 bg-white border-b border-black/10"
        style={{ height: '90px', width: '100%' }}
      >
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 md:px-10 xl:px-16">

          <Link href="/">
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
            <Link href="/services">Services</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className="h-[2px] w-6 bg-black"></span>
            <span className="h-[2px] w-6 bg-black"></span>
            <span className="h-[2px] w-6 bg-black"></span>
          </button>

          <div
            className="hidden md:flex items-center"
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
              className="rounded-full bg-black px-5 py-3 text-sm text-white transition hover:opacity-90"
            >
              Book A Call
            </Link>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 top-[90px] z-40 bg-white md:hidden">
          <div className="flex flex-col gap-6 p-8">

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
      )}
    </>
  )
}