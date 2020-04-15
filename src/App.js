import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Home, Blogs } from "./views";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  console.log();
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/my-portfolio" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        {/* <Route exact path="/youtube" component={YouTube} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
