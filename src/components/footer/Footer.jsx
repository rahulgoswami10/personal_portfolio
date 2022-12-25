import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
// import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
// import {SiGmail} from 'react-icons/si'
// import {FaChevronUp} from 'react-icons/fa'
import {FiArrowUp} from 'react-icons/fi'
// import {MdOutlineArrowForwardIos} from 'react-icons/md'
// import { UilEnvelopes } from '@iconscout/react-unicons'
// import { UilEnvelopeAlt } from '@iconscout/react-unicons'
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
      <a href="#" className='footer__logo'  data-aos="fade-left"><span className="danger">RA</span><span className="white">H</span><span className="green">UL</span></a>
      <h4 className="state__name">Malda</h4>
      <h5>WB 732101, India</h5>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">My Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        {/* <li><a href="#testimonials"><MdOutlineArrowForwardIos/>Testimonials</a></li> */}
        <li><a href="#faqs">FAQ's</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><AiOutlineFacebook /></a>
        <a href="https://instagram.com"><AiOutlineInstagram /></a>
        <a href="https://instagram.com"><AiOutlineTwitter /></a>
        <a href="https://www.linkedin.com/in/rahul-goswami-452918214/"><AiFillLinkedin /></a>
      </div>

      {/*---- News Letter ----*/}
      <h3>Subscribe To Newsletter</h3>
      <div className="footer__newsletter">
        {/* <h3>Subscribe for Newsletter</h3> */}
        <input type="email" placeholder="Enter your email" name="email" />
        <button id="button">Subscribe</button>
      </div>

      {/*-- CopyRight Part --*/}
      <div className="footer__copyright">
        <small>&copy; Rahul Goswami | <span className="red">All Rights Reserved</span></small>
      </div>
      {/*------ Pre Loader ------*/}
      <div className="footer__preloader">
        <a href="#" className="btn"><FiArrowUp /></a>
      </div>
    </footer>
   )
}
export default Footer