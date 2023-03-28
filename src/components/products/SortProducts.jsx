import { useFilterContext } from "../../context/FilterProductsContext";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ViewButtons from "./Filters/ViewButtons";
import Search from "./Filters/Search";
import { FaFilter } from "react-icons/fa";
import Sort from "./Filters/Sort";
const SortProducts = () => {
  const {
    filteredProducts: products,
    showFliters,
    updateFilters,
    filters,
  } = useFilterContext();
  let { text } = filters;

  return (
    <header className="filters-wrapper">
      <Grid2
        style={{ width: "100%" }}
        alignItems="center"
        container
        spacing={1}
      >
        {/* -----------------------------------VIEW------------------------------------------------- */}
        <Grid2 item xs={12} sm={3.5} md={1.5} paddingY={{ xs: 2, md: "auto" }}>
          <ViewButtons />
        </Grid2>
        {/* ------------------------------------SEARCH------------------------------------------------ */}

        <Grid2
          item
          display={{ xs: "none", sm: "flex" }}
          xs={12}
          sm={8.5}
          justifyContent={{ sm: "flex-end", md: "flex-start" }}
          md={5.5}
          lg={6}
          container
          direction={"row"}
          alignItems="center"
        >
          <Grid2
            item
            lg={3}
            container
            justifyContent={{ xs: "flex-end", sm: "stretch" }}
          >
            <Search updateFilters={updateFilters} text={text} />
          </Grid2>
          <Grid2 item lg={9} paddingX={2}>
            <p className="search-res-len">{products.length} products found</p>
          </Grid2>
        </Grid2>
        {/* ------------------------------------------------------------------------------------ */}
        {/* -----------------------------------SORT------------------------------------------------- */}
        {/* ------------------------------------------------------------------------------------ */}

        <Grid2
          item
          container
          xs={8}
          sm={7}
          md={4}
          lg={3.5}
          alignItems="center"
          paddingY={{ xs: 2, md: "auto" }}
          // justifyContent={{ xs: "start", md: "flex-end" }}
        >
          <Sort />
        </Grid2>
        {/* ------------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------------ */}

        {/* is filter modal open? */}
        <Grid2
          item
          xs={4}
          sm={5}
          md={1}
          container
          justifyContent="flex-end"
          container
          paddingY={{ xs: 2, md: "auto" }}
        >
          <button
            onClick={() => {
              showFliters();
            }}
            className="filter-modal-btn"
          >
            <FaFilter /> <span>filter </span>
          </button>
        </Grid2>
        {/* ------------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------------ */}
      </Grid2>
    </header>
  );
};

export default SortProducts;
