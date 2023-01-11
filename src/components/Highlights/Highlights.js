import React from "react";
import Card from "./Card";
import "./highlights.css";

function Highlights () {
    return (
        <div className="Hsection">
            <div className="Title">HIGHLIGHTS</div>
            <div className="highlightContainer">
                <Card name='Podcast with Director' link='https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60' />
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