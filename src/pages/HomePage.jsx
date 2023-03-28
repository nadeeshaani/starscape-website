import Services from "../components/Home/Services";
import "./home.css";
import Intro from "../components/Home/Intro";
import NewsLetter from "../components/Home/NewsLetter";
import React from "react";

import Products from "../components/Home/ProductsSlider";
const Home = () => {
  return (
    <>
      <Intro />
      <Products />
      <Services />
      <NewsLetter />
    </>
  );
};

export default Home;
