import React from "react";
import logo from "./logo.svg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Basic boilerplate with: </p>
        <ul className="Home-list">
          <li>lodash</li>
          <li>scss</li>
          <li>react-router-dom</li>
        </ul>
      </header>
    </div>
  );
};

export default Home;
