import React from "react";
const GlassCard = ({ className = "", children, shine = true }) => {
  return (
    <div
      className={
        `group relative isolate overflow-hidden rounded-2xl border border-white/15 ` +
        `bg-white/10 dark:bg-slate-900/30 backdrop-blur-xl ` +
        `shadow-md ring-1 ring-white/10 ` +
        `transition-all duration-300 hover:border-white/25 ${className}`
      }
    >
      <div className="pointer-events-none absolute inset-px rounded-[15px] bg-linear-to-br from-white/10 via-white/5 to-transparent"></div>
      {shine && <div className="shine absolute inset-0"></div>}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
