import React from 'react'
import './news.css';
import dir_image from '../../assets/image 10.png'
function News() {
  return (
    <>
    <h1>News Feed</h1>
    <div className='Container'>
        
        <div className='box-left'>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           <br></br>Architecto a vitae illum culpa sit quod aperiam? Velit
              quisquam
           <br></br>
            eos excepturi suscipit,
              modi nobis voluptate at pariatur corrupti 
           <br></br>
           aperiam minus odit!</p>
           <div className='box-left-button'>
            <h5>Know More</h5>
           </div>
        </div>
        <div className='box-right'>
         <h2>News and Announcement</h2>
        </div>
    </div>
    <h1>Directors Message</h1>
    <div className='container2'>
        <div className='images'>
        <img src={dir_image} alt="vltc" />
        </div>
        <div className='dir_msg'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br></br> Unde modi expedita accusamus ipsum velit. Reiciendis
            <br></br> veritatis explicabo consequuntur nostrum voluptatum, 
            <br></br>a omnis esse mollitia amet vitae rerum dolor ipsum nemo?
            <br></br>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br></br> Unde modi expedita accusamus ipsum velit. Reiciendis
            <br></br> veritatis explicabo consequuntur nostrum voluptatum, 
            <br></br>a omnis esse mollitia amet vitae rerum dolor ipsum nemo?</p>
            <div className='dir_name'>
              <p>Prof. Narayan Prasad Upadhayay</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default News