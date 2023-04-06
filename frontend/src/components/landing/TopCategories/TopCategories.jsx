import { Categories } from 'components/Category/Categories/Categories';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import categoriesData from 'data/category/category';

export const TopCategories = () => {
  const categories = [...categoriesData].slice(0, 3);
  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className='top-categories'>
        <SectionTitle
          subTitle='Popular collections'
          title='top categories'
          body='Fly across the universe by just keeping your feet on the ground.'
        />
        <div className='top-categories__items'>
          {<Categories categories={categories} />}
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF   --> */}
    </>
  );
};
