import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="headerSection">
      <li id="name">Sparky Evangelista</li>
      <ul className="gotos">
        {/* <li className="nav">
          <Link className="headerLink" to="/my-portfolio">
            Home
          </Link>
        </li> */}
        {/* <li className="nav">
          <Link className="headerLink" to="/blogs">
            Blogs
          </Link>
        </li> */}

        <li className="nav">
          <a
            className="headerLink"
            href="https://drive.google.com/file/d/19tCyEFs4sOtZSrho0C6R5YI204dDlejf/view?usp=sharing"
            target="_blank"
            id="resume"
          >
            Resume
          </a>
        </li>

        {/* <li className="nav">
          <Link to="/youtube">YouTube</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Header;
