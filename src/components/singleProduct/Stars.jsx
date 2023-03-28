import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  // console.log(stars);
  const starsArr = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className="stars-container">
      <div className="stars">{starsArr} </div>
      <p>({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
