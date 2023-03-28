import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useFilterContext } from "../../context/FilterProductsContext";
import { isMAtched, generateFilters, formatPrice } from "../../utils/helpers";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/system";

const FiltersModal = () => {
  const {
    closeFilters,
    isFiltersModalOpen,
    updateFilters,
    filters,
    clearFilters,
    products,
  } = useFilterContext();

  let modalClass = isFiltersModalOpen
    ? "modal-opend modal"
    : "modal-closed modal";
  let {
    isFreeShippingChecked,
    color,
    category,
    company,
    minPrice,
    price,
    maxPrice,
  } = filters;

  // let colors = deleteDuplicates(products, "colors");

  let { companies, categories, colors } = generateFilters(
    products,
    "company",
    "category",
    "colors"
  );
  console.log(colors);

  return (
    <Wrapper className=" d-flex overlay">
      <div className={modalClass}>
        <header className="d-flex">
          <button onClick={() => closeFilters()}>
            <AiOutlineClose />
          </button>
          <h4>Filter By</h4>
          <button type="button" onClick={clearFilters}>
            clear
          </button>
        </header>
        <div className="filters-form-wrapper d-flex">
          <form className="d-flex-col filters-form">
            {/*=============================================================================================================== */}

            {/* COLORS */}
            <div className="colors-wrapper d-flex-col ">
              <label>colors </label>
              <div className="p-clrs-container d-flex">
                {colors &&
                  colors.map((clr) => {
                    return (
                      <div
                        key={clr}
                        className="product-clr-op"
                        style={{ backgroundColor: ` ${clr}` }}
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            // console.log(clr);
                            updateFilters(e);
                          }}
                          name="color"
                          value={clr}
                          className={
                            isMAtched(clr, color) && clr !== "all"
                              ? "clr-checked"
                              : "clr-overlay"
                          }
                        >
                          {isMAtched(clr, color) && clr !== "all" ? (
                            <BsCheckLg />
                          ) : (
                            ""
                          )}
                          {clr == "all" ? "all" : ""}
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/*=============================================================================================================== */}

            {/* CATEGORIES */}
            <div className="filter-wrapper d-flex-col">
              <label htmlFor="categories">Categories</label>
              <Select
                style={{
                  margin: "0 !important",
                  padding: "0",
                  textTransform: "capitalize",
                }}
                id="categories"
                name="category"
                value={category}
                onChange={updateFilters}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {categories &&
                  categories.map((cat) => {
                    return (
                      <MenuItem name={cat} value={cat} key={cat}>
                        {cat}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>
            {/*=============================================================================================================== */}

            {/* companies */}

            <div className="filter-wrapper d-flex-col">
              <label htmlFor="companies">Companies</label>
              <Select
                style={{
                  margin: "0 !important",
                  padding: "0",
                  textTransform: "capitalize",
                }}
                id="companies"
                name="company"
                value={company}
                onChange={updateFilters}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {companies &&
                  companies.map((company) => {
                    return (
                      <MenuItem name={company} value={company} key={company}>
                        {company}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>
            {/*=============================================================================================================== */}

            {/* PRICE */}

            <div className="filter-wrapper d-flex-col">
              <div className="price-label">
                <label htmlFor="price">Price</label>
                <span> {formatPrice(price)}</span>
              </div>
              <input
                color="red"
                type="range"
                id="price"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={updateFilters}
                name="price"
              />
            </div>

            {/*=============================================================================================================== */}

            {/*SHIPPING  */}
            <div className="filter-wrapper d-flex shipping-wrapper">
              <label htmlFor="freeshipping">free shipping </label>
              <input
                type="checkbox"
                id="freeshipping"
                onChange={updateFilters}
                name="isFreeShippingChecked"
                checked={isFreeShippingChecked}
              />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: 0.3s all ease-in-out;
  width: 100%;
  //overlay
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(12px) !important;
  background-size: cover;

  //header
  header {
    // gap: 5rem;
    justify-content: space-between;
    // height: 2rem;
    text-align:center;
    align-items:flex-start;

    h4{
text-transform:capitalize;
font-weight:400;
letter-spacing: -.2px;
    }

    button{
      font-size:1rem;
font-weight:400;
text-align:center;
letter-spacing: .5px;
text-transform:capitalize;

svg{
  vertical-align:middle;
}
    }

  }







  //////////////////////////////////////////////
  .modal {
  }
  .modal-opend {
    transform: translateX(0);
    transition: var(--transition-4);
    background-color: var(--section-bg-1);
    border-radius: var(--radius);
    padding:  4%;
  }

  .modal-closed {
    transform: translateX(100%);
    transition: var(--transition-4);
  }
  .filters-form-wrapper {
    height: 70vh;
    align-items: center;
    justify-content: center;
    min-width: 25vw;
  }
  .filters-form {
    gap: 1.5rem;
    width: 100%;
  }

  /*============================colors COMPONENT=============================== */
  .colors-wrapper {
    // margin: 2rem 0;
    // display: flex;
    // align-items: center;
    gap: 0.5rem;
    // flex-direction: c;
  }
  .p-clrs-container {
    gap: 0.4rem;
    align-self: center;
  }
  .product-clr-op {
    border-radius: 50%;
    width: 1.25rem;
    cursor: pointer;
    height: 1.25rem;
    background-color: rgba(0.2);
    text-transform: capitalize;
    position: relative;
  }
  .clr-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    color: var(--txt-clr-1);
    text-transform: capitalize;
    text-align: center;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .filters-wrapper {
    background-color: darkcyan;
    position: fixed;
  }

  .filter-wrapper {
    gap: 0.8rem;
  }
  .active-cat {
    text-decoration: underline;
    font-weight: 600;
  }
  .clr-checked {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    top: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: 0.7rem;
  }
  .price-label {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .shipping-wrapper {
    justify-content: space-between;
  }

  .shipping-wrapper input {
    cursor: pointer;
  }

  input:checked {
    background-color: var(--txt-clr-2) !important;
    // cursor: pointer;
  }
  @media (max-width:1100px) {
    .filters-form-wrapper {
      min-width: 30vw;
    }
  @media (max-width: 800px) {
    .filters-form-wrapper {
      min-width: 45vw;
    }
    @media (max-width: 600px) {
      .filters-form-wrapper {
        min-width: 75vw;
      }
  }
  @media (max-width: 350px) {
    .filters-form-wrapper {
      min-width: 85vw;
    }}

    .modal-opend {
     
      padding: 8% 4%;
    }
`;
export default FiltersModal;
