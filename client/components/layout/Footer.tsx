import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
                <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-neutral-900">Hushh Wallet</span>
            </div>
            <p className="text-sm text-neutral-600">
              Privacy-first preference cards for your wallet.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-neutral-900 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-neutral-900 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-neutral-900 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-neutral-600">
            © 2024 Hushh Wallet. Privacy-first personal data management.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 transition"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
