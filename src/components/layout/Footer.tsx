import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-16">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
           <Link href="/">
  <Image
    src="/images/rema-logo-black.png"
    alt="REMA"
    width={130}
    height={49}
    className="h-auto w-[140px] md:w-[160px]"
    priority
  />
</Link>

<p className="mt-4 text-sm text-zinc-600">
  Real Estate Marketing Agency
</p>
            <p className="mt-6 max-w-sm text-sm text-zinc-500">
              Intelligent marketing systems, AI automation and lead
              generation solutions built specifically for real estate
              professionals.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="mb-3 font-semibold">
                Company
              </h4>

              <ul className="space-y-2 text-sm text-zinc-600">
                <li>
                  <Link href="/about">About</Link>
                </li>

                <li>
                  <Link href="/services">Services</Link>
                </li>

                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold">
                Resources
              </h4>

              <ul className="space-y-2 text-sm text-zinc-600">
                <li>
                  <Link href="/how-it-works">
                    How It Works
                  </Link>
                </li>

                <li>
                  <Link href="/faqs">
                    FAQs
                  </Link>
                </li>
                <li>
  <Link href="/ai-assistant">
    REMA AI
  </Link>
</li>

<li>
  <Link href="/book-call">
    Book A Call
  </Link>
</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold">
                Legal
              </h4>

              <ul className="space-y-2 text-sm text-zinc-600">
                <li>
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/terms-of-use">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 text-sm text-zinc-500">
          © 2026 REMA. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}