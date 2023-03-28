import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";
import "./cart.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { formatPrice } from "../utils/helpers";
import EmptyCart from "../components/Cart/emptyCart";
const Cart = () => {
  const {
    cart,
    toggleAmount,
    totalPrice,
    shipping_fee: shipping,
  } = useCartContext();

  const increaseAmount = (id) => {
    toggleAmount(id, "INCREMENT");
  };
  const decreaseAmount = (id) => {
    toggleAmount(id, "DECREMENT");
  };

  // empty cart
  if (cart && cart.length < 1) return <EmptyCart />;
  // cart
  return (
    <main className="sec-wrapper cart-pg-wrapper ">
      <div className="container">
        <Grid2
          container
          spacing={{ xs: 3, sm: 1, md: 2 }}
          padding="0"
          direction={{ xs: "column", sm: "column", md: "row" }}
          paddingBottom={6}
        >
          <Grid2 item md={8}>
            <div className="cart-list-wrapper">
              <Grid2
                container
                spacing={{ xs: 1, sm: 2 }}
                direction="column"
                padding={0}
              >
                {cart &&
                  cart.map((product) => {
                    return (
                      <Grid2
                        item
                        xs={12}
                        key={product.id}
                        paddingY={2}
                        alignItems="center"
                        // style={{ background: "red" }}
                        container
                      >
                        {/* image */}
                        <Grid2 item xs={2} lg={2}>
                          <Link to={`/products/${product.id}`}>
                            <img
                              src={product.image}
                              className="p-img-cart"
                              alt={product.name}
                            />
                          </Link>
                        </Grid2>
                        {/* name */}
                        <Grid2 item xs={5} sm={3} md={4}>
                          <div className="p-title-cart">
                            <h6>{product.name}</h6>
                            <p>
                              {"color: "}
                              <span
                                style={{ background: product.color }}
                              ></span>
                            </p>
                          </div>
                        </Grid2>
                        {/* amount */}
                        <Grid2 item xs={3}>
                          <div className="p-amount-container">
                            <div className="p-amount">
                              <button
                                onClick={() => decreaseAmount(product.idColor)}
                              >
                                <AiOutlineMinus />
                              </button>
                              <span>{product.amount} </span>
                              <button
                                onClick={() => increaseAmount(product.idColor)}
                              >
                                <AiOutlinePlus />
                              </button>
                            </div>
                          </div>
                        </Grid2>
                        {/* subtotal */}
                        <Grid2 item xs={2}>
                          <small className="p-subtotal">
                            {formatPrice(product.price * product.amount)}
                          </small>
                        </Grid2>

                        <hr className="p-bottom-border" />
                      </Grid2>
                    );
                  })}
              </Grid2>
            </div>
          </Grid2>

          {/* TOTAL */}
          <Grid2 item md={4} justifyContent={"center"} justifyItems={"center"}>
            <aside className="cart-price-details">
              <div className="reatil-price">
                <span>retail price</span>
                <h5> {formatPrice(totalPrice)}</h5>
              </div>
              <div className="shipping-fee">
                <span>Shipping fees</span>
                <h5> {formatPrice(shipping)}</h5>
              </div>

              <hr className="p-bottom-border " />

              <div className="order-total">
                <span>order total</span>
                <h5> {formatPrice(shipping + totalPrice)}</h5>
              </div>

              <Link to="/checkout" className="btn  checkout-btn">
                to checkout
              </Link>
            </aside>
          </Grid2>
        </Grid2>
      </div>
    </main>
  );
};

export default Cart;
