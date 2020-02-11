import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="headerSection">
      <li id="name">Sparky Evangelista</li>
      <div
        class="g-ytsubscribe"
        data-channelid="UCwSKlD8oNKTnQ19Tbe5stUg"
        data-layout="default"
        data-theme="dark"
        data-count="default"
      ></div>
    </div>
  );
};

export default Header;
