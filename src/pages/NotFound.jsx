import React from "react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";

const NotFound = () => (
  <div className="min-h-[70vh] flex items-center justify-center px-4">
    <GlassCard className="max-w-xl w-full p-8 text-center space-y-4">
      <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">
        error 404
      </p>
      <h1 className="text-4xl font-bold">Lost in the greenhouse?</h1>
      <p className="text-base-content/70">
        The page you are trying to reach has been moved, renamed, or no longer
        exists. Let us guide you back to thriving greenery.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/" className="btn bg-[#007C56] text-white">
          Go to homepage
        </Link>
        <Link to="/support" className="btn btn-outline">
          Contact support
        </Link>
      </div>
    </GlassCard>
  </div>
);

export default NotFound;
