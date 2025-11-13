import { Check, X } from "lucide-react";

export default function ProblemSolution() {
  const todayProblems = [
    "Repeating sizes at every store visit",
    "Forgetting dietary restrictions at restaurants",
    "Sharing too much personal data unnecessarily",
    "No control over who sees your information",
    "Data scattered across platforms",
  ];

  const hushhApproach = [
    "Single source of truth in your wallet",
    "Granular consent controls per interaction",
    "Minimal disclosure by default",
    "Full audit trail of data access",
    "Standards-based verifiable credentials",
  ];

  return (
    <section id="problem" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            The Privacy Problem We're Solving
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Today's reality makes it impossible to control your personal data.
            Hushh changes that.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">
              Today's Reality
            </h3>
            <div className="space-y-4">
              {todayProblems.map((problem, index) => (
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
              {hushhApproach.map((approach, index) => (
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
            <span className="font-semibold">Privacy by Design:</span> India's
            Digital Personal Data Protection Act, 2023 mandates purpose-limited
            processing, explicit consent, and data subject rights. Hushh bakes
            these principles into the architecture from day one, ensuring
            compliance isn't an afterthought but a foundational feature that
            builds user trust.
          </p>
        </div>
      </div>
    </section>
  );
}
