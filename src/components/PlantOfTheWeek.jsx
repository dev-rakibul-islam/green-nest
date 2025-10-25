import React, { useMemo } from "react";
import usePlants from "../hooks/usePlants";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

const PlantOfTheWeek = () => {
  const { plants } = usePlants();
  const featured = useMemo(() => {
    if (!plants.length) return null;
    return plants.reduce(
      (best, p) => (p.rating > (best?.rating || 0) ? p : best),
      null
    );
  }, [plants]);

  if (!featured) return null;

  const rating = Math.max(0, Math.min(5, Math.round(featured.rating || 0)));

  const formatTag = (s) => (s || "").trim().replace(/\s+/g, "-");

  const Star = ({ filled = false }) => (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${
        filled ? "text-amber-500" : "text-gray-300 dark:text-gray-600"
      }`}
      fill="currentColor"
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
    </svg>
  );

  return (
    <section className="relative mb-5 overflow-hidden ">
      <div className="relative grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
        <div className="order-2 md:order-1">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-emerald-500/10 bg-white/70 backdrop-blur-sm dark:bg-white/5 aspect-square sm:aspect-4/3 md:aspect-5/4">
            <LazyImage
              src={featured.image}
              alt={featured.plantName}
              className="block h-auto w-full object-contain select-none transition-transform duration-500 hover:scale-[1.02]"
              fallback="/images/plant-placeholder.svg"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent" />
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium tracking-wide shadow-sm">
              🌿 Plant of the Week
            </span>
            {featured.isNew && (
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium tracking-wide shadow-sm animate-pulse">
                ✨ New Arrival
              </span>
            )}
          </div>

          <h3 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-900 dark:text-white drop-shadow-sm">
            {featured.plantName}
          </h3>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {featured.category && (
              <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 font-medium">
                {formatTag(featured.category)}
              </span>
            )}
            {featured.careLevel && (
              <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 font-medium">
                {formatTag(featured.careLevel)}
              </span>
            )}
            <div className="flex items-center gap-1 ml-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  filled={i < rating}
                  className={`w-4 h-4 ${
                    i < rating
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
              {featured.rating && (
                <span className="ml-1 text-xs text-gray-600 dark:text-gray-400 font-semibold">
                  {featured.rating.toFixed
                    ? featured.rating.toFixed(1)
                    : featured.rating}
                  /5
                </span>
              )}
            </div>
          </div>

          {featured.description && (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
              {featured.description}
            </p>
          )}
          <div className="flex flex-col items-start gap-5 pt-3">
            <span className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-300 tracking-tight">
              ${featured.price}
            </span>
            <Link
              to={`/plants/${featured.plantId}`}
              className="px-6 py-2.5 text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow-md hover:shadow-emerald-400/40 transition-all duration-300 font-semibold"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
