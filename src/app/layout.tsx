import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import './globals.css'

const satoshi = localFont({
  src: '../fonts/Satoshi-Variable.woff2',
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'REMA',
  description: 'Real Estate Marketing Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}