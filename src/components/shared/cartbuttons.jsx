import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useUserContext } from "../../context/userContext";
import { FiLogOut } from "react-icons/fi";
import { FaUser, FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { useState } from "react";
import { styled } from "@mui/system";

const NavBtns = () => {
  const [authOptions, setAuthOptions] = useState("auth-options-wrapper");
  const { logout, user, isAuthenticated, loginWithRedirect } = useUserContext();
  const { totalAmount } = useCartContext();
  return (
    <Wrapper className="nav-btns d-flex ">
      <Link to="cart" className="nav-cart-btn">
        <FaShoppingCart /> <span>{totalAmount}</span>
      </Link>

      {isAuthenticated ? (
        <button
          className="acc-btn d-flex"
          onClick={() =>
            authOptions === "auth-options-wrapper"
              ? setAuthOptions(
                  "auth-options-wrapper auth-options-wrapper-clicked"
                )
              : setAuthOptions("auth-options-wrapper")
          }
        >
          <FaUser />
          <span className="nav-auth-btn-log">
            {user.given_name && user.given_name}
          </span>
        </button>
      ) : (
        <button className="acc-btn d-flex" onClick={loginWithRedirect}>
          <span className="nav-auth-btn-log">{"sign in"}</span>
          <FaUserPlus />
        </button>
      )}
      <div className={authOptions}>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="d-flex nav-logout-btn"
        >
          <span className="nav-auth-btn-log"> logout </span> <FiLogOut />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  /* NAV BTNS */
  color: var(--txt-clr-1);

  flex-basis: 16%;
  gap: 2em;

  .acc-btn {
    gap: 0.4rem;
  }
  .nav-cart-btn svg,
  .acc-btn svg {
    display: inline-block;
    font-size: 1.4rem;
    color: var(--txt-clr-1);
    vertical-align: middle;
  }
  svg {
    vertical-align: middle;
  }
  .nav-cart-btn {
    position: relative;
    display: inline-block;
  }
  .nav-cart-btn span {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--txt-clr-2);
    width: 12px;
    height: 12px;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--txt-clr-white);
    padding: 11px;
    vertical-align: middle;
  }

  .auth-options-wrapper {
    position: absolute;
    /* width: 10%; */
    bottom: -50%;
    right: 5%;
    padding: 0.8%;
    display: none;
    -webkit-box-shadow: -1px 3px 6px 0px rgb(0 0 0 / 55%);
    -moz-box-shadow: -1px 3px 6px 0px rgba(0, 0, 0, 0.55);
    box-shadow: -1px 3px 6px 0px rgb(0 0 0 / 55%);
    background-color: #fff;
    border-radius: 5px;
  }

  .auth-options-wrapper::before {
    content: "";
    position: absolute;
    border-radius: 1px;
    top: -5px;
    left: 8%;
    width: 10px;
    height: 10px;
    background-color: #fff;
    transform: rotate(45deg);
  }
  .auth-options-wrapper div {
    width: 100%;
  }
  .nav-logout-btn {
    gap: 0.5rem;
    text-transform: capitalize;
    font-weight: 600;
    color: var(--clr-grey-1);
  }
  .nav-auth-btn-log {
    margin-left: 0.3rem;
    font-size: 0.9rem;
    text-transform: capitalize;
    color: var(--txt-clr-1);
  }

  .auth-options-wrapper-clicked {
    display: block;
  }

  @media screen and (max-width: 1328px) {
    .auth-options-wrapper {
      right: 2.5%;
    }
  }
`;

export default NavBtns;
