import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import logo from "./../../assets/youtube.png";
import menu_png from "./../../assets/menu.png";
import account_png from "./../../assets/profile.png";
import Search from "../search/Search";
import Dropdown from "../Dropdown/Dropdown";
import { useScrollPosition } from "../../context/ScrollContext";

const Sidebar = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const [sidebarOpen, setSidebaropen] = useState(false);
  const [mobileToggle, setMobileDevice] = useState(false);

  const [scroll, setScroll] = useState(false);

  const dropdownToggle = () => setDropdown(!dropdown);
  const openSidebar = () => setSidebaropen(!sidebarOpen);

  const clicked = () => {
    setMobileDevice(!mobileToggle);
  };
  const menuItems = [
    {
      path: "/",
      name: "Accueil",
      icon: <i class="fa-solid fa-house"></i>,
    },
    {
      path: "/biblioteques",
      name: "Explorer",
      icon: <i class="fa-solid fa-compass"></i>,
    },
    {
      path: "/courses",
      name: "Courses",
      icon: <i class="fa-solid fa-music"></i>,
    },
  ];

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
      console.log(scroll);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="application">
      <div className="flex-box-center">
        <div
          className={`${
            sidebarOpen ? "sidebar bg_blur active" : "sidebar bg_blur"
          } ${
            mobileToggle ? "sidebar bg_blur menu_active" : "sidebar bg_blur"
          }`}
          style={{
            borderRight: scroll ? "1px solid red" : "",
            borderRight: sidebarOpen ? "1px solid #555" : "",
          }}
        >
          {/* ==== ====================================================== */}
          {/* //====// //===========// map des liens //==========// //====// */}
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div style={{ display: "block" }} className="link_text">
                {" "}
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div className="top_nav bg_blur">
          <div className="bar-logo">
            {/* ========================================================== */}
            {/* //====// //===========// menu png //==========// //====// */}

            <div className="menu_png menu_desktop" onClick={openSidebar}>
              <img src={menu_png} alt="menu logo" />
            </div>
            {/* for mobile device */}
            <div className="menu_png toggle_menu" onClick={clicked}>
              <img src={menu_png} alt="menu logo" />
            </div>
            {/* ========================================================== */}
            {/* //====// //===========// menu logo //==========// //====// */}

            <NavLink to="/" className="logo">
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
      </div>
      {/* ========================================================== */}
      {/* //====// //===========// affichage des pages //==========// //====// */}
      <main className="bg_blur">{children}</main>
    </div>
  );
};

export default Sidebar;
