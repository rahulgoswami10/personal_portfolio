import React from 'react'
import './exclusive.css'
import IMG1 from '../../assets/portfolio13.png'
import {BsEyeFill} from 'react-icons/bs'
// import { designs } from 'browserslist'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset: 290,
  duration: 1050,
  mirror: true,
});

const Exclusive = () => {
  return (
    <section>
        <h5>Recent Designs</h5>
        <h2 className="exclusive" data-aos="zoom-in">Exclusive Design</h2>
        <div className="container exclusive__container">
            <article className="exclusive__item">
                    <div className="exclusive__item-image">
                      <img src={IMG1} alt="socialmedia"/>
                    </div>
                    <h3>Responsive Social Media Design</h3>
                    <h5>HTML &nbsp; CSS &nbsp; Js</h5>
                    <div className="exclusive__item-cta">
                        <a href="https://bingosocials.netlify.app" className='btn' target='_blank' rel="noreferrer">SEE LIVE <BsEyeFill className='portfolio__item-icon'/></a>
                    </div>
                </article>
        </div>
    </section>
  )
}

export default Exclusive