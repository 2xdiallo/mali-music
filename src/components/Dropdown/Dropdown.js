import React from "react";
import "./dropdown.css";
import { NavLink } from "react-router-dom";
const Dropdown = () => {
  return (
    <ul className="dropdownFile">
      <li>
        <NavLink to="">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="">Logout</NavLink>
      </li>
    </ul>
  );
};

export default Dropdown;
