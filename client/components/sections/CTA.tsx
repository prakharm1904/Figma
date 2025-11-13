import { ArrowRight, Mail, Github } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-neutral-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/5 opacity-40"></div>
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
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <p className="text-neutral-300">Privacy Control</p>
          </div>
        </div>
      </div>
    </section>
  );
}
