import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";

const NavLinks = ({ toggle }) => {
  return (
    <div className="nav-links">
      {links?.map(({ id, text, path, icon }) => (
        <NavLink
          key={id}
          to={path}
          onClick={toggle}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          end
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
