import React from "react";
import Home from "../src/views/home";
import Content from "../src/views/content";
import Projects from "../src/views/projects";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router className="App">
      <Header />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/content" component={Content} /> */}
      {/* <Route exact path="/projects" component={Projects} /> */}
      <Footer />
    </Router>
  );
}

export default App;
