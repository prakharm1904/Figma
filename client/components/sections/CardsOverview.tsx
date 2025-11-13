import {
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
} from "lucide-react";

export default function CardsOverview() {
  const icons = [
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
  ];

  const cards = [
    {
      number: "01",
      name: "Personal Basics & Consent",
      description:
        "Your identity anchor and privacy control center. Preferred name, pronouns, location, contact controls.",
      iconIndex: 0,
      wave: 1,
    },
    {
      number: "02",
      name: "Fashion Fit & Style",
      description:
        "Body measurements aligned to ISO standards. Brand-specific sizes, style preferences, gifting safe mode.",
      iconIndex: 1,
      wave: 1,
    },
    {
      number: "03",
      name: "Footwear & Accessories Sizing",
      description:
        "Mondopoint shoe sizes, belt sizes, glove dimensions, hat circumference. Complete accessory fit.",
      iconIndex: 2,
      wave: 2,
    },
    {
      number: "04",
      name: "Jewelry & Watch Fit",
      description:
        "Ring sizing per ISO 8653, wrist circumference, metal allergies, style preferences.",
      iconIndex: 3,
      wave: 3,
    },
    {
      number: "05",
      name: "Color & Style Preferences",
      description:
        "Your personal style DNA. Seasonal palettes, fabric preferences, style archetypes, hard avoids.",
      iconIndex: 4,
      wave: 2,
    },
    {
      number: "06",
      name: "Brand Affinity & Wishlist",
      description:
        "Top brands, price comfort bands, private wishlist with per-viewer controls. No purchase history exposed.",
      iconIndex: 5,
      wave: 2,
    },
    {
      number: "07",
      name: "Food & Beverage Preferences",
      description:
        "Dietary patterns, spice tolerance, FHIR-aligned allergens, disliked ingredients, favorite cuisines.",
      iconIndex: 6,
      wave: 1,
    },
    {
      number: "08",
      name: "Travel & Hospitality",
      description:
        "Room preferences, flight preferences, service notes, loyalty IDs. Frictionless check-ins and experiences.",
      iconIndex: 7,
      wave: 3,
    },
    {
      number: "09",
      name: "Events & Access/Swag",
      description:
        "Badge info, T-shirt sizing, dietary needs linked from other cards, contact toggle, per-event nickname.",
      iconIndex: 8,
      wave: 3,
    },
    {
      number: "10",
      name: "Gifting Profile",
      description:
        "Consolidated sizes, preferred categories, price bands, no-go list. Perfect gift ideas without spoilers.",
      iconIndex: 9,
      wave: 3,
    },
  ];

  const getWaveColor = (wave: number) => {
    switch (wave) {
      case 1:
        return "bg-blue-50 border-blue-200";
      case 2:
        return "bg-purple-50 border-purple-200";
      case 3:
        return "bg-amber-50 border-amber-200";
      default:
        return "bg-neutral-50 border-neutral-200";
    }
  };

  const getWaveLabel = (wave: number) => {
    switch (wave) {
      case 1:
        return "Wave 1: Foundation";
      case 2:
        return "Wave 2: Expansion";
      case 3:
        return "Wave 3: Specialized";
      default:
        return "";
    }
  };

  const getWaveBadgeColor = (wave: number) => {
    switch (wave) {
      case 1:
        return "bg-blue-100 text-blue-700";
      case 2:
        return "bg-purple-100 text-purple-700";
      case 3:
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-neutral-100 text-neutral-700";
    }
  };

  return (
    <section id="cards" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            The 10 MVP Cards
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Comprehensive preference coverage rolled out in three strategic
            waves. Each card solves a specific problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = icons[card.iconIndex];
            return (
              <div
                key={index}
                className={`border rounded-xl p-6 transition hover:shadow-lg ${getWaveColor(card.wave)}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-neutral-900 mb-2">
                      {card.number}
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
                <p className="text-neutral-700 mb-4">{card.description}</p>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getWaveBadgeColor(card.wave)}`}
                >
                  {getWaveLabel(card.wave)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
