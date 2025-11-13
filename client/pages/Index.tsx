import {
  Shield,
  ArrowRight,
  Check,
  X,
  CreditCard,
  Wallet,
  QrCode,
  Lock,
  CheckCircle2,
  User,
  Shirt,
  Footprints,
  Ring,
  Palette,
  ShoppingBag,
  UtensilsCrossed,
  Plane,
  Ticket,
  Gift,
  Mail,
  Github,
  Smartphone,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
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

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-20 md:py-32">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
                <Lock className="w-4 h-4" />
                <span className="text-sm font-medium text-blue-200">
                  Privacy-First Design
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Your Personal Data,
                <br />
                Your Complete Control
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Carry your preferences everywhere. Share on your terms. Never
                repeat yourself again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SOLUTION SECTION */}
        <section id="problem" className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                The Privacy Problem We're Solving
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Today's reality makes it impossible to control your personal
                data. Hushh changes that.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-8">
                  Today's Reality
                </h3>
                <div className="space-y-4">
                  {[
                    "Repeating sizes at every store visit",
                    "Forgetting dietary restrictions at restaurants",
                    "Sharing too much personal data unnecessarily",
                    "No control over who sees your information",
                    "Data scattered across platforms",
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                      <p className="text-neutral-700">{problem}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-8">
                  Hushh's Approach
                </h3>
                <div className="space-y-4">
                  {[
                    "Single source of truth in your wallet",
                    "Granular consent controls per interaction",
                    "Minimal disclosure by default",
                    "Full audit trail of data access",
                    "Standards-based verifiable credentials",
                  ].map((approach, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="text-neutral-700">{approach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-neutral-800">
                <span className="font-semibold">Privacy by Design:</span>{" "}
                India's Digital Personal Data Protection Act, 2023 mandates
                purpose-limited processing, explicit consent, and data subject
                rights. Hushh bakes these principles into the architecture from
                day one.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="py-20 md:py-32 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Core Architecture: How It Works
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                A simple yet powerful five-step journey from creation to
                complete privacy control.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  num: "01",
                  title: "Create Your Cards",
                  desc: "Build preference cards through intuitive forms, importing data from past purchases or verified sources like DigiLocker.",
                  icon: CreditCard,
                },
                {
                  num: "02",
                  title: "Store in Wallet",
                  desc: "Cards become Apple .pkpass or Google Wallet passes with QR codes containing short-lived tokens, not raw personal data.",
                  icon: Wallet,
                },
                {
                  num: "03",
                  title: "Scan & Consent",
                  desc: "When scanned, users see exactly what's requested and choose to share Basic, Standard, or Detailed levels—or deny entirely.",
                  icon: QrCode,
                },
                {
                  num: "04",
                  title: "Selective Disclosure",
                  desc: "Only requested claims are revealed using W3C Verifiable Credentials and SD-JWT, keeping everything else private.",
                  icon: Lock,
                },
                {
                  num: "05",
                  title: "Audit & Revoke",
                  desc: "Full transparency log shows who saw what and when, with one-tap revocation that instantly disables access.",
                  icon: CheckCircle2,
                },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-6 border border-neutral-200 h-full hover:border-blue-300 transition">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        {step.num}
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-4">
                        {step.desc}
                      </p>
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SHARE LEVELS SECTION */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Share Levels: Progressive Disclosure
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                You decide how much to share. Each level balances convenience
                with privacy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic Level",
                  desc: "Minimal information suitable for public contexts.",
                  examples: [
                    "First name only",
                    "City without address",
                    "Derived clothing sizes without body measurements",
                  ],
                  note: "This level requires no explicit consent—it's designed for low-risk interactions.",
                },
                {
                  name: "Standard Level",
                  desc: "Contextual information for service providers.",
                  examples: [
                    "Full name",
                    "Brand-specific sizes",
                    "Dietary preferences without medical details",
                  ],
                  note: "Requires one-time consent per interaction with option to 'always allow.'",
                },
                {
                  name: "Detailed Level",
                  desc: "Complete information for trusted relationships.",
                  examples: [
                    "Exact body measurements",
                    "Medical allergies",
                    "Contact information & loyalty numbers",
                  ],
                  note: "Always requires explicit consent with clear purpose statement.",
                },
              ].map((level, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:border-neutral-300 transition"
                >
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {level.name}
                  </h3>
                  <p className="text-neutral-600 mb-6">{level.desc}</p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-neutral-700 mb-3">
                      Examples:
                    </p>
                    <ul className="space-y-2">
                      {level.examples.map((example, i) => (
                        <li
                          key={i}
                          className="text-sm text-neutral-600 flex items-start gap-2"
                        >
                          <span className="text-blue-600 font-bold mt-0.5">
                            •
                          </span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-neutral-600 italic border-t border-neutral-200 pt-6">
                    {level.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARDS OVERVIEW SECTION */}
        <section id="cards" className="py-20 md:py-32 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                The 10 MVP Cards
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Comprehensive preference coverage rolled out in three strategic
                waves.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  name: "Personal Basics & Consent",
                  desc: "Your identity anchor and privacy control center.",
                  wave: 1,
                  icon: User,
                },
                {
                  num: "02",
                  name: "Fashion Fit & Style",
                  desc: "Body measurements aligned to ISO standards.",
                  wave: 1,
                  icon: Shirt,
                },
                {
                  num: "03",
                  name: "Footwear & Accessories Sizing",
                  desc: "Mondopoint shoe sizes, belt sizes, glove dimensions.",
                  wave: 2,
                  icon: Footprints,
                },
                {
                  num: "04",
                  name: "Jewelry & Watch Fit",
                  desc: "Ring sizing per ISO 8653, wrist circumference, metal allergies.",
                  wave: 3,
                  icon: Ring,
                },
                {
                  num: "05",
                  name: "Color & Style Preferences",
                  desc: "Your personal style DNA. Seasonal palettes, fabric preferences.",
                  wave: 2,
                  icon: Palette,
                },
                {
                  num: "06",
                  name: "Brand Affinity & Wishlist",
                  desc: "Top brands, price comfort bands, private wishlist with controls.",
                  wave: 2,
                  icon: ShoppingBag,
                },
                {
                  num: "07",
                  name: "Food & Beverage Preferences",
                  desc: "Dietary patterns, spice tolerance, FHIR-aligned allergens.",
                  wave: 1,
                  icon: UtensilsCrossed,
                },
                {
                  num: "08",
                  name: "Travel & Hospitality",
                  desc: "Room preferences, flight preferences, service notes.",
                  wave: 3,
                  icon: Plane,
                },
                {
                  num: "09",
                  name: "Events & Access/Swag",
                  desc: "Badge info, T-shirt sizing, dietary needs, contact toggle.",
                  wave: 3,
                  icon: Ticket,
                },
                {
                  num: "10",
                  name: "Gifting Profile",
                  desc: "Consolidated sizes, preferred categories, price bands.",
                  wave: 3,
                  icon: Gift,
                },
              ].map((card, index) => {
                const Icon = card.icon;
                const waveColor =
                  card.wave === 1
                    ? "bg-blue-50 border-blue-200"
                    : card.wave === 2
                      ? "bg-purple-50 border-purple-200"
                      : "bg-amber-50 border-amber-200";
                const waveBadge =
                  card.wave === 1
                    ? "bg-blue-100 text-blue-700"
                    : card.wave === 2
                      ? "bg-purple-100 text-purple-700"
                      : "bg-amber-100 text-amber-700";
                const waveLabel =
                  card.wave === 1
                    ? "Wave 1: Foundation"
                    : card.wave === 2
                      ? "Wave 2: Expansion"
                      : "Wave 3: Specialized";
                return (
                  <div
                    key={index}
                    className={`border rounded-xl p-6 transition hover:shadow-lg ${waveColor}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-neutral-900 mb-2">
                          {card.num}
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900">
                          {card.name}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/60">
                          <Icon className="w-6 h-6 text-neutral-600" />
                        </div>
                      </div>
                    </div>
                    <p className="text-neutral-700 mb-4">{card.desc}</p>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${waveBadge}`}
                    >
                      {waveLabel}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ARCHITECTURE SECTION */}
        <section id="tech" className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Technical Foundations: Standards & Protocols
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Built on battle-tested standards, not proprietary systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "W3C Verifiable Credentials 2.0",
                  desc: "Core data model for all cards. Ensures tamper-evident credentials that users control.",
                },
                {
                  title: "SD-JWT & BBS+ Signatures",
                  desc: "Selective disclosure tech allowing users to reveal only requested claims—privacy by design.",
                },
                {
                  title: "OpenID4VP",
                  desc: "Request/response protocol for credential presentation with fine-grained scope control.",
                },
                {
                  title: "ISO Sizing Standards",
                  desc: "ISO 8559-2 (garments), ISO 9407 (Mondopoint shoes), ISO 8653 (rings) ensure global compatibility.",
                },
              ].map((standard, index) => (
                <div
                  key={index}
                  className="border border-neutral-200 rounded-xl p-8 hover:border-blue-300 transition"
                >
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-neutral-600">{standard.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Smartphone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    Apple & Google Wallet APIs
                  </h3>
                  <p className="text-neutral-700">
                    Native pass formats (.pkpass, JWT payloads) with push
                    updates, rotating barcodes, and secure storage users already
                    trust. No custom wallet app needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-neutral-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Take Control of Your Data?
            </h2>
            <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
              Join the Hushh Wallet beta program and help shape the future of
              privacy-first personal data management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                <Github className="w-5 h-5" />
                View on GitHub
              </button>
            </div>
            <p className="text-neutral-400 mb-12">
              Beta wave launching Q1 2024. Limited slots available.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">10</div>
                <p className="text-neutral-300">Preference Cards</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <p className="text-neutral-300">Share Levels</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  100%
                </div>
                <p className="text-neutral-300">Privacy Control</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-8 text-center">
            <p className="text-sm text-neutral-600">
              © 2024 Hushh Wallet. Privacy-first personal data management.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
