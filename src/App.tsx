import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import "./App.css";

export default () => (
  <Router>
    <div id="main">
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  </Router>
);
