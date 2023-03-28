import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useProductsContext } from "../context/ProductsContect";
import { single_product_url as url } from "../utils/constants";
import Loading from "../components/shared/Loade";
import Error from "./ErrorPage";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

//single product components
import { Images, Stars, AddToCart } from "../components/singleProduct/index";
import FormatPrice from "../components/products/FormatPrice";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  const navigate = useNavigate();
  const {
    fetchSingleProduct,
    singleProduct: product,
    issingleProductLoading: loading,
    singleProductErr: err,
  } = useProductsContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (err) {
    setTimeout(() => {
      navigate("/");
    }, 1000);
    return <Error />;
  }
  if (loading) return <Loading />;

  ////////////////////////////////

  const {
    id: sku,
    stock,
    price,
    company: brand,
    reviews,
    stars,
    images,
    description,
    name,
  } = product;
  return (
    <main className="sec-wrapper">
      <div className="container">
        <Wrapper className="wrapper">
          <header>
            <Link to="/">Home</Link>/<Link to="/products"> Products</Link>/{" "}
            <span> {name} </span>
          </header>
          <Grid2 container gap={{ xs: 4, md: 5 }}>
            <Grid2 item xs={12} md={5}>
              <Images images={images} />
            </Grid2>
            <Grid2 item md={6}>
              <div className="product-content">
                <h2>{name}</h2>
                <Stars reviews={reviews} stars={stars} />
                <FormatPrice price={price} />
                <p className="product-desc ">{description} </p>
                <p className="product-available p-info">
                  <span>Available:</span>
                  {stock > 0 ? "in stock" : "out of stock"}
                </p>
                <p className="product-sku p-info">
                  <span>SKU:</span>
                  {sku}
                </p>
                <p className="product-brand p-info">
                  <span>Brand:</span>
                  {brand}
                </p>
                {stock > 0 ? (
                  <AddToCart product={product} />
                ) : (
                  <span className="out-of-stock"> out of stock </span>
                )}
              </div>
            </Grid2>
          </Grid2>
        </Wrapper>
      </div>
    </main>
  );
};
const Wrapper = styled("section")`
  header {
    padding: 2% 0;
    display: flex;
    gap: 0.2rem;
    align-items: center;
    font-size: 1.2rem;
    text-transform: capitalize;
    a {
      color: var(--txt-clr-4);
      text-decoration: none;
      transition: color 0.3s ease-in-out;
    }

    a:hover {
      color: var(--txt-clr-1);
    }

    span {
      font-weight: 600;
    }
  }
  .product-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .product-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  /*============================IMAGES COMPONENT===============================*/

  .main {
    height: 30em;
  }

  .single-images-wrapper img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  .img-gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
  }
  .img-gallery > img {
    height: 100px;
    cursor: pointer;
  }

  .active {
    filter: grayscale(1);
  }
  .product-content h2 {
    color: var(--txt-clr-1);
  }

  /*============================Stars COMPONENT===============================*/
  .stars-container {
    margin: 1% 0;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .stars span {
    color: rgb(255, 185, 0);
    font-size: 1rem;
    margin-right: 0.25rem;
  }

  .product-price {
    color: var(--txt-clr-2-light);
    margin: 1% 0;
  }

  .product-desc {
    margin-bottom: 1.25rem;
    max-width: 45em;
    line-height: 2;
  }

  .product-available span,
  .product-sku span,
  .product-brand span {
    font-weight: 700;
  }

  .p-info {
    display: grid;
    grid-template-columns: 10rem 1fr;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  /*============================colors COMPONENT===============================*/
  .colors-wrapper {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  .product-clr-op {
    border-radius: 50%;
    width: 1.5rem;
    cursor: pointer;
    height: 1.5rem;
    background-color: rgba(0.2);

    position: relative;
  }
  .clr-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .clr-checked {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
  }
  /*===============================QUANTITY COMPONENT===================================*/
  .single-product-quantity {
    display: flex;
    align-items: center;
    gap: 1rem;
    /* margin-bottom: 2%; */
  }
  .single-product-quantity div {
    padding: 1% 2%;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
  }
  .single-product-quantity button {
    font-weight: 600 !important;
    color: var(--txt-clr-2) !important;
  }
  .single-product-quantity svg {
    vertical-align: middle;
  }
  .single-adtocart-btn {
    background-color: var(--txt-clr-2);
    /* margin: 2% 0; */
  }
  .single-add-to-cart-wrapper {
    gap: 1rem;
  }

  .out-of-stock {
    margin: 5% 0;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    line-height: 1.5;
    color: var(--txt-alert);
    font-size: 1.2rem;
  }
`;
export default SingleProduct;
