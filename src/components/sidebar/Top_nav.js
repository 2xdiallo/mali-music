import React, { useState } from "react";
import logo from "./../../assets/youtube.png";
import menu_png from "./../../assets/menu.png";
import account_png from "./../../assets/profile.png";
import { NavLink } from "react-router-dom";
import Search from "../search/Search";
import Dropdown from "../Dropdown/Dropdown";
import { useSidebar } from "../../context/IsOpen";
import { useScrollPosition } from "../../context/ScrollContext";
const TopNav = () => {
  const [dropdown, setDropdown] = useState(false);

  const { toggle, menuToggle } = useSidebar();
  const { scroll } = useScrollPosition();

  const dropdownToggle = () => setDropdown(!dropdown);

  return (
    <div
      className={scroll ? "top_nav bg_nav" : "top_nav bg_blur"}
      style={
        ({ backgroundColor: scroll ? "" : "#030303" },
        { borderBottom: scroll ? "1px solid #555" : "" })
      }
    >
      <div className="bar-logo">
        {/* ========================================================== */}
        {/* //====// //===========// menu png //==========// //====// */}

        <div className="menu_png menu_desktop" onClick={toggle}>
          <img src={menu_png} alt="menu logo" />
        </div>
        {/* for mobile device */}
        <div className="menu_png toggle_menu" onClick={menuToggle}>
          <img src={menu_png} alt="menu logo" />
        </div>
        {/* ========================================================== */}
        {/* //====// //===========// menu logo //==========// //====// */}

        <NavLink to="/bundle_home" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>
        {/* ========================================================== */}
        {/* //====// //===========// search bar //==========// //====// */}
        <Search />
      </div>
      {/* ========================================================== */}
      {/* //====// //===========// account nav //==========// //====// */}

      <div className="nav-account" onClick={dropdownToggle}>
        <img
          style={{
            width: 100,
            height: 40,
            objectFit: "contain",
          }}
          src={account_png}
          alt="profile pic"
        />
        {/* ========================================================== */}
        {/* verifier l'etat de dropdown pour afficher son composant */}
        {dropdown ? <Dropdown /> : ""}
      </div>
    </div>
  );
};

export default TopNav;
