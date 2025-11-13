import { FileText, Lock, Key, Smartphone, CheckCircle2 } from "lucide-react";

export default function Architecture() {
  const standards = [
    {
      title: "W3C Verifiable Credentials 2.0",
      description:
        "Core data model for all cards. Ensures tamper-evident credentials that users control. Cryptographic proofs without centralized verification servers.",
      icon: FileText,
    },
    {
      title: "SD-JWT & BBS+ Signatures",
      description:
        "Selective disclosure tech allowing users to reveal only requested claims from a credential without exposing everything else—privacy by design.",
      icon: Lock,
    },
    {
      title: "OpenID4VP",
      description:
        "Request/response protocol for credential presentation. Defines how viewers ask for specific claims and how users consent with fine-grained control.",
      icon: Key,
    },
    {
      title: "ISO Sizing Standards",
      description:
        "ISO 8559-2 (garments), ISO 9407 (Mondopoint shoes), ISO 8653 (rings) ensure global size compatibility and prevent vendor lock-in.",
      icon: CheckCircle2,
    },
    {
      title: "FHIR AllergyIntolerance",
      description:
        "Medical-grade allergy data structure for Food & Beverage Card. Ensures interoperability with health systems if user grants access in emergencies.",
      icon: Smartphone,
    },
  ];

  return (
    <section id="tech" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Technical Foundations: Standards & Protocols
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Built on battle-tested standards, not proprietary systems. Ensuring
            interoperability, regulatory compliance, and future-proofing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {standards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <div
                key={index}
                className="border border-neutral-200 rounded-xl p-8 hover:border-blue-300 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {standard.title}
                    </h3>
                    <p className="text-neutral-600">{standard.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <Smartphone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-neutral-900 mb-2">
                Apple & Google Wallet APIs
              </h3>
              <p className="text-neutral-700">
                Native pass formats (.pkpass, JWT payloads) with push updates,
                rotating barcodes, and secure storage users already trust. No
                custom wallet app needed. QR codes contain only opaque
                short-lived tokens (60-120 seconds), never raw PII. Maximum
                practical QR capacity is ~3KB, reinforcing the token-based
                approach as the only viable architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
