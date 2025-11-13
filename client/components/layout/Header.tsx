import { Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
            <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg text-neutral-900">
            Hushh Wallet
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#problem"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition"
          >
            The Problem
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition"
          >
            How It Works
          </a>
          <a
            href="#cards"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition"
          >
            Cards
          </a>
          <a
            href="#tech"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition"
          >
            Technology
          </a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition text-sm">
          Get Started
        </button>
      </nav>
    </header>
  );
}
