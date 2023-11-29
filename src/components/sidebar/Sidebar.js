import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

import { useSidebar } from "../../context/IsOpen";
import { useScrollPosition } from "../../context/ScrollContext";

const Sidebar = ({ children }) => {
  const { isOpen, menu_toggle } = useSidebar();
  const { scroll } = useScrollPosition();
  const menuItems = [
    {
      path: "/bundle_home",
      name: "Accueil",
      icon: <i class="fa-solid fa-house"></i>,
    },
    {
      path: "/bundle_biblioteques",
      name: "Explorer",
      icon: <i class="fa-solid fa-compass"></i>,
    },
    {
      path: "/courses",
      name: "Courses",
      icon: <i class="fa-solid fa-music"></i>,
    },
  ];

  return (
    <div className="application">
      <div className="flex-box-center">
        <div
          className={`${isOpen ? "sidebar active" : "sidebar "} ${
            menu_toggle ? "sidebar menu_active" : "sidebar"
          } ${scroll ? "bg_nav" : " bg_blur"}`}
          style={{
            borderRight: isOpen ? "1px solid #555" : "",
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
      </div>
      {/* ========================================================== */}
      {/* //====// //===========// affichage des pages //==========// //====// */}
      <main
        style={{
          paddingLeft: isOpen ? "110px" : "50px",
          marginLeft: isOpen ? "80px" : "30px",
        }}
      >
        <br />
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
