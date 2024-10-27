import React from "react";
import MainHeroSection from "../../components/home-page-components/MainHeroSection";
import Navbar from "../../components/Navbar";
import CategoriesSection from "../../components/home-page-components/CategoriesSection";
import TopProductsSection from "../../components/home-page-components/TopProductsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainHeroSection />
      <CategoriesSection />
      <TopProductsSection />
    </>
  );
}
