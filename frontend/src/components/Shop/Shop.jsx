import { Products } from 'components/Product/Products/Products';
import { PagingList } from 'components/shared/PagingList/PagingList';
import { usePagination } from 'components/utils/Pagination/Pagination';
import productData from 'data/product/product';
import Slider from 'rc-slider';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { AsideItem } from '../shared/AsideItem/AsideItem';

// React Range
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const options = [
  { value: 'highToMin', label: 'From expensive to cheap' },
  { value: 'minToHigh', label: 'From cheap to expensive' },
];
export const Shop = () => {

  ///Search code
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);





  //---

  const allProducts = [...productData];
  const [categories, setCategories] = useState([]);

  const [productOrder, setProductOrder] = useState(
    allProducts.sort((a, b) => (a.price < b.price ? 1 : -1))
  );
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ isNew: false, isSale: true });
  useEffect(() => {
    setProducts(productOrder);
  }, [productOrder]);
  useEffect(() => {
    fetch('http://localhost:8090/category/viewAll')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);
  
  const categoryId =1;
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('categoryId') || 1;
    const fetchProductsByCategory = async () => {
      const response = await fetch(`http://localhost:8090/product/viewByCategory?category_id=${categoryId}`);
      const data = await response.json();
      setProducts(data);

    };fetchProductsByCategory();
  }, [categoryId]);

  console.log(products);

  var keyword;
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
     keyword = urlParams.get('keyword') ;
     if (keyword) {
      const handleSearch = async () => {
        const response = await fetch(`http://localhost:8090/product/search?keyword=${keyword}`);
        const data = await response.json();
        setProducts(data);
      };
      handleSearch();
    }
    }, [keyword]);




  useEffect(() => {
    if (filter.isNew && filter.isSale) {
      const newPro = productOrder.filter(
        (pd) => pd.isNew === true && pd.isSale === true
      );
      setProducts(newPro);
    } else if (filter.isNew && !filter.isSale) {
      const newPro = productOrder.filter((pd) => pd.isNew === true);
      setProducts(newPro);
    } else if (filter.isSale && !filter.isNew) {
      const newPro = productOrder.filter((pd) => pd.isSale === true);
      setProducts(newPro);
    } else {
      setProducts([...productOrder]);
    }
  }, [filter, productOrder]);
  const recentlyViewed = [...productData].slice(0, 3);
  const todaysTop = [...productData].slice(3, 6);
  const paginate = usePagination(products, 9);
  const handleSort = (value) => {
    if (value === 'highToMin') {
      const newOrder = allProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
      setProductOrder(newOrder);
    }
    if (value === 'minToHigh') {
      const newOrder = allProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
      setProductOrder(newOrder);
    }
  };

  return (
    <div>
      {/* <!-- BEGIN SHOP --> */}
      <div className='shop'>
        <div className='wrapper'>
          <div className='shop-content'>
            {/* <!-- Shop Aside --> */}
            <div className='shop-aside'>
            <div className='box-field'>
              
            <form>
  <div className='box-field__row box-field__row-search' style={{ display: 'flex', alignItems: 'center' }}>
    <div className='box-field' style={{ marginRight: '5px' , marginBottom: '10px' }}>
      <input
        type="text" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        placeholder="Search our store"
        style={{ width: '240px', height: '30px', backgroundColor: 'rgba(173, 216, 230, 0.3)', border: '1px solid #ccc' }}
      />
    </div>
    <a href={`?keyword=${searchTerm}`} style={{ color: 'blue', paddingBottom: '7px' }}><i className='icon-search'></i></a>
  </div>
</form>





                </div>

              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Categories</span>
                <ul>
                {categories.map(category => (
                      <li key={category.category_id}>
                        <a href={`?categoryId=${category.category_id}`}>
                          {category.category_name}
                        </a>
                      </li>
                    ))}
              
                </ul>
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Price</span>
                <div className='range-slider'>
                  <Range
                    min={0}
                    max={500}
                    defaultValue={[0, 100]}
                    tipFormatter={(value) => `${value}$`}
                    allowCross={false}
                    tipProps={{
                      placement: 'bottom',
                      prefixCls: 'rc-slider-tooltip',
                    }}
                  />
                </div>
              </div>
            
            </div>
            {/* <!-- Shop Main --> */}
            <div className='shop-main'>
              <div className='shop-main__filter'>
                <div className='shop-main__checkboxes'>
                  <label className='checkbox-box'>
                    <input
                      checked={filter.isSale}
                      onChange={() =>
                        setFilter({ ...filter, isSale: !filter.isSale })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                    SALE
                  </label>
                  <label className='checkbox-box'>
                    <input
                      checked={filter.isNew}
                      onChange={() =>
                        setFilter({ ...filter, isNew: !filter.isNew })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                    NEW
                  </label>
                </div>
                <div className='shop-main__select'>
                  <Dropdown
                    options={options}
                    className='react-dropdown'
                    onChange={(option) => handleSort(option.value)}
                    value={options[0]}
                  />
                </div>
              </div>
              <div className='shop-main__items'>
                <Products products={products} />
              </div>

              {/* <!-- PAGINATE LIST --> */}
              <PagingList paginate={paginate} />
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.png'
          alt=''
        />
        <img
          className='shop-decor js-img'
          src='/assets/img/shop-decor.png'
          alt=''
        />
      </div>
      {/* <!-- SHOP EOF   --> */}
    </div>
  );
};
