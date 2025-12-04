import React from "react";
import GlassCard from "./GlassCard";
import { ArrowRight, Gift, Percent } from "lucide-react";
import { Link } from "react-router-dom";

const SeasonalPromo = () => {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr,2fr] items-center">
      <GlassCard className="p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700">
              <Percent className="h-4 w-4" /> Mid-season offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Refresh your space with bundle savings
            </h2>
            <p className="text-base-content/70">
              Bundle any three indoor plants and get a free soil booster kit.
              Delivery is carbon-neutral inside major cities.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-base-content/70">
              <span className="badge badge-outline">Free repotting</span>
              <span className="badge badge-outline">48h delivery</span>
              <span className="badge badge-outline">Expert care guide</span>
            </div>
          </div>
          <div className="space-y-4 text-center md:text-right">
            <p className="text-sm uppercase tracking-widest text-emerald-500">
              limited slots
            </p>
            <p className="text-5xl font-black text-emerald-600">25% off</p>
            <Link
              to="/plants"
              className="btn bg-[#007C56] text-white btn-wide md:w-auto normal-case inline-flex items-center gap-2"
            >
              Claim bundle
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </GlassCard>
      <GlassCard className="p-6 md:p-8 text-center space-y-4">
        <div className="mx-auto grid place-items-center rounded-2xl bg-emerald-500/15 p-6 w-24 h-24">
          <Gift className="h-10 w-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-semibold">Complimentary gift wrap</h3>
        <p className="text-sm text-base-content/70">
          Sending plants to a friend? We hand-write your note and wrap pots in
          compostable sleeves.
        </p>
        <Link
          to="/support"
          className="link text-[#007C56] hover:text-[#007C56]/80 text-sm"
        >
          {"View delivery FAQs ->"}
        </Link>
      </GlassCard>
    </section>
  );
};

export default SeasonalPromo;
