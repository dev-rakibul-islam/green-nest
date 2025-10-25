import React from "react";
import GlassCard from "../components/GlassCard";

const Privacy = () => (
  <div className="relative mx-auto max-w-4xl px-4 py-10 mt-0">
    <div className="pointer-events-none absolute -top-24 -left-10 size-72 rounded-full bg-emerald-400/25 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-16 -right-10 size-80 rounded-full bg-teal-400/20 blur-3xl" />

    <div className="mb-6 text-center">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-400 via-teal-300 to-emerald-500">
        Privacy Policy
      </h1>
      <p className="text-sm opacity-80 mt-1">Your data, your control.</p>
    </div>

    <GlassCard className="p-6 md:p-8">
      <div className="prose prose-invert max-w-none">
        <p>
          We value your privacy. This demo application only uses Firebase
          Authentication to manage sign-in and does not store personal data
          beyond what Firebase maintains for authentication purposes.
        </p>
        <ul>
          <li>No third-party tracking pixels.</li>
          <li>No marketing emails.</li>
          <li>
            Only minimal analytics (anonymous usage) if enabled by your browser.
          </li>
        </ul>
        <p>
          You may request account deletion at any time by contacting support.
        </p>
      </div>
    </GlassCard>
  </div>
);

export default Privacy;
