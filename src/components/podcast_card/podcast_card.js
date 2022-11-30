import React from "react";
import "./podcard.css";

function PodCard() {
  return (
    <div className="Card">
      <div className="container">
        <div className="cover1"></div>
        <div className="podcastTitle">Podcast 2</div>
        <div className="podcastby">By Radhakrishanan</div>
        <div className="bypost">Assistance Prof. at MNIT Jaipur (CSE Dep.)</div>
        <div className="subinfo">
          {" "}
          <div className="miniContainer1"> Date: 25 Sep. 2021</div>
          <div className="miniContainer1 pos"> 4k+ views</div>
        </div>
        <button className="button">Watch Now</button>
      </div>
    </div>
  );
}

export default PodCard;
