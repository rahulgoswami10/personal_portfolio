import React from 'react'
import './header.css'
import CTOA from './CTOA'
import ME from '../../assets/me5.png'
import Socials from './Socials'
import AOS from 'aos'
// import Typical from 'react-typical'
import 'aos/dist/aos.css';

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
       <h5 className="text-light" data-aos="fade-right">FullSack Developer</h5>
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