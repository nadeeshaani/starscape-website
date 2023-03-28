import { formatPrice } from "../../utils/helpers";
const FormatPrice = ({ price }) => {
  return <h5 className="product-price">{formatPrice(price)}</h5>;
};

export default FormatPrice;
