import React, { Component } from "react";
import "../styles/home.css";

export default class Home extends Component {
  render() {
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
              I am a senior in Queens College studying Computer Science and
              co-founder of CollabTrade. I love the art of developing and
              creating things from scratch and being able to solve complex
              problems. I am fueled with passion by innovation and ground
              breaking technologies in hopes that I get to work them someday. I
              currently intern at NYC Department of Citywide Administrative
              Services (DCAS) as a Web Developer where I maintain both their
              internet and intranet sites using Teamsite and Umbraco CMS. I have
              been apart of the redesign of both sites to make them mobile
              friendly and accessible, ensuring there are no barriers that
              prevent interaction with, or access to, the sites by people with
              disabilities. I am actively searching for a new intern or full
              time position as a Full Stack Developer to continue my progress in
              learning new things.
              <br />
              <a href="../techResume.pdf" target="_blank" id="resume">
                Resume
              </a>
            </p>
          </div>
        </section>
      </div>
    );
  }
}
