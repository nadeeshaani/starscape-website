import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCartContext } from "../../context/CartContext";
const ProductAmount = ({ amount, increaseAmount, decreaseAmount }) => {
  return (
    <div className="single-product-quantity">
      <button onClick={decreaseAmount}>
        <AiOutlineMinus />
      </button>
      <div> {amount}</div>
      <button onClick={increaseAmount}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default ProductAmount;
