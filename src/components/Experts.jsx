import LazyImage from "./LazyImage";
import { Droplets, Leaf, Sun } from "lucide-react";
const experts = [
  {
    name: "Ava Green",
    role: "Indoor Air Purifiers",
    image: "https://i.ibb.co.com/nsZFB5nn/1.png",
  },
  {
    name: "Rakib",
    role: "Low-Light Specialists",
    image: "https://i.ibb.co.com/tPJBjmTg/2.png",
  },
  {
    name: "Maya Fern",
    role: "Tropical & Humidity",
    image: "https://i.ibb.co.com/hJv1zy7Q/3.png",
  },
  {
    name: "Noah Bloom",
    role: "Propagation Coach",
    image: "https://i.ibb.co.com/hRRRZhSC/4.png",
  },
];

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white ring-1 ring-white/25">
    {children}
  </span>
);

const Experts = () => {
  return (
    <section className="relative mb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-6 -top-10 -bottom-6 -z-10 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(40rem 16rem at 20% 20%, rgba(34,197,94,.25), transparent 60%), radial-gradient(32rem 12rem at 80% 40%, rgba(59,130,246,.25), transparent 60%)",
        }}
      />

      <div className="mb-8 flex items-center justify-center gap-4">
        <div className="text-center items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content">
            Meet Our Green Experts
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base-content/80">
            Personalized plant guidance from certified specialists.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {experts.map((e, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-md ring-1 ring-inset ring-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
          >
            <figure className="relative">
              <LazyImage
                src={e.image}
                alt={e.name}
                className="h-44 w-full object-cover"
                fallback="/images/avatar-placeholder.svg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white ring-1 ring-white/30 backdrop-blur-md">
                  <Leaf size={14} /> {e.role}
                </span>
              </div>
            </figure>
            <div className="relative p-4 bg-green-700">
              <span aria-hidden className="shine absolute inset-0" />
              <h3 className="text-base md:text-lg font-semibold tracking-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,.35)]">
                {e.name}
              </h3>
              <p className="mt-0.5 text-xs md:text-sm text-white/80">
                {e.role}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-white/90">
                <Badge>
                  <Sun size={14} /> Light
                </Badge>
                <Badge>
                  <Droplets size={14} /> Water
                </Badge>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experts;
