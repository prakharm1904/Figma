import { ArrowRight, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-small-white/10 bg-[position:0_0] opacity-40"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

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
            Carry your preferences everywhere. Share on your terms. Never repeat
            yourself again.
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

        <div className="mt-16 relative">
          <div className="aspect-video rounded-2xl bg-gradient-to-b from-blue-500/20 to-neutral-900/50 border border-blue-500/30 p-8 backdrop-blur">
            <div className="w-full h-full rounded-lg bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/30 mb-4">
                  <svg
                    className="w-8 h-8 text-blue-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-neutral-300">
                  Interactive Demo (Coming Soon)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
