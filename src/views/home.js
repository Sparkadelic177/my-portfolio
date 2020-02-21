import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home_container">
      <section class="heroSection">
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
      </section>
      <section class="aboutmeSection">
        <div class="aboutme-text">
          <h1>Yes you guessed it right, my real name is Sparky.</h1>
          <br />
          <p class="text">
            I am a Application Developer at NYC Department of Citywide
            Administrative Services (DCAS) and I love the art of developing and
            creating things from scratch and being able to solve complex
            problems. I am fueled with passion by innovation and ground breaking
            technologies in hopes that I get to work them someday.
            <br />
            <a
              href="https://drive.google.com/file/d/19tCyEFs4sOtZSrho0C6R5YI204dDlejf/view?usp=sharing"
              target="_blank"
              id="resume"
            >
              Resume
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
