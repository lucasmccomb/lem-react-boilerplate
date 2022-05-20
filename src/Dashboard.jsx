import React from "react";
import "./Dashboard.scss";
import WeatherCard from "./WeatherCard";

const Dashboard = () => {
  return (
    <div className="Dashboard-wrap">
      <header className="Dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div>
        <WeatherCard />
      </div>
    </div>
  );
};

export default Dashboard;
