import React from "react";
import { Sprout, Droplets, ShieldCheck, Wind } from "lucide-react";
import GlassCard from "./GlassCard";

const categories = [
  {
    title: "Air-Purifying Icons",
    description:
      "Filter out indoor toxins with dense foliage that thrives beside desks and nightstands.",
    highlight: "Great for bedrooms",
    icon: Droplets,
    accent: "Air Circulation",
  },
  {
    title: "Pet-Safe Picks",
    description:
      "Non-toxic greens chosen by vets so curious pets can sniff safely.",
    highlight: "Vet approved",
    icon: ShieldCheck,
    accent: "Peace of mind",
  },
  {
    title: "Humidity Lovers",
    description:
      "Tropical stars that enjoy bathrooms, kitchens, and mini greenhouses.",
    highlight: "Mist weekly",
    icon: Wind,
    accent: "Spa ready",
  },
  {
    title: "Low-Light Heroes",
    description:
      "Resilient stunners that keep growing even when sunlight is scarce.",
    highlight: "Window-optional",
    icon: Sprout,
    accent: "Beginner friendly",
  },
];

const CategoriesShowcase = () => {
  return (
    <section className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
          curated collections
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">
          Find plants by lifestyle, not guesswork
        </h2>
        <p className="mt-2 text-base-content/70">
          Browse ready-made bundles so every room gets the right texture, color,
          and care routine.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <GlassCard key={category.title} className="p-6 md:p-8 h-full">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-emerald-500/15 p-3 ring-1 ring-emerald-500/30">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <span className="badge badge-success/80 text-xs">
                      {category.accent}
                    </span>
                  </div>
                  <p className="text-sm text-base-content/70 leading-relaxed">
                    {category.description}
                  </p>
                  <p className="text-sm font-semibold text-emerald-600">
                    {category.highlight}
                  </p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesShowcase;
