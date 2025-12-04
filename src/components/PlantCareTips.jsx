import React from "react";
import { Link } from "react-router-dom";
import {
  Droplets,
  SunMedium,
  Thermometer,
  Leaf,
  Scissors,
  Bug,
  FlaskConical,
  Wind,
} from "lucide-react";

function TipCard({ icon: Icon, title, children, tag }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl shadow-md transition-all duration-300 hover:bg-white/15"
      aria-label={title}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-linear-to-br from-emerald-400/20 to-cyan-400/10 blur-3xl" />
      </div>
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/20">
          {Icon ? <Icon size={22} aria-hidden /> : null}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold tracking-tight text-base-content/90">
            {title}
          </h3>
          {tag ? (
            <span className="mt-1 inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] font-medium text-base-content/70">
              {tag}
            </span>
          ) : null}
        </div>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-base-content/80">
        {children}
      </div>
    </article>
  );
}

const PlantCareTips = () => {
  return (
    <section className="relative mx-auto mb-12 max-w-7xl">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-[100%] bg-linear-to-r from-emerald-500/20 via-cyan-400/20 to-teal-500/20 blur-3xl" />
      </div>

      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content">
          Smart Plant Care, Made Simple
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-base-content/80">
          Quick, science-backed tips to keep your indoor jungle thriving. Learn
          the essentials: water, light, humidity, soil, and more.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/plants"
            className="btn bg-[#007C56] text-white btn-sm normal-case shadow-lg shadow-emerald-900/20"
          >
            Explore plants
          </Link>
          <a
            href="#care-faq"
            className="btn btn-ghost btn-sm normal-case border-base-content/20 text-base-content/90"
          >
            Care FAQ
          </a>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <TipCard icon={Droplets} title="Watering" tag="Weekly-ish">
          <ul className="list-disc space-y-1 pl-4">
            <li>
              Water when the top 2-3cm of soil is dry; don&apos;t follow a rigid
              schedule.
            </li>
            <li>
              Soak thoroughly until excess drains; empty saucers after 10
              minutes.
            </li>
            <li>Reduce frequency 30-50% in winter when growth slows.</li>
          </ul>
          <p className="mt-2 text-xs text-white/70">
            Signs of overwatering: yellowing leaves, mushy stems, fungus gnats.
            Underwatering: curling or crispy edges.
          </p>
        </TipCard>

        <TipCard icon={SunMedium} title="Light" tag="Bright indirect best">
          <ul className="list-disc space-y-1 pl-4">
            <li>
              Most houseplants prefer bright, indirect light near east/north
              windows.
            </li>
            <li>
              Rotate plants weekly for even growth and to prevent leaning.
            </li>
            <li>Use sheer curtains to soften harsh midday sun.</li>
          </ul>
        </TipCard>

        <TipCard icon={Wind} title="Humidity & Airflow" tag="40-60% RH">
          <ul className="list-disc space-y-1 pl-4">
            <li>
              Target 40-60% humidity; bathrooms and kitchens often read higher.
            </li>
            <li>Prefer pebble trays or a humidifier over frequent misting.</li>
            <li>Ensure gentle airflow; avoid cold drafts and hot vents.</li>
          </ul>
        </TipCard>

        <TipCard icon={Leaf} title="Soil & Repotting" tag="Well-draining">
          <ul className="list-disc space-y-1 pl-4">
            <li>Use airy mix: potting soil + perlite + bark for drainage.</li>
            <li>Repot every 12-18 months or when roots circle the pot.</li>
            <li>Choose a pot 2-5cm wider with drainage holes.</li>
          </ul>
        </TipCard>

        <TipCard icon={FlaskConical} title="Fertilizer" tag="Growing season">
          <ul className="list-disc space-y-1 pl-4">
            <li>Feed monthly in spring/summer at 1/4-1/2 strength.</li>
            <li>
              Skip feeding in winter; flush soil occasionally to remove salts.
            </li>
            <li>Look for balanced NPK (e.g., 10-10-10) for foliage plants.</li>
          </ul>
        </TipCard>

        <TipCard
          icon={Scissors}
          title="Pruning & Cleaning"
          tag="Healthy growth"
        >
          <ul className="list-disc space-y-1 pl-4">
            <li>Remove yellow or damaged leaves with sterilized shears.</li>
            <li>Wipe dust from leaves to boost photosynthesis.</li>
            <li>Pinch tips to encourage bushier growth on vining plants.</li>
          </ul>
        </TipCard>

        <TipCard icon={Bug} title="Pests & Problems" tag="Early detection">
          <ul className="list-disc space-y-1 pl-4">
            <li>Common: spider mites, aphids, mealybugs, fungus gnats.</li>
            <li>
              Isolate affected plants; treat with neem or insecticidal soap.
            </li>
            <li>
              Check undersides of leaves weekly; sticky leaves can signal pests.
            </li>
          </ul>
          <p className="mt-2 text-xs text-white/70">
            Quick fix: yellow sticky traps for gnats; increase drying time
            between waterings.
          </p>
        </TipCard>

        <TipCard icon={Thermometer} title="Temperature" tag="18-27C sweet spot">
          <ul className="list-disc space-y-1 pl-4">
            <li>Keep steady temps; avoid sudden swings &gt;5C in a day.</li>
            <li>
              Protect from cold windows in winter; move pots 10-20cm inward.
            </li>
            <li>
              Watch for browning from heat stress near radiators or heaters.
            </li>
          </ul>
        </TipCard>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-green-700/10 p-6 md:grid-cols-3">
        <article className="rounded-2xl border border-white/15 bg-white p-5 text-base-content/90 drop-shadow-md backdrop-blur-xl">
          <h4 className="font-semibold">Quick Care Schedule</h4>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <span className="badge badge-outline badge-sm">
              Water: when dry
            </span>
            <span className="badge badge-outline badge-sm">Feed: monthly</span>
            <span className="badge badge-outline badge-sm">
              Dust: bi-weekly
            </span>
            <span className="badge badge-outline badge-sm">Rotate: weekly</span>
          </div>
        </article>
        <article className="rounded-2xl border border-white/15 bg-white p-5 text-base-content/90 drop-shadow-md backdrop-blur-xl">
          <h4 className="font-semibold">Beginner Proof Picks</h4>
          <p className="mt-2 text-sm text-base-content/80">
            Try Snake Plant, ZZ Plant, or Pothos for low-effort success.
          </p>
          <Link
            to="/plants"
            className="link text-[#007C56] hover:text-[#007C56]/80 text-sm"
          >
            Browse all -&gt;
          </Link>
        </article>
        <article
          id="care-faq"
          className="rounded-2xl border border-white/15 bg-white p-5 text-base-content/90 drop-shadow-md backdrop-blur-xl"
        >
          <h4 className="font-semibold">FAQ</h4>
          <details className="mt-2">
            <summary className="cursor-pointer text-sm">
              How much should I water?
            </summary>
            <p className="mt-1 text-sm text-base-content/75">
              Water by feel, not by calendar. Check soil moisture first.
            </p>
          </details>
          <details className="mt-2">
            <summary className="cursor-pointer text-sm">
              Do I need grow lights?
            </summary>
            <p className="mt-1 text-sm text-base-content/75">
              Optional, but helpful in darker rooms. Use full-spectrum LEDs.
            </p>
          </details>
        </article>
      </div>
    </section>
  );
};

export default PlantCareTips;
