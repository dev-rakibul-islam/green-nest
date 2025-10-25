import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
    <h1 className="text-4xl font-bold mb-2">404</h1>
    <p className="text-gray-600 mb-4">
      The page you’re looking for doesn’t exist.
    </p>
    <Link to="/" className="btn">
      Go Home
    </Link>
  </div>
);

export default NotFound;
