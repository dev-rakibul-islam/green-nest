import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Leaf, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Curate Your Green Sanctuary",
    subtitle: "Statement plants, curated picks, and care made simple.",
    image:
      "https://images.unsplash.com/photo-1571684137408-c9f1dea76e62?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Breathe Easy, Live Green",
    subtitle: "Air-purifying favorites styled for bright, calming spaces.",
    image:
      "https://images.unsplash.com/photo-1732408078311-c00e3caba7ee?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Grow With Confidence",
    subtitle: "Care tips, tools, and expert advice at your fingertips.",
    image:
      "https://images.unsplash.com/photo-1723036906365-972ac28ccf2c?auto=format&fit=crop&w=1400&q=80",
  },
];

const Hero = () => {
  return (
    <div className="mb-10 mt-0">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        speed={800}
        loop
        className="overflow-hidden shadow-2xl"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[60vh] max-h-[70vh] min-h-[360px] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 md:px-10 max-w-7xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-white text-sm backdrop-blur">
                    <Sparkles className="h-4 w-4" />
                    New Season | Fresh Picks
                  </div>

                  <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
                    {s.title}
                  </h2>
                  <p className="mt-3 md:mt-4 text-base md:text-xl text-white/90 max-w-2xl">
                    {s.subtitle}
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/plants"
                      className="group inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-semibold shadow-lg shadow-emerald-500/25 transition"
                    >
                      Shop Plants
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                      to="/about"
                      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold backdrop-blur transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-5 right-5 hidden md:flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur">
                <Leaf className="h-5 w-5 text-emerald-300" />
                <div className="text-sm leading-tight">
                  <span className="font-semibold">1,000+</span> happy plant
                  parents
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
