import React from "react";
import GlassCard from "./GlassCard";
import LazyImage from "./LazyImage";
import { Quote, ArrowUpRight } from "lucide-react";

const stories = [
  {
    title: "How Tasnia turned her studio into a calm jungle",
    excerpt:
      "Snake plants near the bed, ZZ plant beside the desk, plus a humidifier routine for the Monstera.",
    author: "Tasnia Rahman",
    readTime: "4 min read",
    cover:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "3 watering rituals to prevent root rot",
    excerpt:
      "Bottom watering, soil probes, and airflow checks keep roots healthy even in tiny apartments.",
    author: "GreenNest Experts",
    readTime: "6 min read",
    cover:
      "https://images.unsplash.com/photo-1459664018906-085c36f472af?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Weekend propagation workshop recap",
    excerpt:
      "We clipped pothos vines, rooted peperomias, and sent everyone home with grow logs.",
    author: "Community Team",
    readTime: "3 min read",
    cover:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
  },
];

const CommunityStories = () => {
  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
            journal
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Stories from real plant parents
          </h2>
          <p className="mt-2 text-base-content/70">
            Learn from community experiments, styling ideas, and care wins.
          </p>
        </div>
        <a
          href="https://blog.greennest.com"
          target="_blank"
          rel="noreferrer"
          className="link text-[#007C56] hover:text-[#007C56]/80 flex items-center gap-2"
        >
          Visit full journal <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story) => (
          <GlassCard
            key={story.title}
            className="overflow-hidden h-full flex flex-col"
          >
            <figure className="relative h-40 w-full overflow-hidden">
              <LazyImage
                src={story.cover}
                alt={story.title}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[11px] uppercase tracking-wide text-white">
                <Quote className="h-3.5 w-3.5" /> insight
              </span>
            </figure>
            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                {story.readTime}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{story.title}</h3>
              <p className="mt-2 text-sm text-base-content/70 line-clamp-3">
                {story.excerpt}
              </p>
              <div className="mt-auto pt-4 text-sm text-base-content/60">
                By {story.author}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default CommunityStories;
