import { Card } from './Card/Card';

export const Categories = ({ categories }) => {
  return (
    <>
      {/* <!-- BEGIN  CATEGORIES --> */}
      {categories.map((category) => (
        <Card key={category.categoryId} category={category} />
      ))}
      {/* <!--  CATEGORIES EOF   --> */}
    </>
  );
};
