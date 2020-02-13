import React, { useState, useEffect } from "react";
import "../styles/projects.css";
import Table from "../components/table";
import axios from "axios";

//here I wull use the githib api and have new projects show up all the time
//we need the name, description, html_url

const Projects = () => {
  const [java, setJava] = useState([]);
  const [javaScript, setJS] = useState([]);

  const states = [
    [java, "Java"],
    [javaScript, "JavaScript"]
  ];

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Sparkadelic177/repos", {
        headers: { Accept: "application/vnd.github.v3+json" }
      })
      .then(res => {
        console.log(res.data);
        let java = res.data.filter(data => data.language === "Java");
        let js = res.data.filter(data => data.language === "JavaScript");
        setJava([...java]);
        setJS([...js]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="content_container">
      {states.map(state => {
        return (
          <section className="tableSection">
            <Table data={state[0]} language={state[1]} />
          </section>
        );
      })}
    </div>
  );
};

export default Projects;
