import React from "react";
import Project from "../components/projects";
import SocialMedia from "../components/socialMedia";
import AboutMeSection from "../components/aboutMeSection";
import HeroSection from "../components/heroSection";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home_container">
      <section class="heroSection">
        <HeroSection />
      </section>
      <section class="aboutmeSection">
        <AboutMeSection />
      </section>
      {/* <section className="socialMedia">
        <SocialMedia />
      </section> */}
      <section className="projectSection">
        <Project />
      </section>
    </div>
  );
};

export default Home;
