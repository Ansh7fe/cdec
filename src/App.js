
import React from 'react';
import './App.css';
import Imageslider from './components/Main/image_slider';
import HomeHeader from './components/Main/HomeHeader';
import News from './components/Main/News/News';
import HeaderImg from './components/Podcasts/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/About/About';
import { Routes, Route, Link } from "react-router-dom";
import Highlights from './components/Highlights/Highlights';
import WatchNow from './components/PodcastPage/WatchNow';
import Blogs from './components/Blogs /blogs';
import Footer from './components/Footer/Footer';
function App () {
  return (
    <>
      <div className='nav_bar'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={[<Imageslider />, <News />, <Highlights />]} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/podcast' element={<WatchNow />} />
      </Routes>
      <Routes>
        <Route path='/blog' element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
