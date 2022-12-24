import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext";

const Navbar = () => {
  const { authenticated } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="menus">
        <ul className="menu">
          <li>
            <NavLink to="/" activeclassname="active" end>
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink to="/plan" activeclassname="active" end>
              Planera själv
            </NavLink>
          </li>
          <li>
            <NavLink to="/session" activeclassname="active">
              Planera tillsammans
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeclassname="active" end>
              {authenticated ? "Logga ut" : "Logga in"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

/*<li>
            <NavLink to="/search" activeclassname="active" end>
              Sök efter kurser
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved" activeclassname="active">
              Sparade kurser
            </NavLink>
          </li>*/

export default Navbar;
