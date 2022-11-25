import React from "react";
import Card from "./podcast_card";
import "./podcard.css";

function Podcast_view() {
  return (
    <div className="Viewsection">
      <div className="Title">Our View</div>
      <div className="flexbox">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div></div>
    </div>
  );
}

export default Podcast_view;
