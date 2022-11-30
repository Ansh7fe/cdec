import React from "react";
import Card from "./Card";
import "./highlights.css";

function Highlights () {
    return (
        <div className="Hsection">
            <div className="Title">HIGHLIGHTS</div>
            <div className="highlightContainer">
                <Card name='Podcast with Director' link='#' />
                <Card name='HTML Course' link="#" />
                <Card name='DSA' link="#" />
                <Card name='Risk Management' link="#" />
                <Card name='Cyber Security' link="#" />
            </div>
            <div></div>
        </div>
    );
}

export default Highlights;