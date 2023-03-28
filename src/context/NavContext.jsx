import React, { useContext, useState } from "react";

const NavCon = React.createContext();
const NavContext = ({ children }) => {
  const [togglesideBar, setToggleSideBar] = useState(false);
  const toggleBar = () => {
    togglesideBar ? setToggleSideBar(false) : setToggleSideBar(true);
  };
  return (
    <NavCon.Provider
      value={{
        togglesideBar,
        setToggleSideBar,
        toggleBar,
      }}
    >
      {children}
    </NavCon.Provider>
  );
};

const NavSideContext = () => {
  return useContext(NavCon);
};

export { NavContext, NavSideContext, NavCon };
