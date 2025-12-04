import React, { useMemo, useState } from "react";
import usePlants from "../hooks/usePlants";
import { Link } from "react-router-dom";
import SkeletonCard from "../components/SkeletonCard";
import LazyImage from "../components/LazyImage";

const PlantGlassCard = ({ plant }) => {
  return (
    <div className="card bg-white/90 dark:bg-base-100 shadow-xl h-full flex flex-col border border-primary/20 transition-shadow duration-300 hover:shadow-2xl group">
      <figure className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden bg-linear-to-br from-primary/5 to-secondary/5">
        <LazyImage
          src={plant.image}
          alt={plant.plantName || "Plant image"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          fallback="/images/plant-placeholder.svg"
        />
        {plant.category && (
          <div className="absolute top-3 left-3">
            <div className="badge bg-white/50 text-xs font-semibold px-3 py-2">
              {plant.category}
            </div>
          </div>
        )}
      </figure>
      <div className="card-body flex flex-col flex-1 p-4 sm:p-5 md:p-6">
        <h2 className="card-title text-[#007C56] text-lg sm:text-xl line-clamp-2 gap-2 flex-wrap">
          {plant.plantName}
        </h2>
        <p className="text-sm text-base-content/70 line-clamp-2 flex-1">
          {plant.shortDescription || plant.description}
        </p>
        <div className="card-actions flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 w-full">
            {plant.careLevel && (
              <div className="badge text-[#007C56] text-xs font-medium">
                {plant.careLevel}
              </div>
            )}
            <div className="badge text-[#007C56] text-xs font-semibold">
              ${plant.price}
            </div>
            {plant.rating && (
              <div className="badge badge-secondary/20 text-secondary text-xs font-medium">
                ★ {Number(plant.rating).toFixed(1)}
              </div>
            )}
          </div>
          <Link
            to={`/plants/${plant.plantId}`}
            aria-label={`View details for ${plant.plantName}`}
            className="btn bg-[#007C56] text-white w-full btn-sm shadow-inner shadow-black/20 hover:bg-[#007C56]/90 normal-case"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

const PlantsPage = () => {
  const { plants, loading, error } = usePlants();
  const [sortOrder, setSortOrder] = useState("featured");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [careFilter, setCareFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(() => {
    return Array.from(new Set(plants.map((p) => p.category))).filter(Boolean);
  }, [plants]);

  const careLevels = useMemo(() => {
    return Array.from(new Set(plants.map((p) => p.careLevel))).filter(Boolean);
  }, [plants]);

  const filteredPlants = useMemo(() => {
    let cloned = plants.slice();

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      cloned = cloned.filter(
        (p) =>
          p.plantName.toLowerCase().includes(term) ||
          (p.description || "").toLowerCase().includes(term)
      );
    }

    if (categoryFilter !== "all") {
      cloned = cloned.filter((p) => p.category === categoryFilter);
    }

    if (careFilter !== "all") {
      cloned = cloned.filter((p) => p.careLevel === careFilter);
    }

    cloned.sort((a, b) => {
      switch (sortOrder) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return b.rating - a.rating;
        case "rating-asc":
          return a.rating - b.rating;
        default:
          return b.rating - a.rating;
      }
    });

    return cloned;
  }, [plants, categoryFilter, careFilter, sortOrder, searchTerm]);

  return (
    <section className="relative min-h-[70vh]  py-10 md:py-16 lg:py-20 space-y-8 mx-auto w-11/12 max-w-7xl">
      <div className="container mx-auto px-4 md:px-8 ">
        <div className="mb-8 flex flex-col gap-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#007C56] tracking-tight">
            All Items
          </h1>
          <p className="text-base-content/70 text-sm md:text-base max-w-2xl mx-auto">
            Compare categories, filter by care level, and sort to find the next
            plant that matches your routine.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100/60 bg-white/80 p-4 shadow-sm backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <label className="form-control w-full">
              <span className="label-text text-xs uppercase tracking-wide text-emerald-500">
                Search
              </span>
              <input
                type="search"
                className="input input-bordered"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text text-xs uppercase tracking-wide text-emerald-500">
                Category
              </span>
              <select
                className="select select-bordered"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full">
              <span className="label-text text-xs uppercase tracking-wide text-emerald-500">
                Care level
              </span>
              <select
                className="select select-bordered"
                value={careFilter}
                onChange={(e) => setCareFilter(e.target.value)}
              >
                <option value="all">All</option>
                {careLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full">
              <span className="label-text text-xs uppercase tracking-wide text-emerald-500">
                Sort By
              </span>
              <select
                className="select select-bordered"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="featured">Top rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: High to Low</option>
                <option value="rating-asc">Rating: Low to High</option>
              </select>
            </label>
          </div>
          <div className="mt-3 flex flex-wrap justify-between gap-3 text-xs text-base-content/60">
            <span>
              Showing {filteredPlants.length} of {plants.length} items
            </span>
            <button
              type="button"
              className="link text-[#007C56] hover:text-[#007C56]/80"
              onClick={() => {
                setSortOrder("featured");
                setCategoryFilter("all");
                setCareFilter("all");
                setSearchTerm("");
              }}
            >
              Reset filters
            </button>
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

        {!loading && !error && filteredPlants.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-emerald-200 bg-white/80 p-8 text-center">
            <p className="font-semibold">No matches yet</p>
            <p className="text-sm text-base-content/70">
              Try switching the filters or searching for a different plant.
            </p>
          </div>
        )}

        {!loading && !error && filteredPlants.length > 0 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {filteredPlants.map((p) => (
              <PlantGlassCard key={p.plantId} plant={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlantsPage;
