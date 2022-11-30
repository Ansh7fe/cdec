
import React from 'react';
import './App.css';
import Imageslider from './components/Main/image_slider';
import HomeHeader from './components/Main/HomeHeader';
import News from './components/Main/News';
import HeaderImg from './components/Podcasts/Header';
import NavBar from './components/navbar/navbar';
import About from './components/About/About';
import { Routes, Route, Link } from "react-router-dom";
import Highlights from './components/Highlights/Highlights';
import WatchNow from './components/Blogs/WatchNow';
function App () {
  return (
    <>
      <div className='nav_bar'>
        <NavBar />
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


    </>
  );
}

export default App;
