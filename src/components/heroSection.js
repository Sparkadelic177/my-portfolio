import React from "react";

const HeroSection = () => {
  return (
    <>
      <img
        src={require("../images/sparky.jpg")}
        alt="Sparky Brown Evangelista"
        class="sparky"
      />
      <div class="heroText">
        <h1>
          Spark
          <span id="dot">.</span> y{" "}
        </h1>
        <br />
        <h3>/'spärkē/</h3>
        <br />
        <p class="definition">
          adjective
          <span class="language">British</span>
        </p>
        <p>1. lively and high-spirited.</p>
        <p>"His sparky personality"</p>
        <br />
        <p class="definition">
          noun
          <span class="language">Informal British</span>
        </p>
        <p>
          {" "}
          A<span class="crossedout">Electrian</span> Developer{" "}
        </p>
      </div>
    </>
  );
};

export default HeroSection;
