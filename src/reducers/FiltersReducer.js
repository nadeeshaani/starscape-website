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

const reducer = (state, action) => {
  let maxPrice = 0;
  switch (action.type) {
    case LOAD_WHOLE_PRODUCTS: {
      //this is to initialize products and filtered products to the products fetched from the api
      //we fetched it from the products context
      //to not map the same array ref to both of the whole products and the filterd ones ==> use spread operator
      action.payload.forEach((element) => {
        maxPrice = Math.max(maxPrice, element.price);
      });
      return {
        ...state,
        products: [...action.payload],
        filteredProducts: [...action.payload],

        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    }

    case GRID_VIEW: {
      return { ...state, grid_view: true };
    }
    case LIST_VIEW: {
      return { ...state, grid_view: false };
    }
    case CHANGE_SORT_TYPE: {
      return { ...state, sort: action.payload };
    }

    ////////////////////////////////////////////////////////////////
    case SORT_PRODUCTS: {
      const { filteredProducts, sort } = state;
      let tempProducts = [];
      if (sort === "Price (Lowest)") {
        tempProducts = filteredProducts.sort((a, b) => a.price - b.price);

        return { ...state, filteredProducts: tempProducts };
      }
      if (sort === "Price (Highest)") {
        tempProducts = filteredProducts.sort((a, b) => b.price - a.price);
        return { ...state, filteredProducts: tempProducts };
      }

      if (sort === "Name (A-Z)") {
        tempProducts = filteredProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return { ...state, filteredProducts: tempProducts };
      }
      if (sort === "Name (Z-A)") {
        tempProducts = filteredProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return { ...state, filteredProducts: tempProducts };
      }
      if (sort === "Default") {
        return state;
      }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //====================================================FILTERS MODAL====================================================================
    case SHOW_FILTERS_MODAL: {
      return { ...state, isFiltersModalOpen: true };
    }

    case CLOSE_FILTERS_MODAL: {
      return { ...state, isFiltersModalOpen: false };
    }
    /////////////////////////////////////////////////////////////////////////////////
    case UPDATE_FILTERS: {
      let { name, value } = action.payload;

      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    case FILTER_PRODUCTS: {
      const { text, isFreeShippingChecked, color, category, company, price } =
        state.filters;
      let tempProducts = state.products;
      if (text) {
        tempProducts = tempProducts.filter((el) => el.name.startsWith(text));
      }
      if (isFreeShippingChecked) {
        tempProducts = tempProducts.filter((el) => el.shipping == true);
        console.log("kkkkk");
      }

      if (color !== "all") {
        tempProducts = tempProducts.filter((el) =>
          el.colors.some((clr) => clr == color)
        );
      }

      if (category !== "all") {
        // console.log("ddd");
        tempProducts = tempProducts.filter((el) => el.category === category);
      }

      if (company !== "all") {
        tempProducts = tempProducts.filter((el) => el.company === company);
      }

      tempProducts = tempProducts.filter((el) => el.price <= price);

      return { ...state, filteredProducts: tempProducts };
    }

    case CLEAR_FILTERS: {
      return {
        ...state,
        filteredProducts: state.products,
        filters: {
          text: "",
          minPrice: 0,
          price: maxPrice,
          maxPrice: maxPrice,
          color: "all",
          category: "all",
          company: "all",
          isFreeShippingChecked: false,
        },
      };
    }
    //====================================================CATEGORIES====================================================================

    case CHANGE_CATEGORY: {
      return { ...state, category: action.payload };
    }
    case FILTER_CATEGORIES: {
      if (state.category == "all") {
        let { products } = state;
        console.log("eee", products);
        return { ...state, filteredProducts: state.products };
      }
      let tempProducts = state.products.filter(
        (el) => el.category == state.category
      );

      console.log(tempProducts);
      return { ...state, filteredProducts: tempProducts };
    }
    default:
      return state;
  }
};

export default reducer;
