import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const routes = [
  { name: "Home", route: "/", id: 1 },
  { name: "About", route: "/about", id: 2 },
  { name: "Dashboard", route: "/dashboard", id: 3 },
];

const Nav = () => {
  return (
    <div className="Nav-wrap">
      <ul className="Nav-list">
        {routes.map((route) => (
          <li className="Nav-list-item" key={route.id}>
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
