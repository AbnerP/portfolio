import React from "react";
import "./Header.css";
import Information from "./Information";

function Header() {
  return (
    <div className="header">
      <div className="header__portrait--container">
        <img
          className="header__portrait--image"
          src={require("../../assets/Abner_Pena_Portrait.jpg")}
          alt="Abner Peña Portrait"
        />
      </div>
      <div className="header__body">
        <Information />
      </div>
    </div>
  );
}

export default Header;
