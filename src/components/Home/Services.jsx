import Grid2 from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/system";
import { services } from "../../utils/constants";
const Services = () => {
  return (
    <Wrapper>
      <div className="container ">
        <div className="serv-sec-wrapper ">
          <header style={{ width: "100%" }}>
            <Grid2 container spacing={{ xs: 3, md: 0 }}>
              <Grid2 item md={6}>
                <h3>
                  custom furniture
                  <span className="sec-subtitle" style={{ fontSize: "65%" }}>
                    built only for you{" "}
                  </span>
                </h3>
              </Grid2>
              <Grid2
                item
                md={6}
                alignItems="center"
                justifyContent="center"
                container
              >
                {/* <div className="d-flex p-center"> */}
                <Grid2 item>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque quisquam saepe id reiciendis sunt, repudiandae libero
                    amet rem quia quod?
                  </p>
                  {/* </div> */}
                </Grid2>
              </Grid2>
            </Grid2>
          </header>

          <div className="serv-cards-wrapper">
            <Grid2
              container
              spacing={{ xs: 3, md: 2 }}
              justifyContent={{ xs: "center" }}
            >
              {services &&
                services.map((card, index) => {
                  let { Icon, title, text, id } = card;
                  return (
                    <Grid2 item sm={6} md={4} key={id}>
                      <article className="serv-card">
                        <span className="serv-icon">
                          <Icon />
                        </span>
                        <h4>{title}</h4>
                        <p>{text}</p>
                      </article>
                    </Grid2>
                  );
                })}
            </Grid2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled("section")`
  /* height: 100vh; */
  width: 100%;
  padding: var(--section-padding);
  overflow: hidden;

  .serv-sec-wrapper {
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  .serv-cards-wrapper {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // padding: 4% 0;
    // overflow: hidden;
  }

  .serv-card {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background: var(--p-card);
    padding: 2.5rem 2rem;
    gap: 0.9rem;
    border-radius: var(--radius);
    color: var(--clr-primary-1) !important;
    transition: 0.3s background ease-in-out;
  }

  .serv-card:hover,
  .serc-card:active {
    background: var(--section-bg-1);
    box-shadow: rgb(50 50 105 / 15%) 0px 2px 5px 0px,
      rgb(0 0 0 / 5%) 0px 1px 1px 0px;
    transform-origin: center;
  }
  .serv-card:hover .serv-icon {
    transform: translateY(-100%);
  }
  .serv-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: var(--clr-primary-6);
    color: var(--clr-primary-1) !important;
    display: flex;
    transition: 0.4s all ease-in-out;
    align-items: center;
    justify-content: center;
  }
  .serv-icon svg {
    font-size: 2rem;
  }
  .p-center {
    align-items: center;
    justify-content: center;
  }
  .serv-card p {
    padding: 0.6rem;
    vertical-align: middle;
  }
`;

export default Services;
