import React from 'react'
import './news.css';
import dir_image from '../../assets/image 10.png'
function News () {
  return (
    <>
      <h1 style={{ color: '#5624d0', padding: '15px' }}>News Feed</h1>
      <div className='newsContainer'>
        <div className='box-left'>
          The online teaching in the times of COVID pandemic had its challenges and it has highlighted the need for good quality digital online courses and technical content to be made available to our students at MNIT Jaipur in case of any such possible future eventuality.
          It is proposed to establish ‘Continuing and Digital Education Centre (CDEC)’.
          <br></br>
          The proposed Continuing and Digital Education Centre (CDEC) at MNIT will facilitate organizing programmes/events such as Self-financed Short Term Courses, AICTE-QIP Courses, TEQIP sponsored Courses, GIAN Courses, NPTEL Courses, SWAYAM Courses, Industry Specific courses,Credit-based courses, Courses for Government schemes like GATI Shakti, Skill India.
          <div className='box-left-button'>
            <a href='/about'>Know More</a>
          </div>
        </div>
        <div className='box-right'>
          <h2>News and Announcement</h2>
        </div>
      </div>
      <h1 style={{ color: '#5624d0', padding: '1em' }} >MESSAGE FROM DIRECTOR</h1>
      <div className='directorContainer'>
        <div className='directorImage'>
          <img src={dir_image} alt="vltc" />
        </div>
        <div className='dir_msg'>
          Welcome to Malaviya National Institute of Technology Jaipur. Being one of the oldest NITs, the institute has a rich heritage of sixty years producing world class engineers, managers, architects and scientists.
          Ranked 46th nationally in the NIRF ranking-2022, the institute offers learning opportunities for undergraduate, postgraduate students, and researchers in various domains. Some of the brightest minds in the country get selected in this institute, as it stood at second position among all NITs based upon opening all India admission ranks in 2021-22, and is always among top five NITs based on average all India admission ranks.
          <div className='dir_name'>
            <p>Prof. Narayan Prasad Upadhayay</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default News