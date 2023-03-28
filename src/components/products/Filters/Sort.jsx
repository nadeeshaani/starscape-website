import { BiSort } from "react-icons/bi";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { sortOptions } from "../../../utils/constants";
import { useFilterContext } from "../../../context/FilterProductsContext";
import { styled } from "@mui/system";
const Sort = () => {
  const { handleSorting, sort } = useFilterContext();
  return (
    <Wrapper className="">
      <label htmlFor="sort" className="sort-label">
        <BiSort />
        <span> sort by </span>
      </label>
      <Select
        className="mui-select"
        value={sort}
        style={{
          width: "100%",
          textTransform: "capitalize",
        }}
        id="sort"
        onChange={(e) => handleSorting(e)}
        // displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {sortOptions.map((op) => {
          return (
            <MenuItem
              value={op}
              key={op}
              style={{ display: op == "" ? "none" : "flex" }}
            >
              {op}
            </MenuItem>
          );
        })}
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled("form")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;

  ///////////////////////////////////////////////

  select {
    // padding: 1% 3%;
    background-color: transparent;
    border: 1px solid #222;
    border-radius: var(--radius);
    cursor: pointer;
  }
  /* .sort-wrapper hr {
  flex-shrink: 1;
  flex-grow: 1;
} */

  .mui-select {
    flex-basis: 60%;
  }

  /*filter button*/

  .sort-label {
    font-size: 1.1rem;
    color: var(--clr-grey-1);
    text-transform: capitalize;
    /* padding: 5% 2%; */
    font-weight: 500 !important;
  }

  @media (max-width: 900px) {
    justify-content: stretch !important;
  }
  @media (max-width: 500px) {
    /* .form-sort-wrapper {
    flex-direction: column;
    justify-content: flex-start !important;
    align-items: flex-start !important;
  } */
    .sort-label span {
      display: none;
    }
    .mui-select {
      flex-basis: 70%;
    }
    .search-res-len {
      display: none;
    }
  }
`;

export default Sort;
