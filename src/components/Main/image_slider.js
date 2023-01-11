import SimpleImageSlider from "react-simple-image-slider";
import './image_slider.css'
import React from "react";
const images = [

  { url: 'https://cel.mnit.ac.in/static/images/about-img.jpg' },
  { url: 'https://mnit.ac.in/Images/about_images/vltcImg.png' },
  { url: 'https://mnit.ac.in/students/images/mnit_infrastructure_photos_8.jpg' }
];

const Imageslider = () => {
  return (
    <div className="slider_image">
      <SimpleImageSlider
        width="100%"
        height='504px'
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default Imageslider;