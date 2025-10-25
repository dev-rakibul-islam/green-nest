import React from "react";

import Hero from "../components/Hero";
import Experts from "../components/Experts";
import PlantOfTheWeek from "../components/PlantOfTheWeek";

import TopRated from "../components/TopRated";
import PlantCareTips from "../components/PlantCareTips";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 md:px-8 mt-10 mb-16 space-y-16">
        <PlantOfTheWeek />
        <TopRated />
        <PlantCareTips />
        <Experts />
      </div>
    </div>
  );
};

export default HomePage;
