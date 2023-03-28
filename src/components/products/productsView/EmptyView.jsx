import { styled } from "@mui/system";
const EmptyView = () => {
  return (
    <Wrapper className="container">
      <span>nothing to match..</span>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  min-height: 90vh;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: var(--txt-clr-1);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default EmptyView;
