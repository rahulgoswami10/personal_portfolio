import React from 'react'
import './header.css'
// import CTOA from './CTOA'
// import ME from '../../assets/me5.png'
// import Socials from './Socials'
// import asteriods from '../../assets/live_Asteriod.mp4'
// import astraunut from '../../assets/Astraunut.mp4'
// import nightRide from '../../assets/night_ride.mp4'
// import bg_video1 from '../../assets/bg_video1.mp4'
import binary_coder from '../../assets/binary_coder.mp4'
// import technology from '../../assets/technology.mp4'
// import myresume from '../../assets/MyResume.pdf'
import mycv from '../../assets/MyCV.pdf'

import AOS from 'aos'
// import Typical from 'react-typical'
import 'aos/dist/aos.css'
import { Typewriter } from 'react-simple-typewriter'

AOS.init({
  offset: 6,
  duration: 800,
  mirror: false,
});


const Header = () => {
  return (
    // <header>
    <div className="main">
        <div className="overlay"></div>
         <video src={binary_coder} autoPlay loop muted /> 
         {/* <div className="container header__container"></div> */}
        <div className="content">
          <div className="typo">
            <span style={{ fontWeight: 'bold' }}>
            { /* Style will be inherited from the parent element */}
              <Typewriter
                words={['Hi Pal',"I'm Rahul",'Web Developer','Web Designer','Freelancer']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1800}
              />
            </span>
          </div>
        {/* <CTOA /> */}
        {/* <Socials /> */}

          {/*<div className="me">
            <img src={ME} alt="me" />
            </div>*/}

        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
            <div className="resume">
              <a href={mycv} className='btn'>Download CV</a>
            </div>
            <div className="scroll_down">
              <a href="#about">.</a>
            </div>
        </div>
    </div>    
    // </header>
  )
}

export default Header