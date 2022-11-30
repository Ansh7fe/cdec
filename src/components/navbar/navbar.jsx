import React, { Component } from 'react'
import "./navbar.css";
import "./navbar2.css";
import 'https://kit.fontawesome.com/a076d05399.js';


const NavBar = function () {
    return <div className='navbar-main'>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <div className="top">
            <div className="left">
                <img src={require("./Mnit_logo.png")} alt='' />
                <div>
                    {/* <p className="upper">CONTINUING AND DIGITAL EDUCATION CENTRE</p> */}
                    <p className='upper-left'>CONTINUING AND DIGITAL EDUCATION CENTRE</p>
                    <p className="lower-left">MALVIYA NATIONAL INSTITUTE OF TECHNOLOGY JAIPUR</p>
                </div>
            </div>
            <div className="right">
                <div>
                    <p>Call us at : 9549219622</p>
                    <p>Email us : cdec@mnit.ac.in</p>
                </div>
                <div className='rectangle'></div>
                <img src={require("./INSTAGRAM.jpg")} alt="ig" />
                <img src={require("./Vector.jpg")} alt="yt" />
                <img src={require("./Vector (1).jpg")} alt="in" />
            </div>
            {/* <div className='hamburger'>
                <div className="top-ham"></div>
                <div className="mid-ham"></div>
                <div className="bot-ham"></div> */}
            {/* <input type="checkbox" name="hamburger" id="ham-box" /> */}
            {/* <input type="checkbox" id="ham-box" />
                <label for="ham-box">
                    <i class="fas fa-bars" id="btn"></i>
                    <i class="fas fa-times" id="cancel"></i>
                </label>
            </div> */}
            {/* <button id="hamburger-menu">
                <nav id="sidebar-menu">
                    <h3>Menu</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Store</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </button> */}
            <input type="checkbox" id="hamburger-input" class="burger-shower" />
            <label id="hamburger-menu" for="hamburger-input">
                <nav id="sidebar-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About CDEC</a></li>
                        <li><a href="#">About infrastructure</a></li>
                        <li><a href="#">Certificate courses</a></li>
                        <li><a href="#">Short Term Courses</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Podcast</a></li>
                        <li><a href="#">NPTEL</a></li>
                        <li><a href="#">GIAN</a></li>
                        <li><a href="#">AICTE (ATAL)</a></li>
                        <li><a href="#">SWAYAM</a></li>
                        <li><a href="#">MooC</a></li>
                        <li><a href="#">TQIPj</a></li>
                        <li><a href="#">Downloads</a></li>
                        <li><a href="#">Formats</a></li>
                    </ul>
                    <div className="navmenu-option login">
                        <button className='login-btn'>
                            LOGIN
                        </button>
                    </div>F
                </nav>
            </label>
            <div class="overlay"></div>
            {/* <div className="sidebar">
                <header>Menu</header>
                <ul>
                    <li>
                        <a href="#"><i class="fas fa-qrcode"></i>Dashboard</a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-link"></i>Shortcuts</a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-stream"></i>Overview</a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-calendar-week"></i>Events</a>
                    </li>
                    <li>
                        <a href="#"><i class="far fa-question-circle"></i>About</a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-sliders-h"></i>Services</a>
                    </li>
                    <li>
                        <a href="#"><i class="far fa-envelope"></i>Contact</a>
                    </li>
                </ul>
            </div> */}
        </div>
        <div className="bottom">
            <div className="navmenu-option">
                <button>
                    Home
                </button>
            </div>
            <div className="navmenu-option drop dropdown">
                <button className='dropbtn'>
                    About CDEC
                    <img src={require("./Arrow_down.png")} alt="" />
                </button>
                <div class="dropdown-content">
                    <a href="#">About CDEC</a>
                    <a href="#">About infrastructure</a>
                </div>
            </div>
            <div className="navmenu-option drop dropdown">
                <button className='dropbtn'>
                    Courses
                    <img src={require("./Arrow_down.png")} alt="" />
                </button>
                <div class="dropdown-content">
                    <a href="#">Certificate Courses</a>
                    <a href="#">Short-term Courses</a>
                </div>
            </div>
            <div className="navmenu-option">
                <button>
                    Blogs
                </button>
            </div>
            <div className="navmenu-option drop dropdown">
                <button className='dropbtn'>
                    Quick Links
                    <img src={require("./Arrow_down.png")} alt="" />
                </button>
                <div class="dropdown-content">
                    <a href="#">Podcast</a>
                    <a href="#">NPTEL</a>
                    <a href="#">GIAN</a>
                    <a href="#">AICTE (ATAL)</a>
                    <a href="#">SWAYAM</a>
                    <a href="#">MooC</a>
                    <a href="#">TQIPj</a>
                </div>
            </div>
            <div className="navmenu-option drop dropdown">
                <button className='dropbtn'>
                    Downloads
                    <img src={require("./Arrow_down.png")} alt="" />
                </button>
                <div class="dropdown-content">
                    <a href="#">Formats</a>
                </div>
            </div>
            <div className="navmenu-option login">
                <button className='login-btn'>
                    LOGIN
                </button>
            </div>
        </div>
        <img src="./" alt="" />

    </div>
}

export default NavBar;