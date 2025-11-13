import {
  CreditCard,
  Plus,
  Wallet,
  QrCode,
  Lock,
  CheckCircle2,
} from "lucide-react";

export default function HowItWorks() {
  const icons = [CreditCard, Wallet, QrCode, Lock, CheckCircle2];

  const steps = [
    {
      number: "01",
      title: "Create Your Cards",
      description:
        "Build preference cards through intuitive forms, importing data from past purchases or verified sources like DigiLocker.",
      iconIndex: 0,
    },
    {
      number: "02",
      title: "Store in Wallet",
      description:
        "Cards become Apple .pkpass or Google Wallet passes with QR codes containing short-lived tokens, not raw personal data.",
      iconIndex: 1,
    },
    {
      number: "03",
      title: "Scan & Consent",
      description:
        "When scanned, users see exactly what's requested and choose to share Basic, Standard, or Detailed levels—or deny entirely.",
      iconIndex: 2,
    },
    {
      number: "04",
      title: "Selective Disclosure",
      description:
        "Only requested claims are revealed using W3C Verifiable Credentials and SD-JWT, keeping everything else private.",
      iconIndex: 3,
    },
    {
      number: "05",
      title: "Audit & Revoke",
      description:
        "Full transparency log shows who saw what and when, with one-tap revocation that instantly disables access.",
      iconIndex: 4,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Core Architecture: How It Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            A simple yet powerful five-step journey from creation to complete
            privacy control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = icons[step.iconIndex];
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 border border-neutral-200 h-full hover:border-blue-300 transition">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2">
                    <Plus className="w-6 h-6 text-neutral-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
