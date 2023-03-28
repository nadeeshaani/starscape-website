import EmptyCart from "../components/Cart/emptyCart";
import CheckOutForm from "../components/stripe/CheckOutFormWrapper";
import { useCartContext } from "../context/CartContext";
// import "../components/stripe/checkout.css";
const CheckOut = () => {
  const { cart } = useCartContext();

  return (
    <main>{cart && cart.length < 1 ? <EmptyCart /> : <CheckOutForm />}</main>
  );
};

export default CheckOut;
