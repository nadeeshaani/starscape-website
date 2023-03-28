import Colors from "./colors";
import Quantity from "./productQuantity";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddtoCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const [clrIndex, setClrIndex] = useState(0);
  const [amount, setAmount] = useState(1);
  //for toast
  const notify = () =>
    toast.success(`${amount} added to cart`, {
      position: "top-right",
      autoClose: 4000,
      transition: Flip,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const increaseAmount = () => {
    if (amount < product.stock) {
      setAmount(amount + 1);
    }
  };
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const addedProduct = {
    id: product.id,
    color: product.colors[clrIndex],
    idColor: `${product.id}${product.colors[clrIndex]}`,
    name: product.name,
    image: product.images[0].url,
    amount,
    price: product.price,
    subtotal: product.price * amount,
    stock: product.stock,
    category: product.category,
    shipping: product.shipping,
  };
  return (
    <div className=" d-flex-col single-add-to-cart-wrapper">
      <Colors
        colors={product.colors}
        setClrIndex={setClrIndex}
        clrIndex={clrIndex}
      />

      <Quantity
        amount={amount}
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
      />
      <Link
        onClick={() => {
          addToCart(addedProduct);
          notify();
        }}
        className="btn single-adtocart-btn"
      >
        Add to cart
      </Link>
    </div>
  );
};

export default AddtoCart;
