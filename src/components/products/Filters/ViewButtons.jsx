import { styled } from "@mui/system";
import { BsFillGridFill, BsList } from "react-icons/bs";

import { useFilterContext } from "../../../context/FilterProductsContext";

const ViewButtons = () => {
  const { grid_view, showListView, showGridView } = useFilterContext();
  return (
    <Wrapper className="views-btns-container d-flex">
      <button
        className={
          grid_view ? "view-btn  active-view" : "view-btn  unactive-view"
        }
        onClick={() => showGridView()}
      >
        <BsFillGridFill />
      </button>
      <button
        className={
          !grid_view ? "view-btn  active-view" : "view-btn  unactive-view"
        }
        onClick={() => showListView()}
      >
        <BsList />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  gap: 0.5rem;

  .view-btn {
    width: 1.5rem;
    border-radius: var(--radius);
    height: 1.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
  }
  .unactive-view {
    background: transparent;
    border: 1px solid var(--txt-clr-black);
    color: var(--txt-clr-black);
  }
  .active-view {
    background: var(--txt-clr-black);
    color: var(--txt-clr-white);
  }
`;
export default ViewButtons;
