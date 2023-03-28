import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import { NavSideContext } from "../../context/NavContext";
import { useUserContext } from "../../context/userContext";
import { useCartContext } from "../../context/CartContext";
import { styled } from "@mui/system";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const SideBar = () => {
  const { logout, isAuthenticated, loginWithRedirect } = useUserContext();
  const { togglesideBar, setToggleSideBar } = NavSideContext();
  const { totalAmount } = useCartContext();

  let barClass = togglesideBar
    ? "side-bar slide-in"
    : "side-bar translate-away";
  const closebar = () => {
    setToggleSideBar(false);
    barClass = "side-bar translate-away";
  };
  return (
    <Wrapper>
      <div className={togglesideBar ? "overlay" : ""}></div>
      <aside className={barClass}>
        <ul className="side-bar-navs">
          {links.map((link) => (
            <Link to={link.url} key={link.id} onClick={closebar}>
              {link.text}
            </Link>
          ))}
        </ul>
        <AUTHCART className="d-flex">
          <Link to="cart" className="nav-cart-btn">
            <FaShoppingCart /> <span>{totalAmount}</span>
          </Link>
          {isAuthenticated ? (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="d-flex acc-btn nav-logout-btn"
            >
              <span className="nav-auth-btn-log"> logout </span>
              <MdOutlineLogout />
            </button>
          ) : (
            <button className="acc-btn d-flex" onClick={loginWithRedirect}>
              <span className="nav-auth-btn-log">{"sign in"}</span>
              <FaUserPlus />
            </button>
          )}
        </AUTHCART>
      </aside>
    </Wrapper>
  );
};

// STYLED COM
//main
const Wrapper = styled("div")`
  .overlay {
    position: fixed;
    width: 100vw;
    z-index: 2;
    backdrop-filter: blur(2px);
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-size: cover;
  }
  .side-bar {
    display: none;
  }
  .bar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .side-bar-navs {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 40vw;
    gap: 1rem;
    padding: 10rem 0;
  }
  .side-bar-navs a {
    padding: 3%;
    transition: 0.3s all ease-in-out;
    transition-delay: 0.2s;
  }
  .side-bar-navs a:hover,
  .side-bar-navs a:active,
  .side-bar-navs a:focus {
    transform: translateX(8%);

    color: var(--txt-clr-2);
    cursor: pointer;
  }

  .translate-away {
    transform: translateX(-100%);
    transition: var(--transition-4);
  }
  .slide-in {
    transform: translateX(0%);
    transition: var(--transition-4);
  }

  @media screen and (max-width: 990px) {
    .side-bar {
      height: 100vh;
      width: 60%;
      background-color: var(--nav-bg-clr-light);
      position: fixed;
      z-index: 3;
      left: 0;
      bottom: 0;
      padding: 4% 3%;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      font-size: 1.2rem;
    }
  }
`;

const AUTHCART = styled("footer")`
  gap: 2em;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: var(--txt-clr-1);

  .acc-btn {
    gap: 0.4rem;
    color: var(--txt-clr-1);
  }
  .nav-cart-btn svg,
  .acc-btn svg {
    display: inline-block;
    font-size: 1.4rem;
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

  .nav-logout-btn {
    gap: 0.4rem;
    text-transform: capitalize;
    // font-weight: 550;
    color: var(--txt-clr-1);
    transition: 0.3s all ease-in-out;
    transition-delay: 0.2s;
  }
  .nav-logout-btn:hover svg {
    transform: translateX(5%);
  }
  .nav-auth-btn-log {
    color: var(--txt-clr-1);
    margin-left: 0.3rem;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default SideBar;
