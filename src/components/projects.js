import React, { useState, useEffect } from "react";
import "../styles/projects.css";
import Table from "./table";
import axios from "axios";

//here I wull use the githib api and have new projects show up all the time
//we need the name, description, html_url

const Projects = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Sparkadelic177/repos", {
        headers: { Accept: "application/vnd.github.v3+json" },
      })
      .then((res) => {
        setLanguages([...res.data]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="content_container">
      <h2 style={{ textAlign: "Center" }}>Github Repos</h2>
      <section className="tableSection">
        <Table data={languages} />
      </section>
    </div>
  );
};

export default Projects;
