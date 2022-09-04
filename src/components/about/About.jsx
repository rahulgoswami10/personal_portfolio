import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
import { FiAward } from 'react-icons/fi'
import { TbUsers } from 'react-icons/tb'
import { BsFolderCheck } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset: 350,
  duration: 1200,
  mirror: true,
});


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className="aboutintro" data-aos="zoom-in">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card"  data-aos="zoom-in-up">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ months Working</small>
            </article>

            <article className="about__card"  data-aos="zoom-in-up">
              <TbUsers className="about__icon" />
              <h5>Clients</h5>
              <small>11+ Clients</small>
            </article>

            <article className="about__card"  data-aos="zoom-in-up">
              <BsFolderCheck className="about__icon" />
              <h5>Projetcs</h5>
              <small>4+Completed</small>
            </article>
          </div>

          <p classname="mydes" data-aos="fade-right">
            I am a web developer and designer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript. 
             I'm proficient both in front-end & back-end. My primary focus for my study is Web Application development.
            I build responsive websites that delight and inform. I do it well.

            I am curious, and I enjoy work that challenges me to learn something new and stretch in a different direction.
          </p>

          <a href="#contact" className='btn btn-primary' data-aos="flip-up">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About