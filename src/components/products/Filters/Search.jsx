import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
const Search = ({ updateFilters, text }) => {
  return (
    <Wrapper>
      <TextField
        id="outlined-helperText"
        size="small"
        value={text}
        type="text"
        name="text"
        label="Product Name"
        onChange={updateFilters}
      />
    </Wrapper>
  );
};

const Wrapper = styled("form")`
  // .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
  //   line-height: 0.5rem !important;
  // }
  .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 4% 0 !important;
    // line-height: 1 !important;
    display: flex !important;
    align-items: center !important;
    padding-left: 5% !important;
    font-size: 0.9rem !important;
    color: var(--txt-clr-black) !important;
    vertical-align: middle !important;
  }
  .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root {
    font-size: 0.8rem !important;
    // top: -4px !important;
    font-family: inherit !important;
    z-index: 0 !important;
  }
  .Mui-focused {
    color: var(--txt-clr-2) !important;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    z-index: 0 !important;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: var(--txt-clr-black) !important;
  }
`;
export default Search;
