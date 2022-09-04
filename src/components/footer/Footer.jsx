import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
// import {MdOutlineArrowForwardIos} from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
  offset: 300,
  duration: 1250,
  mirror: false,
});

const Footer = () => {
  return (
    <footer>
      <a href="#about" className='footer__logo'  data-aos="fade-left"><span className="danger">RA</span><span className="white">H</span><span className="green">UL</span></a>
      <h4 className="state__name">Malda</h4>
      <h5>WB 732101, India</h5>    

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">My Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        {/* <li><a href="#testimonials"><MdOutlineArrowForwardIos/>Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><AiOutlineFacebook /></a>
        <a href="https://instagram.com"><AiOutlineInstagram /></a>
        <a href="https://twitter.com"><AiOutlineTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rahul Goswami | <span className="red">All Rights Reserved</span></small>
      </div>
    </footer>  
   )
}      
export default Footer