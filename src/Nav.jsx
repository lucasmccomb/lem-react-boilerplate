import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const routes = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Dashboard", route: "/dashboard" },
];

const Nav = () => {
  return (
    <div className="Nav-wrap">
      <ul className="Nav-list">
        {routes.map((route) => (
          <li className="Nav-list-item">
            <Link className="Nav-link" to={route.route}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
