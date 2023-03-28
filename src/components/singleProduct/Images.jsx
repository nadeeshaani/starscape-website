import { useState } from "react";
const Images = ({ images = [{ url: "" }] }) => {
  // console.log(images);
  const [mainImg, setMainImg] = useState(images[0]);
  const handleGallery = (index) => {
    // console.log(index);
    setMainImg(images[index]);
  };
  return (
    <section className="single-images-wrapper">
      <img src={mainImg?.url} className="main" />
      <div className="img-gallery">
        {images.map((img, index) => {
          return (
            <img
              src={img?.url}
              key={index}
              className={img.url === mainImg.url ? "active" : ""}
              onClick={() => handleGallery(index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Images;
