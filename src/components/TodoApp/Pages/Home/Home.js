import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-header__title">Tasks</h1>
        <div className="home-header__menu">
          <button className="home-header__menu-btn btn-login">
            <Link to="/login">login</Link>
          </button>
          <button className="home-header__menu-btn btn-register">
            <Link to="/register">register</Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;
