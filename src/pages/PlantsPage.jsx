import React from "react";
import usePlants from "../hooks/usePlants";
import { Link } from "react-router-dom";
import SkeletonCard from "../components/SkeletonCard";
import { Star, Leaf, Tag } from "lucide-react";
import LazyImage from "../components/LazyImage";
const PlantGlassCard = ({ plant }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="shine absolute inset-0" />

      <div className="relative aspect-4/3 overflow-hidden flex items-center justify-center bg-white/5">
        <LazyImage
          src={plant.image}
          alt={plant.plantName || "Plant image"}
          className="max-h-auto max-w-full object-contain drop-shadow-[0_8px_20px_rgba(16,185,129,0.25)]"
          fallback="/images/plant-placeholder.svg"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-white/20 to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="glass badge badge-ghost/80 gap-1 border border-white/20 text-white/90">
            <Star className="size-3 fill-yellow-300 text-yellow-300" />
            {Number(plant.rating ?? 0).toFixed(1)}
          </span>
          {plant.category && (
            <span className="glass badge badge-ghost/80 gap-1 border border-white/20 text-white/90">
              <Tag className="size-3" /> {plant.category}
            </span>
          )}
        </div>
      </div>

      <div className="relative p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-semibold tracking-tight line-clamp-1">
              {plant.plantName}
            </h3>
            <p className="mt-0.5 text-sm text-base-content/70 line-clamp-1 flex items-center gap-1">
              <Leaf className="size-4 opacity-70" />
              {plant.careLevel}
              {plant.careLevel && plant.providerName ? " • " : ""}
              {plant.providerName}
            </p>
          </div>
          <div className="rounded-xl px-3 py-1.5 text-right border border-white/20 bg-white/10 backdrop-blur-md">
            <span className="block text-xs text-base-content/70">Price</span>
            <span className="block text-lg font-bold">${plant.price}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-base-content/60">
            Stock: {plant.availableStock ?? 0}
          </div>
          <Link
            to={`/plants/${plant.plantId}`}
            aria-label={`View details for ${plant.plantName}`}
            className="btn btn-sm border border-white/20 bg-white/10 backdrop-blur-md hover:border-emerald-300/40 hover:bg-emerald-400/10"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const PlantsPage = () => {
  const { plants, loading, error } = usePlants();

  return (
    <div className="container mx-auto px-4 md:px-8 mb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-emerald-500/10 via-transparent to-emerald-500/10" />

      <div className="container mx-auto px-4 pt-4 pb-12">
        <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-center text-3xl md:text-4xl font-bold tracking-tight">
              All Plants
            </h1>
            <p className="text-center text-base-content/70 text-sm md:text-base">
              Browse our collection of easy-care indoor plants.
            </p>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {error && (
          <div className="alert alert-error glass">
            <span>Failed to load plants: {error}</span>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((p) => (
              <PlantGlassCard key={p.plantId} plant={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantsPage;
