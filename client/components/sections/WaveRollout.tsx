export default function WaveRollout() {
  const waves = [
    {
      name: "Wave 1: Foundation",
      timeline: "0-90 days",
      cards: [
        "Personal Basics & Consent",
        "Fashion Fit & Style",
        "Food & Beverage",
      ],
      description:
        "Covers identity, most common shopping use case, and critical safety (dietary). Expected adoption >70% within 3 months.",
      color: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "Wave 2: Expansion",
      timeline: "3-6 months post-Wave 1",
      cards: [
        "Footwear & Accessories",
        "Color & Style",
        "Brand Affinity & Wishlist",
      ],
      description:
        "Deepens shopping utility and introduces wishlist/gifting prep. Expected adoption ~50% within 6 months post-Wave 1.",
      color: "from-purple-500 to-purple-600",
      lightBg: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      name: "Wave 3: Specialized",
      timeline: "6-9 months post-Wave 2",
      cards: [
        "Jewelry & Watch Fit",
        "Travel & Hospitality",
        "Events & Access",
        "Gifting Profile",
      ],
      description:
        "Niche use cases with high value for specific moments. Expected adoption ~30% within 9 months post-Wave 2.",
      color: "from-amber-500 to-amber-600",
      lightBg: "bg-amber-50",
      borderColor: "border-amber-200",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            MVP Rollout Strategy: Three Waves
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            A phased rollout prioritizes high-impact cards first, validates the
            architecture with real usage, and iterates based on feedback.
          </p>
        </div>

        <div className="space-y-6">
          {waves.map((wave, index) => (
            <div
              key={index}
              className={`${wave.lightBg} border ${wave.borderColor} rounded-xl p-8`}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {wave.name}
                  </h3>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${wave.color}`}
                  >
                    {wave.timeline}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-neutral-700 mb-6">{wave.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 mb-3">
                      Cards in this wave:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {wave.cards.map((card, i) => (
                        <span
                          key={i}
                          className="bg-white px-3 py-1 rounded-lg text-sm font-medium text-neutral-700 border border-neutral-200"
                        >
                          {card}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border border-neutral-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-neutral-900 mb-4">
            Why This Approach?
          </h3>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600 mt-1">•</span>
              <span>
                <strong>Reduces Risk:</strong> Launching all 10 cards
                simultaneously risks overwhelming users and makes debugging
                harder.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600 mt-1">•</span>
              <span>
                <strong>Validates Architecture:</strong> Each wave tests the
                real-world system with actual user interactions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600 mt-1">•</span>
              <span>
                <strong>Enables Iteration:</strong> Feedback from each wave
                informs improvements before the next expansion.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600 mt-1">•</span>
              <span>
                <strong>Builds Momentum:</strong> Early success drives adoption
                and partnerships for later waves.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
