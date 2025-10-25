import React, { useEffect, useState } from "react";
import LazyImage from "../components/LazyImage";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/data/plants.json");
        const data = await res.json();
        if (!cancelled) {
          const found = data.find((p) => String(p.plantId) === String(id));
          setPlant(found || null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => (cancelled = true);
  }, [id]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!plant) return <div className="p-4">Plant not found.</div>;

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Booking successful! Our expert will contact you soon.");
    setForm({ name: "", email: "" });
    toast.success("Booking successful! Our expert will contact you soon.");
  };

  return (
    <div className="relative mt-5">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950" />
        <LazyImage
          src={plant.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25 blur-xl"
          onError={(e) => {
            // If background fails, hide it silently
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-white/20 dark:from-slate-900/60 dark:to-slate-900/40" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-28">
        <div className="group relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-0 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl dark:border-white/15 dark:bg-slate-800/40">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent opacity-70" />
          <div className="shine absolute inset-0" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative bg-linear-to-b from-white/20 to-white/5 dark:from-slate-900/20 dark:to-slate-900/10">
              <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-teal-400/20 blur-2xl" />

              <div className="relative flex aspect-4/3 items-center justify-center p-6 md:aspect-auto">
                <LazyImage
                  src={plant.image}
                  alt={plant.plantName}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_10px_30px_rgba(16,185,129,0.25)] rounded-2xl"
                  fallback="/images/plant-placeholder.svg"
                />
              </div>
            </div>

            <div className="relative p-6 sm:p-8 md:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {plant.category && (
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md dark:text-slate-200">
                    {plant.category}
                  </span>
                )}
                {plant.careLevel && (
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md dark:text-slate-200">
                    {plant.careLevel}
                  </span>
                )}
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm dark:text-white sm:text-3xl">
                {plant.plantName}
              </h1>
              {plant.shortDescription || plant.description ? (
                <p className="mt-3 text-sm leading-relaxed text-slate-700/90 dark:text-slate-200/90">
                  {plant.shortDescription || plant.description}
                </p>
              ) : null}

              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md dark:bg-white/5">
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    Price
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    ${plant.price ?? "-"}
                  </div>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md dark:bg-white/5">
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    Rating
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {plant.rating ?? "-"}
                  </div>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md dark:bg-white/5">
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    Stock
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {plant.availableStock ?? "-"}
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-inner backdrop-blur-xl sm:p-5">
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                  Book Consultation
                </h3>
                {message && (
                  <div className="mb-2 text-sm text-emerald-600 dark:text-emerald-400">
                    {message}
                  </div>
                )}
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                >
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="col-span-1 rounded-xl border border-white/25 bg-white/20 px-4 py-2 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/30 dark:bg-white/10 dark:text-white"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="col-span-1 rounded-xl border border-white/25 bg-white/20 px-4 py-2 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/30 dark:bg-white/10 dark:text-white"
                    required
                  />
                  <button className="col-span-1 sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-white shadow-[0_6px_20px_rgba(16,185,129,0.45)] transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
                    Book Now
                  </button>
                </form>
              </div>
              {plant.description && (
                <div className="mt-6 text-sm leading-relaxed text-slate-700/90 dark:text-slate-200/90">
                  {plant.description}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
