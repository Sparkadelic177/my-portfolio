import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="headerSection">
      <li id="name">Sparky Evangelista</li>
      <ul className="gotos">
        <li className="nav">
          <Link to="/my-portfolio">Home</Link>
        </li>

        <li className="nav">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="nav">
          <Link to="/youtube">YouTube</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
