import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Nav from "./Nav";

/* 
  Next steps:
    - create to do list in dashboard
    - add links to my github
    - add some kind of API data fetch & display (weather app?)
    - 
 */

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
