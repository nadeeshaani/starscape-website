import { Categories } from 'components/Category/Categories/Categories';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import categoriesData from 'data/category/category';

export const TopCategories = () => {
  const categories = [...categoriesData].slice(0, 4);
  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className='Categories'>
        <br /><br /><br /><br />
        <SectionTitle 
          subTitle='Our Collection'
          title='Categories'
          body='"Somewhere, something incredible is waiting to be known."'
        />
        <div className='top-categories__items'>
          {<Categories categories={categories} />}
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF   --> */}
    </>
  );
};
