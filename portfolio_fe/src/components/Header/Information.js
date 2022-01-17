import React from "react";
import Logos from "./Logos";
import "./Information.css"

function Information() {
  return (
    <div className="info">
      <div className="info__credentials">
        <h1 className="info__credentials--name">Abner X Peña</h1>
        <h2 className="info__credentials--email">abnrr.pena@gmail.com</h2>
      </div>
      <Logos />
    </div>
  );
}

export default Information;
