import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/poductsReducr";
import { products_url, single_product_url } from "../utils/constants";

import {
  START_FETCHING,
  FETCH_DATA,
  END_FETCHING,
  PRODUCTS_ERR_FETCHING,
  SINGLE_PRODUCT_START_FETCHING,
  FETCH_SINGLE_PRODUCT,
  SINGLE_PRODUCT_END_FETCHING,
  SINGLE_PRODUCT_ERR,
} from "../utils/actions";
const dataContext = React.createContext();
const initialState = {
  //all products
  products: [],
  productsErr: false,
  isProductsLoading: false,
  //featured products
  feturedProducts: [],

  //single product
  singleProduct: {},
  issingleProductLoading: false,
  singleProductErr: false,
};
const ProductsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //fetch peoducts
  const fetchData = async (url) => {
    dispatch({ type: START_FETCHING });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: FETCH_DATA, payload: data });
      dispatch({ type: END_FETCHING });
    } catch (e) {
      console.log(e.response);
      dispatch({ type: PRODUCTS_ERR_FETCHING });
    }
  };

  // console.log(state.feturedProducts);
  useEffect(() => {
    fetchData(products_url);
  }, []);

  const fetchSingleProduct = async (url) => {
    dispatch({ type: SINGLE_PRODUCT_START_FETCHING });
    try {
      const { data } = await axios.get(url);

      dispatch({ type: FETCH_SINGLE_PRODUCT, payload: data });
      dispatch({ type: SINGLE_PRODUCT_END_FETCHING });
    } catch (e) {
      dispatch({ type: SINGLE_PRODUCT_ERR });
    }
  };
  return (
    <dataContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </dataContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(dataContext);
};

export { ProductsContext, dataContext, useProductsContext };
