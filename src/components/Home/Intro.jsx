import { Link } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

import introbg from "../../assets/intro-hero.jpg";
import placeholder from "../../assets/intro-hero-placeholder.jpg";
import { useState } from "react";
const Intro = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <section
      className=" sec-wrapper intro-sec"
      style={{
        backgroundImage: isLoaded ? `url(${introbg})` : `url(${placeholder})`,
      }}
    >
      <img
        src={introbg}
        alt="hero"
        onLoad={() => setIsLoaded(true)}
        style={{ display: "none" }}
      />
      <div className="container">
        <div className=" wrapper ">
          <div className="intro-overlay"></div>
          <div className="intro-title-wrapper ">
            <h1>
              Good Living
              <span>
                Better <span>Live</span>
              </span>
            </h1>
            <p>Find your way to the good living with our furniture</p>
            <Link className="btn shop-btn" to="/products">
              shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
