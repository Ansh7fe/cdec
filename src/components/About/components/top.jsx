import React from "react";
import "./top.css";
function Top () {
    return (
        <div className="top">
            <div className="about_div">
                <div className="about">
                    <p>
                        ABOUT
                    </p>
                </div>
                <div className="dot_container">
                    <div className="red_dot"></div>
                    <div className="yellow_dot"></div>
                    <div className="green_dot"></div>
                </div>
                <div className="cdec">
                    <p>CDEC</p>
                </div>
                <div className="mj">
                    <p>MNIT&nbsp;JAIPUR</p>
                </div>
            </div>
        </div>
    );
}
export default Top;