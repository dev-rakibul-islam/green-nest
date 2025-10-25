import React from "react";
import GlassCard from "../components/GlassCard";

const About = () => (
  <div className="relative mx-auto max-w-5xl px-4 py-10 mt-0">
    <div className="pointer-events-none absolute -top-24 -left-10 size-72 rounded-full bg-emerald-400/25 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-16 -right-10 size-80 rounded-full bg-teal-400/20 blur-3xl" />

    <div className="mb-6 text-center">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-400 via-teal-300 to-emerald-500">
        About GreenNest
      </h1>
      <p className="text-sm opacity-80 mt-1">
        A calm space to learn, care, and thrive with plants.
      </p>
    </div>

    <GlassCard className="p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 space-y-4">
          <p>
            GreenNest helps you care for indoor plants with easy guides, weekly
            tips, and hand-picked products. Whether you&apos;re a beginner or a
            seasoned plant parent, we make it simple to keep your greens happy.
          </p>
          <p>
            Book 1:1 expert consultations, explore care routines, and discover
            plants tailored to your space and lifestyle.
          </p>
        </div>
        <div className="space-y-3">
          <div className="stats shadow bg-white/5 backdrop-blur-md">
            <div className="stat">
              <div className="stat-title">Active users</div>
              <div className="stat-value">8K+</div>
              <div className="stat-desc">growing every week</div>
            </div>
          </div>
          <div className="stats shadow bg-white/5 backdrop-blur-md">
            <div className="stat">
              <div className="stat-title">Care guides</div>
              <div className="stat-value">120+</div>
              <div className="stat-desc">and counting</div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  </div>
);

export default About;
