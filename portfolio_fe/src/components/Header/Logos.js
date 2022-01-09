import React from "react";
import "./Logos.css"
function Logos() {
  return (
    <div>
        <a href="https://www.linkedin.com/in/abnerpena/" target="_blank">
      <img
        className="logo--linkedIn"
        src={require("../../assets/linkedin-square-logo-comments-linkedin-icon-black-11563087424lpctodfamj.png")}
        alt="Abner Peña LinkedIn"
      />
      </a>
      <a href="https://github.com/AbnerP" target="_blank">
          <img
        className="logo--github"
        src={require("../../assets/GitHub-Mark-32px.png")}
        alt="Abner Peña GitHub"
      /></a>
        
    </div>
  );
}

export default Logos;
