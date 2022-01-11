import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Information from "./components/Header/Information";
import Links from "./components/Header/Links";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__container--item">
          <div className="header__portrait--container">
            <img
              className="header__portrait"
              src={require("./assets/Abner_Pena_Portrait.jpg")}
              alt="Abner Peña Portrait"
            />
          </div>
          <div className="header__body">
            <Information />
            <Links />
          </div>
        </div>
      </div>
      <div className="app__container app__body">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contactMe" element={<ContactMe />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
