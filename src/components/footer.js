import React from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <section className="footerSection headerSection">
      <li id="name">Sparky Evangelista</li>
      <ul className="gotos">
        <li className="items">
          <a href="https://github.com/Sparkadelic177">
            <img
              className="item-image"
              src={require("../images/github.png")}
              alt="instagram"
            />
          </a>
        </li>

        <li className="items">
          <a href="https://twitter.com/sparkyBrown_E">
            <img
              className="item-image"
              src={require("../images/twitter.svg")}
              alt="twitter"
            />
          </a>
        </li>
        <li className="items">
          <a href="https://linkedin.com/in/sparkyevangelista/">
            <img
              className="item-image"
              src={require("../images/linkedin.svg")}
              alt="linkedin"
            />
          </a>
        </li>
        <li className="items">
          <a href="https://medium.com/@sparkyevangelista">
            <img
              className="item-image medium"
              src={require("../images/medium.png")}
              alt="medium"
            />
          </a>
        </li>
        <li className="items">
          <a href="mailto:sparkyevangelista@gmail.com">
            <img
              className="item-image"
              src={require("../images/telegram.svg")}
              alt="telegram"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
