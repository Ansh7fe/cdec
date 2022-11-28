
import React from 'react';
import './App.css';
import HomeHeader from './components/Main/HomeHeader';
import Imageslider from './components/Main/image_slider';
import HomeHeader from './components/Main/HomeHeader';
import News from './components/Main/News';
import HeaderImg from './components/Podcasts/Header';

function App () {
  return (
    <>
     <Imageslider />
      <News />
      <HomeHeader />
      <HeaderImg />
    </>
  );
}

export default App;
