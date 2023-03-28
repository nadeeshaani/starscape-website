import about from "../assets/hero-bcg.jpeg";
import bg from "../assets/aboutBG.jpg";
import placeHolder from "../assets/About_placeHolder.jpg";
import Loader from "../components/shared/Loade";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";
const About = () => {
  if (!bg) return <Loader />;
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <main className="about-sec">
      <header
        className="about-header"
        style={{
          backgroundImage: imageLoaded ? `url(${bg})` : `url(${placeHolder})`,
        }}
      >
        <img
          src={bg}
          alt="d"
          onLoad={() => setImageLoaded(true)}
          style={{ display: "none" }}
        />
        <div className="abt-overlay">
          <h2>About us</h2>
          <hr className="title-header-underline" />
        </div>
      </header>

      {/* CONTENT  */}
      <article className="about-content">
        <div className="container">
          <Grid2 container padding={0}>
            <Grid2
              item
              xs={12}
              md={6}
              container
              justifyContent={{ xs: "center", md: "stretch" }}
            >
              <img src={about} alt="our latest work" />
            </Grid2>

            <Grid2
              item
              xs={12}
              md={6}
              padding={{ xs: 0, md: 3 }}
              paddingY={{ xs: 2 }}
            >
              <article className="abt-story-content">
                <div className="about-sec2-title">
                  <h3>our story</h3>
                  <hr className="underline" />
                </div>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat accusantium sapiente tempora sed dolore esse deserunt
                  eaque excepturi, delectus error accusamus vel eligendi, omnis
                  beatae. Quisquam, dicta. Eos quod quisquam esse recusandae
                  vitae neque dolore, obcaecati incidunt sequi blanditiis est
                  exercitationem molestiae delectus saepe odio eligendi modi
                  porro eaque in libero minus unde sapiente consectetur
                  architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
                  nisi, eum totam velit saepe sed quos similique amet. Ex,
                  voluptate accusamus nesciunt totam vitae esse iste.
                </p>
              </article>
            </Grid2>
          </Grid2>
        </div>
      </article>
    </main>
  );
};

export default About;
