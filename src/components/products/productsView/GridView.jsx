import Grid2 from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/helpers";
import { styled } from "@mui/system";
const GridView = ({ products }) => {
  return (
    <Wrapper>
      <Grid2
        container
        justifyContent={{ xs: "center", md: "flex-start" }}
        alignItems="center"
        spacing={{ xs: 2, lg: 3 }}
      >
        {products &&
          products.map((p) => {
            return (
              <Grid2 item xs={12} sm={6} md={4} key={p.id}>
                <article className="grid-p-card">
                  <Link to={`/products/${p.id}`}>
                    <figure className="p-img-container">
                      <img src={p.image} alt={p.name} loading="lazy" />
                    </figure>
                  </Link>
                  <div className="ps-details">
                    <h6>{p.name} </h6>
                    <span> {formatPrice(p.price)} </span>
                  </div>
                </article>
              </Grid2>
            );
          })}
      </Grid2>
    </Wrapper>
  );
};
const Wrapper = styled("section")`
  .products-wrapper {
    min-height: 100vh;
  }
  /* GRID VIEW*/
  .grid-p-card {
    background-color: var(--p-card);
    overflow: hidden;
  }

  .grid-p-card:hover {
    box-shadow: rgb(50 50 105 / 15%) 0px 2px 5px 0px,
      rgb(0 0 0 / 5%) 0px 1px 1px 0px;
  }
  .p-img-container {
    overflow: hidden;
  }
  .grid-p-card:hover img {
    transform: scale(1.1);
  }

  .grid-p-card img {
    height: 22rem;
    min-width: 20rem;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
    transition: 0.6s all ease-in-out;
  }
  .ps-details {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
    padding: 5% 4%;
    width: 100%;
    min-height: 4rem;
    background-color: var(--p-card);
  }
  .ps-details h6 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4;
  }
  .ps-details span {
    font-weight: 700;
    letter-spacing: 0.4;
    color: #ab7a5f;
  }
`;
export default GridView;
