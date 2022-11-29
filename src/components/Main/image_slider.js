import SimpleImageSlider from "react-simple-image-slider";
import './image_slider.css'
import React from "react";
const images = [

  { url: 'https://cel.mnit.ac.in/static/images/about-img.jpg' },
  { url: './assets/about-img 1.png' },
];

const Imageslider = () => {
  return (
    <div className="slider_image">
      <SimpleImageSlider
        width={1530}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default Imageslider;