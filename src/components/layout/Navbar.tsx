export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10 xl:px-16">
        <div className="text-xl font-semibold tracking-tight">
          REMA
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          <a href="#">Services</a>
          <a href="#">How It Works</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="rounded-full bg-black px-5 py-3 text-sm text-white">
          Book A Call
        </button>
      </div>
    </header>
  )
}