import { Link } from "react-router-dom";
import Loader from "../shared/Loade";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useProductsContext } from "../../context/ProductsContect";
import { formatPrice } from "../../utils/helpers";

// //SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swiperCustom.css";

const ProductsSlider = () => {
  const { feturedProducts: products, isProductsLoading: Loading } =
    useProductsContext();
  return (
    <section className="featured-products-section sec-wrapper">
      <div className="container">
        <div className="featured-products-wrapper">
          <header>
            <Grid2 container spacing={{ xs: 3, md: 0 }}>
              <Grid2 item md={6}>
                <h3>
                  Featured Products
                  <span className="sec-subtitle" style={{ fontSize: "65%" }}>
                    Top Picks of the Season
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
          {products.length < 1 ? (
            <Loader />
          ) : (
            <article className="featured-products-slider-wrapper">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={70}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                breakpoints={{
                  650: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  800: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {products.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                      <article className="featured-p-card">
                        <Link to={`products/${product.id}`}>
                          <div className="p-card-img-container">
                            <img src={product.image} />
                            <div className="d-flex-row-center featured-p-overlay"></div>
                          </div>
                        </Link>

                        <div className="featured-p-details">
                          <h6>{product.name} </h6>
                          <div className="featured-p-price">
                            <strong> {formatPrice(product.price)} </strong>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </article>
          )}

          <Link to="products" className="btn featured-btn">
            all products
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ProductsSlider;
