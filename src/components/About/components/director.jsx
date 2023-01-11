import React from "react";
import "./director.css";
import dir_img from "./imageDir.png";
function Director () {
    return (
        <div className="dfull">
            <div className="dsmall">
                <p>DIRECTOR</p>
            </div>
            <div className="dimg" >
                <img src={dir_img} alt="" />
            </div>
            <div className="dname">
                <p>Prof. Narayan Prasad Padhy</p>
            </div>
        </div>
    );
}
export default Director;