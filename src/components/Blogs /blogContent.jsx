import React from "react";
import "./blogs.css";

function BlogContent(props) {
  return (
    <div className="blog-content">
      <div className="boxy">
        <div className="bc-border-1">
          27
          <br /> May
        </div>
        <div className="bc-g-2">
          15 Disadvantages Of Freedom And How You Can Workaround It.
        </div>
      </div>
      <div className="boxy1">
        <div className="inner">
          <div className="bc-g-3">@samurai2099s</div>
        </div>
        <div className="innerboxy">
          <div className="bc-g-4">
            Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            <div style={{ border: "none" }}>
              <a href="">...read more</a>
            </div>
          </div>
          <div className="bc-g-5"></div>
          <div className="bc-g-6">
            <a href='' >#mentalhealth</a>
            <a href ='' >#meditation</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
