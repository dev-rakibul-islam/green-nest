import React from "react";

import Hero from "../components/Hero";
import Experts from "../components/Experts";
import PlantOfTheWeek from "../components/PlantOfTheWeek";
import TopRated from "../components/TopRated";
import PlantCareTips from "../components/PlantCareTips";
import CategoriesShowcase from "../components/CategoriesShowcase";
import SeasonalPromo from "../components/SeasonalPromo";
import CommunityStories from "../components/CommunityStories";
import NewsletterCTA from "../components/NewsletterCTA";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto w-11/12 max-w-6xl px-4 md:px-8 mt-10 mb-16 space-y-16">
        <CategoriesShowcase />
        <PlantOfTheWeek />
        <TopRated />
        <SeasonalPromo />
        <PlantCareTips />
        <CommunityStories />
        <Experts />
        <NewsletterCTA />
      </div>
    </div>
  );
};

export default HomePage;
