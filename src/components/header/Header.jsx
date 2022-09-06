import React from 'react'
import './header.css'
import CTOA from './CTOA'
import ME from '../../assets/me5.png'
import Socials from './Socials'
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
    <header>
      <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1><span className="danger">Rahul</span><span className="blue"> Goswami</span></h1>
       <h5 className="text-light">
        <span style={{ fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['FullSack Developer', 'Web Designer', 'Freelancer', 'Self-Believer']}
            loop={Infinity}
            cursor
            cursorStyle='.'
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </span>
        </h5>
       <CTOA />
       <Socials />

       <div className="me">
        <img src={ME} alt="me" />
       </div>

       <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header