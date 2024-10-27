import React, { useEffect } from "react";
import MainHeroSection from "../../components/home-page-components/MainHeroSection";
import Navbar from "../../components/Navbar";
import CategoriesSection from "../../components/home-page-components/CategoriesSection";
import TopProductsSection from "../../components/home-page-components/TopProductsSection";
import { useDispatch, useSelector } from "react-redux";
import { getHomeProducts } from "../../store/frontendSlice";

export default function HomePage() {

  const dispatch = useDispatch();
  const { loading, message, error, data, statusCode } = useSelector(
    (state) => state.frontend
  );

  useEffect(() => {
    dispatch(getHomeProducts());
  }, []);


  return (
    <>
      <MainHeroSection />
      <CategoriesSection />
      <TopProductsSection homeData={data?.data?.body} />
    </>
  );
}
