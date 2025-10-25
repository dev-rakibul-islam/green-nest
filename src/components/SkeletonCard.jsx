import React from "react";

const SkeletonCard = () => (
  <div className="card w-full bg-base-100/80 border border-base-200/60 rounded-2xl shadow-md animate-pulse overflow-hidden">
    <div className="w-full bg-base-200 aspect-4/3" />
    <div className="card-body p-4">
      <div className="h-5 w-2/3 bg-base-200 rounded" />
      <div className="h-3 w-1/2 bg-base-200 rounded" />
      <div className="flex justify-between items-center mt-3">
        <div className="h-6 w-20 bg-base-200 rounded" />
        <div className="h-8 w-24 bg-base-200 rounded" />
      </div>
    </div>
  </div>
);

export default SkeletonCard;
