import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-50 via-white to-emerald-50/40 text-slate-900">
      <NavBar />
      <main className="pb-16 pt-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
