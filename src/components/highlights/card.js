import React from "react";

function Card() {
  return (
    <div>
      <div className="Container">
        <div className="Event">
          <div className="cover"></div>

          <div className="banner">
            <div className="banner_content"> PODCAST WITH OUR DIRECTOR</div>
          </div>
          <div className="banner_hover">
            <div className="banner_content_hover">
              {" "}
              PODCAST WITH OUR DIRECTOR
            </div>
            <div className="watch_btn">
              <div className="btn_text">Watch Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
