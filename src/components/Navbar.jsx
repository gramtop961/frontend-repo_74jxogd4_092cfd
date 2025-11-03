import { Rocket, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-orange-400 flex items-center justify-center text-white shadow-md">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Auraloom AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 text-sm rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700">Sign in</button>
          <button className="px-3 py-2 text-sm rounded-lg bg-gray-900 text-white hover:bg-black flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
