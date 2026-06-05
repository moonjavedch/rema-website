import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-16">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <h3 className="text-xl font-bold">REMA</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Real Estate Marketing Agency
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>About</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>How It Works</li>
                <li>Case Studies</li>
                <li>FAQs</li>
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