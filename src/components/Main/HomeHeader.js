import React from 'react';
import Button from '@mui/material/Button';
import './HomeHeader.css';
import vltc_image from '../../assets/VLTC IMAGE BOTTOM.png';
function HomeHeader () {
  return (
    <>
      <h1>HIGHLIGHTS</h1>
      <div className='Container'>

        <figure className="snip1273">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample72.jpg" alt="sample72" />
          <figcaption>
            <div className='box'>
              <h3>HTML/CSS COURSE</h3>
              <Button variant="contained">Buy Now</Button>
            </div>
          </figcaption>
          {/* <a href="/"></a> */}
        </figure>
        {/* <div className='text-on-image'>
      <h3> HTML/CSS COURSE</h3>
      
       </div> */}


        <figure className="snip1273">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample86.jpg" alt="sample86" />
          <figcaption>
            <div className='box'>
              <h3>BLOCKCHAIN TECHNOLOGY</h3>
              <Button variant="contained">Buy Now</Button>
            </div>
          </figcaption>
          {/* <a href="/"></a> */}
        </figure>


        <figure className="snip1273">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample86.jpg" alt="sample86" />
          <figcaption>
            <div className='box'>
              <h3>CYBERSECURITY</h3>
              <Button variant="contained">Buy Now</Button>
            </div>

          </figcaption>
          {/* <a href="/"></a> */}
        </figure>
      </div>
      <div className='Container'>

        <figure className="snip1273">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample72.jpg" alt="sample72" />
          <figcaption>
            <div className='box'>
              <h3>HTML/CSS COURSE</h3>
              <Button variant="contained">Buy Now</Button>
            </div>
          </figcaption>
          {/* <a href="/"></a> */}
        </figure>
        {/* <div className='text-on-image'>
      <h3> HTML/CSS COURSE</h3>
      
       </div> */}


        <figure className="snip1273">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample86.jpg" alt="sample86" />
          <figcaption>
            <div className='box'>
              <h3>BLOCKCHAIN TECHNOLOGY</h3>
              <Button variant="contained">Buy Now</Button>
            </div>
          </figcaption>
          {/* <a href="/"></a> */}
        </figure>


        <figure className="snip1273">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample86.jpg" alt="sample86" />
          <figcaption>
            <div className='box'>
              <h3>CYBERSECURITY</h3>

              <Button variant="contained">Buy Now</Button>
            </div>

          </figcaption>
          {/* <a href="/"></a> */}
        </figure>
      </div>
      <div className='Images'>
        <img src={vltc_image} alt="vltc" />
      </div>

    </>
  );
}

export default HomeHeader;