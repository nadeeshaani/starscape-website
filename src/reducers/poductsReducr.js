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

const reducer = (state, action) => {
  if (action.type == START_FETCHING) {
    return {
      ...state,
      isProductsLoading: true,
    };
  }
  if (action.type == FETCH_DATA) {
    const fetured = action.payload.filter((p) => p.featured == true);
    return {
      ...state,
      isProductsLoading: true,
      products: action.payload,
      feturedProducts: fetured,
    };
  }
  if (action.type == END_FETCHING) {
    return {
      ...state,
      isProductsLoading: false,
    };
  }

  if (action.type == PRODUCTS_ERR_FETCHING) {
    return {
      ...state,
      productsErr: true,
    };
  }

  /////////////////////////////////////////////////////////////
  //SINGLE PRODUCT
  if (action.type === SINGLE_PRODUCT_START_FETCHING) {
    return {
      ...state,
      issingleProductLoading: true,
      singleProductErr: false,
    };
  }
  if (action.type === FETCH_SINGLE_PRODUCT) {
    return {
      ...state,
      singleProduct: action.payload,
    };
  }
  if (action.type === SINGLE_PRODUCT_END_FETCHING) {
    return {
      ...state,
      issingleProductLoading: false,
    };
  }

  if (action.type == SINGLE_PRODUCT_ERR) {
    return { ...state, singleProductErr: true, issingleProductLoading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
