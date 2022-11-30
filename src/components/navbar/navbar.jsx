import React, { Component } from 'react'
import "./navbar.css";
// import "./INSTAG";

const NavBar = function() {
	return <div>

		{/* <div className="top">
			<div className="left">
				<img src={require('../../assets/Mnit_logo.png')} />
				<div>
					<p className="upper">CDEC</p>
					<p className="lower">MALVIYA NATIONAL INSTITUTE OF TECHNOLOGY JAIPUR</p>
				</div>
			</div> */}
		{/* <div className="right">
				<div>
					<p>Call us at : 9549219622</p>
					<p>Email us : cdec@mnit.ac.in</p>
				</div>
				<div className='rectangle'></div>
				<a href="">
					<img src={require("../../assets/INSTAGRAM.jpg")} alt="ig" />
				</a>
				<a href="">
					<img src={require("../../assets/Vector.jpg")} alt="yt" />
				</a>
				<a href="">
					<img src={require("../../assets/Vector (1).jpg")} alt="in" />
				</a>
			</div>
		</div> */}

		<div className="bottom">
			<img src='../../assets/Mnit_logo.png' />
			<div className="navmenu-option">
				<button>
					<a className='home_btn' href='/'>Home</a>
				</button>
			</div>
			{/* <div className="navmenu-option dropdown">
                <button className='dropbtn'>
                    button
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> */}
			<div className="navmenu-option drop dropdown">
				<button className='dropbtn'>
					About CDEC
					<img src={require("../../assets/Arrow_down.png")} alt="" />
				</button>
				<div class="dropdown-content">
					<a href="/about">About CDEC</a>
					<a href="#">About infrastructure</a>
				</div>
			</div>
			<div className="navmenu-option drop dropdown">
				<button className='dropbtn'>
					Courses
					<img src={require("../../assets/Arrow_down.png")} alt="" />
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
					<img src={require("../../assets/Arrow_down.png")} alt="" />
				</button>
				<div class="dropdown-content">
					<a href="#">Podcast</a>
					<a href="https://nptel.ac.in">NPTEL</a>
					<a href="https://gian.iitkgp.ac.in">GIAN</a>
					<a href="https://www.aicte-india.org">AICTE (ATAL)</a>
					<a href="https://swayam.gov.inp">SWAYAM</a>
					<a href="#">MooC</a>
					<a href="#">TQIPj</a>
				</div>
			</div>
			<div className="navmenu-option drop dropdown">
				<button className='dropbtn'>
					Downloads
					<img src={require("../../assets/Arrow_down.png")} alt="" />
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