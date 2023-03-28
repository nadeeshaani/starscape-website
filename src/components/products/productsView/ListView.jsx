import Grid2 from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/helpers";
import { styled } from "@mui/system";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      <Grid2
        container
        alignItems="center"
        spacing={{ xs: 2, lg: 3 }}
        direction="column"
      >
        {products &&
          products.map((p) => {
            return (
              <Grid2 key={p.id} item xs={12}>
                <article className="listview-p-card">
                  <figure className="p-card-img-container">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="p-card-list-img"
                    />
                    <div className="list-overlay"></div>
                  </figure>
                  <div className="details">
                    <h5>{p.name} </h5>
                    <div className="featured-p-price">
                      <span> {formatPrice(p.price)} </span>
                    </div>
                    <p>{p.description.substring(0, 150)}...</p>
                    <Link to={`/products/${p.id}`}>Details</Link>
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
  .listview-p-card {
    display: flex;
    background-color: var(--p-card);
  }

  .listview-p-card:hover,
  .listview-p-card:active {
    box-shadow: rgb(50 50 105 / 15%) 0px 2px 5px 0px,
      rgb(0 0 0 / 5%) 0px 1px 1px 0px;
  }
  img {
    height: 22rem;
    min-width: 20rem;
    width: 100%;
    object-fit: cover;
    display: block;
  }
  h5 {
    text-transform: uppercase;
    letter-spacing: 0.4;
  }
  span {
    font-weight: 700;
    letter-spacing: 0.4;
    color: #ab7a5f;
  }
  a {
    margin-top: 1rem;
    text-align: center;
    background-color: var(--txt-clr-2);
    color: var(--nav-bg-clr-light);
    font-weight: 600;
    border-radius: var(--radius);
    padding: 0.6rem 1rem;
    transition: 0.3s all ease-in-out;
  }
  .listview-p-card:hover img {
    transform: scale(1.08);
    transition: 0.6s all ease-in-out;
  }
  .p-card-img-container:hover > .list-overlay {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .details {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding: 5% 4%;
    width: 100%;
    min-height: 4rem;
    background-color: var(--p-card);
  }

  @media screen and (max-width: 720px) {
    img {
      height: auto;
    }
    .listview-p-card {
      flex-direction: column;
    }
    .p-card-list-img {
      width: 100%;
    }
  }
  @media (min-width: 720px) {
    .p-card-list-img {
      width: 26rem !important;
    }
  }
`;
export default ListView;
