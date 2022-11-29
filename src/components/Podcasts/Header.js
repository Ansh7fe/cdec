import React from 'react'
import podcast_image from '../../assets/unsplash_OKLqGsCT8qs.png';
import './Header.css'
function HeaderImg() {
  return (
    <>
    <div className='Container'>
    <div className='Container1'>
       
            <div className='ContainerImg'>
              
                <div className='ContainerImg-a'>
                    <div className='ContainerImg-a-1'>
                        <h3>Watch our latest Podcast!!!</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='Container2'>
          <div className='Container2-text'>
            <h3>Our Podcasts</h3>
          </div>
          <div className='slider'>
          <div className='Container2-Slider'>
          
          {/* <span className="dot"></span> */}
          <div className='dot'></div>
          </div>
        </div>
        </div>
    </>
  )
}

export default HeaderImg;