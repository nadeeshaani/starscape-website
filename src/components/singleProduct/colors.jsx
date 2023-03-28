import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const ProductColors = ({ colors, clrIndex, setClrIndex }) => {
  // const [clrIndex, setClrIndex] = useState(0);
  const handleColor = (index) => {
    setClrIndex(index);
  };
  const isMAtched = (index1, index2) => {
    return index1 === index2;
  };
  return (
    <div className="colors-wrapper">
      {colors &&
        colors.map((clr, index) => {
          return (
            <div
              key={index}
              className="product-clr-op"
              style={{ backgroundColor: `${clr}` }}
              onClick={() => handleColor(index)}
            >
              <div
                className={
                  isMAtched(clrIndex, index) ? "clr-checked" : "clr-overlay"
                }
              >
                {isMAtched(clrIndex, index) ? <BsCheckLg /> : ""}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductColors;
