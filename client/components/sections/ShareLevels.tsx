export default function ShareLevels() {
  const levels = [
    {
      name: "Basic Level",
      description: "Minimal information suitable for public contexts.",
      examples: [
        "First name only",
        "City without address",
        "Derived clothing sizes without body measurements",
      ],
      note: "This level requires no explicit consent—it's designed for low-risk interactions.",
    },
    {
      name: "Standard Level",
      description: "Contextual information for service providers.",
      examples: [
        "Full name",
        "Brand-specific sizes",
        "Dietary preferences without medical details",
      ],
      note: "Requires one-time consent per interaction with option to 'always allow.'",
    },
    {
      name: "Detailed Level",
      description: "Complete information for trusted relationships.",
      examples: [
        "Exact body measurements",
        "Medical allergies",
        "Contact information & loyalty numbers",
      ],
      note: "Always requires explicit consent with clear purpose statement shown to user before approval.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Share Levels: Progressive Disclosure
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            You decide how much to share. Each level balances convenience with
            privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:border-neutral-300 transition"
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {level.name}
              </h3>
              <p className="text-neutral-600 mb-6">{level.description}</p>

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
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
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
  );
}
