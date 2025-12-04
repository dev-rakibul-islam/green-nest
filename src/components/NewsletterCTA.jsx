import React, { useState } from "react";
import GlassCard from "./GlassCard";
import { MailCheck, Check } from "lucide-react";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setEmail("");
  };

  return (
    <GlassCard className="p-6 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
            newsletter
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            Weekly plant care checklist + exclusive drops
          </h2>
          <p className="mt-2 text-base-content/70">
            Get watering reminders, propagation ideas, and early access to rare
            collections. No spam-just plant joy.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col sm:flex-row gap-3"
          >
            <label className="flex-1">
              <span className="sr-only">Email address</span>
              <div className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-white/80 px-4 py-2">
                <MailCheck className="h-4 w-4 text-emerald-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
            </label>
            <button className="btn bg-[#007C56] text-white min-w-[140px]">
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-600">
              <Check className="h-4 w-4" />
              Thanks! Watch your inbox on Sundays.
            </p>
          )}
        </div>
        <div className="rounded-3xl bg-linear-to-br from-emerald-600 to-teal-500 text-white p-6 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80">
            why join?
          </p>
          <ul className="space-y-3 text-sm list-disc list-inside">
            <li>Friday deals on slow-release fertilizer</li>
            <li>Access to community workshops</li>
            <li>Seasonal repotting checklists</li>
          </ul>
          <p className="text-xs text-white/70">
            You can unsubscribe anytime. We never sell your data.
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default NewsletterCTA;
