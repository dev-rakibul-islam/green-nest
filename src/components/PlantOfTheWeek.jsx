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
    <section className="relative mb-5 overflow-hidden">
      <div className="relative grid items-center gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white/70 shadow-md ring-1 ring-emerald-500/10 backdrop-blur-sm dark:bg-white/5 sm:aspect-4/3 md:aspect-5/4">
            <LazyImage
              src={featured.image}
              alt={featured.plantName}
              className="block h-auto w-full select-none object-contain transition-transform duration-500 hover:scale-[1.02]"
              fallback="/images/plant-placeholder.svg"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent" />
          </div>
        </div>
        <div className="order-1 space-y-5 md:order-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium tracking-wide text-emerald-700 shadow-sm">
              Plant of the Week
            </span>
            {featured.isNew && (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium tracking-wide text-amber-700 shadow-sm">
                New Arrival
              </span>
            )}
          </div>

          <h3 className="text-4xl font-extrabold leading-snug text-gray-900 drop-shadow-sm dark:text-white md:text-5xl">
            {featured.plantName}
          </h3>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {featured.category && (
              <span className="rounded-md bg-emerald-50 px-2 py-1 font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                {formatTag(featured.category)}
              </span>
            )}
            {featured.careLevel && (
              <span className="rounded-md bg-gray-100 px-2 py-1 font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {formatTag(featured.careLevel)}
              </span>
            )}
            <div className="ml-2 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  filled={i < rating}
                  className={`h-4 w-4 ${
                    i < rating
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
              {featured.rating && (
                <span className="ml-1 text-xs font-semibold text-gray-600 dark:text-gray-400">
                  {featured.rating.toFixed
                    ? featured.rating.toFixed(1)
                    : featured.rating}
                  /5
                </span>
              )}
            </div>
          </div>

          {featured.description && (
            <p className="max-w-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {featured.description}
            </p>
          )}
          <div className="flex flex-col items-start gap-5 pt-3">
            <span className="text-3xl font-extrabold tracking-tight text-emerald-700 dark:text-emerald-300">
              ${featured.price}
            </span>
            <Link
              to={`/plants/${featured.plantId}`}
              className="rounded-md bg-emerald-600 px-6 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:shadow-emerald-400/40"
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
