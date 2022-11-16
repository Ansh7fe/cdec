import React from "react";
import Card from "./card";
import "./highlights.css";

function Highlights() {
  return (
    <div className="Hsection">
      <div className="Title">HIGHLIGHTS</div>
      <div className="flexbox">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div></div>
    </div>
  );
}

export default Highlights;
