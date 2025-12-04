import React from "react";
import usePlants from "../hooks/usePlants";
import SkeletonCard from "../components/SkeletonCard";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import LazyImage from "./LazyImage";

const PlantCard = ({ plant }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="shine absolute inset-0" />

      <div className="relative flex items-center justify-center bg-white/5">
        <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/15 blur-2xl" />
        <div className="pointer-events-none absolute -right-8 -bottom-10 h-24 w-24 rounded-full bg-teal-400/15 blur-2xl" />

        <LazyImage
          src={plant.image}
          alt={plant.plantName || "Plant image"}
          className="max-h-full max-w-full object-contain drop-shadow-[0_8px_20px_rgba(16,185,129,0.25)]"
          fallback="/images/plant-placeholder.svg"
        />
        <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium backdrop-blur-md shadow-sm flex items-center gap-1">
          <Star className="size-3 fill-yellow-300 text-yellow-300" />
          <span className="font-medium">{Number(plant.rating).toFixed(1)}</span>
        </div>
        {plant.category && (
          <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium backdrop-blur-md shadow-sm">
            {plant.category}
          </div>
        )}
      </div>

      <div className="px-5 pb-5 pt-4 md:px-6 md:pb-6">
        <h3 className="text-base sm:text-lg font-semibold leading-snug line-clamp-1">
          {plant.plantName}
        </h3>
        <p className="text-sm text-base-content/70 line-clamp-1">
          {plant.careLevel}
          {plant.careLevel && plant.category ? " | " : ""}
          {plant.category}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg sm:text-xl font-semibold">
            ${plant.price}
          </span>
          <Link
            to={`/plants/${plant.plantId}`}
            aria-label={`View details for ${plant.plantName}`}
            className="btn bg-[#007C56] text-white btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
const TopRated = () => {
  const { plants, loading, error } = usePlants();
  const topRated = plants
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center justify-center gap-2">
        <div>
          <h2 className="text-center text-2xl md:text-4xl  font-bold">
            Top Rated Indoor Plants
          </h2>
          <p className="text-center text-sm sm:text-base text-base-content/70">
            Our community's favorites for beauty and easy care.
          </p>
        </div>
      </div>
      <div className="items-end justify-end flex">
        <Link to="/plants" className="btn bg-[#007C56] text-white btn-sm mb-2">
          See all
        </Link>
      </div>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}
      {error && <p className="text-error">Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-6">
        {topRated.map((p) => (
          <PlantCard key={p.plantId} plant={p} />
        ))}
      </div>
    </section>
  );
};

export default TopRated;
