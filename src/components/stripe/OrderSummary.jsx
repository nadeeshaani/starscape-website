import { useCartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/helpers";
import { styled } from "@mui/system";
const OrderSummary = () => {
  const { cart, totalPrice, shipping_fee } = useCartContext();
  console.log(cart);
  return (
    <Wrapper>
      <header>
        <h5>order summary</h5>
      </header>

      <div className="order-wrapper">
        {cart &&
          cart.map((item) => {
            return (
              <div className="d-flex-col order-item-container" key={item.id}>
                <article className="d-flex ">
                  <img src={item.image} alt={item.name} className="order-img" />
                  <div className="order-item-info">
                    <h6>{item.name}</h6>
                    <p className="d-flex">
                      <span>color:</span>
                      <span
                        className="order-item-clr"
                        style={{ backgroundColor: item.color }}
                      ></span>
                    </p>
                    <div className="order-item-price">
                      <p> {formatPrice(item.price)} </p>
                      <span>
                        <small>{" x"} </small>
                        <strong>{item.amount}</strong>
                      </span>
                    </div>
                  </div>
                </article>
                <hr />
              </div>
            );
          })}
        <div>
          <div className="reatil-price">
            <span>retail price</span>
            <h5> {formatPrice(totalPrice)}</h5>
          </div>
          <div className="shipping-fee">
            <span>Shipping fees</span>
            <h5> {formatPrice(shipping_fee)}</h5>
          </div>

          <hr className="p-bottom-border " />

          <div className="order-total">
            <span>order total</span>
            <h5> {formatPrice(shipping_fee + totalPrice)}</h5>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("aside")`
  header {
    margin-bottom: 1rem;
  }
  .order-wrapper {
    border-radius: 7px;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .order-item-container {
    gap: 2rem;
  }
  .order-item-container > article {
    padding: 2%;
    gap: 2rem;
  }

  .order-item-info {
    align-self: flex-start;
  }
  .order-item-info p {
    gap: 0.5rem;
    align-items: center;
    margin: 0.5rem 0;
  }
  .order-item-price p {
    display: inline-block;
  }
  .order-item-info p span {
    color: var(--clr-grey-8);
    font-weight: 500;
    text-transform: capitalize;
  }

  .order-item-clr {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    display: inline-block;
    vertical-align: middle;
  }
  .order-img {
    width: 100px;
    min-width: 100px;
    height: 80px;
    min-height: 80px;
  }
`;

export default OrderSummary;
