import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="headerSection">
      <li id="name">Sparky Evangelista</li>
      <ul className="gotos">
        <li className="items">
          <Link to="/">Home</Link>
        </li>
        {/* <li className="items">
          <Link to="/content">Content</Link>
        </li>
        <li className="items">
          <Link to="/projects">Projects</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Header;
