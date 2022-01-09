import React from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
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
      <div className="header__container">
        <div className="header">
          <img
            className="header__portrait"
            src={require("./assets/Abner_Pena_Portrait.jpg")}
            alt="Abner Peña Portrait"
          />
          <div className="header__body">
            <Information />
            <Links />
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
      </div>
    </div>
  );
}

export default App;
