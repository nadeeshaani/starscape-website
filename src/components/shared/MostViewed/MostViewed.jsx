import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';

export const MostViewed = ({ additionalClass }) => {
  const mostViewed = [...productData].slice(0, 6);

  return (
    <>
      {/* <!-- BEGIN MOST VIEWED --> */}
      <section className={`arrivals ${additionalClass ? additionalClass : ''}`}>
        <SectionTitle
          subTitle='Cosmetics'
          title='You Have Viewed'
          body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
        />

        <div className='products-items'>
          <ProductsCarousel products={mostViewed} />
        </div>
      </section>
      {/* <!-- MOST VIEWED EOF --> */}
    </>
  );
};
