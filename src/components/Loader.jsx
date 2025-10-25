import React from "react";

const Loader = ({ fullscreen = false, label = "Loading..." }) => {
  return (
    <div
      className={
        fullscreen
          ? "fixed inset-0 z-50 grid place-items-center bg-base-100/70 backdrop-blur-sm"
          : "w-full min-h-[40vh] flex justify-center items-center py-10"
      }
    >
      <div
        className="flex flex-col items-center gap-4"
        role="status"
        aria-live="polite"
      >
        {/* Spinner */}
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20" />
          <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin [animation-duration:900ms]" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-300 animate-spin [animation-duration:1300ms]" />
        </div>
        {/* Label */}
        <p className="text-sm text-base-content/70">
          <span className="sr-only">{label}</span>
          <span aria-hidden="true" className="inline-flex items-center gap-1">
            {label}
            <span className="inline-block h-1 w-1 rounded-full bg-emerald-500 animate-bounce [animation-duration:900ms]" />
            <span className="inline-block h-1 w-1 rounded-full bg-emerald-400 animate-bounce [animation-duration:1100ms] [animation-delay:150ms]" />
            <span className="inline-block h-1 w-1 rounded-full bg-emerald-300 animate-bounce [animation-duration:1200ms] [animation-delay:300ms]" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
