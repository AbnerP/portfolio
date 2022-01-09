import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="app">
      APP
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/contactMe">ContactMe</a></li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contactMe" element={<ContactMe/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
