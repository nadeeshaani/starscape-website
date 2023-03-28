import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/FiltersReducer";
import { useProductsContext } from "./ProductsContect";
//actions
import {
  LOAD_WHOLE_PRODUCTS,
  GRID_VIEW,
  LIST_VIEW,
  SORT_PRODUCTS,
  CHANGE_SORT_TYPE,
  CHANGE_CATEGORY,
  FILTER_CATEGORIES,
  SHOW_FILTERS_MODAL,
  CLOSE_FILTERS_MODAL,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../utils/actions";

const filterContext = React.createContext();

const FilterContextProvider = ({ children }) => {
  //copy of the org producta
  const { products } = useProductsContext();
  let catgoriesSet = new Set();
  products.forEach((element) => {
    catgoriesSet.add(element.category);
  });
  let categories = ["all", ...catgoriesSet];
  const initialState = {
    products: [],
    filteredProducts: [],
    grid_view: true,
    isFiltersModalOpen: false,
    sort: "",
    filterCount: 0,
    filters: {
      text: "",
      minPrice: 0,
      price: 0,
      maxPrice: 0,
      color: "all",
      category: "all",
      company: "all",
      isFreeShippingChecked: false,
    },
    // catgories: [...catgories],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_WHOLE_PRODUCTS, payload: products });
  }, [products, state.filters.maxPrice]);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //====================================================SORTING====================================================================
  const handleSorting = (e) => {
    dispatch({ type: CHANGE_SORT_TYPE, payload: e.target.value });
    dispatch({ type: SORT_PRODUCTS });
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //====================================================FILTERS MODAL====================================================================

  const showFliters = () => {
    dispatch({ type: SHOW_FILTERS_MODAL });
  };

  const closeFilters = () => {
    dispatch({ type: CLOSE_FILTERS_MODAL });
  };
  const updateFilters = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value;
    if (name === "isFreeShippingChecked") value = e.target.checked;
    else {
      value = e.target.value;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    dispatch({ type: FILTER_PRODUCTS });
    if (name !== "price") closeFilters();
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
    closeFilters();
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //====================================================CATEGORIES====================================================================
  const changeCategory = (category) => {
    dispatch({ type: CHANGE_CATEGORY, payload: category });
    dispatch({ type: FILTER_CATEGORIES });
    closeFilters();
  };

  const showGridView = () => {
    dispatch({ type: GRID_VIEW });
  };
  const showListView = () => {
    dispatch({ type: LIST_VIEW });
  };
  return (
    <filterContext.Provider
      value={{
        ...state,
        showListView,
        showGridView,

        handleSorting,
        showFliters,
        closeFilters,
        categories,
        changeCategory,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(filterContext);
};

export { FilterContextProvider, useFilterContext, filterContext };
