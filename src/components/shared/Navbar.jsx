import logo from "../../assets/logo.svg";
import { GrClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
//ul navs
import { links } from "../../utils/constants";
import { Link } from "react-router-dom";
import NavBtns from "./cartbuttons";
import { useState } from "react";
import { NavSideContext } from "../../context/NavContext";
import { styled } from "@mui/system";
const NavBar = () => {
  //mobile to desktop qurey
  const { togglesideBar, setToggleSideBar, toggleBar } = NavSideContext();

  //nav bg changin functionality
  const [scrolled, setScrolled] = useState(false);
  const navClass = scrolled ? "nav nav-bg-2" : "nav nav-bg-1";
  const isSideBar = togglesideBar ? "box-shadow" : "";
  const handleScroll = () => {
    window.scrollY > 90 ? setScrolled(true) : setScrolled(false);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <Wrapper className={`${navClass}  ${isSideBar}`}>
      <div className="container">
        <div className="nav-container d-flex ">
          <Link className="logo" to="/">
            <img src={logo} alt="comfy store brand logo" />
          </Link>
          <button className="sidebar-btn" onClick={toggleBar}>
            {togglesideBar ? <GrClose /> : <FaBars />}
          </button>

          <ul className="links-container d-flex">
            {links.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
          <NavBtns />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("nav")`
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: var(--nav-height);
  width: 100%;

  .logo {
    display: flex;
    align-items: center;
  }
  img {
    width: 60%;
    vertical-align: middle;
  }

  .nav-container {
    justify-content: space-between;
    padding: 0.8% 0;
    position: relative;
    height: 100%;
  }
  .sidebar-btn {
    font-size: 1.75rem;
    display: none;
  }

  .links-container {
    flex-basis: 30%;
    justify-content: space-between;
    align-self: center;
    font-size: 1.2em;
    font-weight: 600;
    color: var(--clr-grey-1) !important;
  }
  .links-container > li {
    display: inline-block;
    /* padding-bottom: 2%; */
    position: relative;
  }

  .links-container > li::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--txt-clr-2);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .links-container > li:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .links-container > li:focus-within a {
    color: var(--txt-clr-2) !important;
  }
  li:focus-within::after {
    transform: scale(1);
  }

  @media screen and (max-width: 1008px) {
    .links-container,
    .nav-btns {
      display: none !important;
    }

    .sidebar-btn {
      display: block;
    }
  }
  /***************************************/

  @media (max-width: 600px) {
    img {
      width: 50%;
    }
  }
  @media (max-width: 450px) {
    img {
      width: 45%;
    }

    .sidebar-btn {
      font-size: 1.35rem;
    }
  }
`;

export default NavBar;
