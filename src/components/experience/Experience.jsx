import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiTailwindcss} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {SiPython} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'
import {GrNode} from 'react-icons/gr'
import {GrMysql} from 'react-icons/gr'
import {SiPhp} from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 300,
  duration: 1050,
  mirror: true,
});


const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I've</h5>
      <h2 className="expintro" data-aos="zoom-in">My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend" data-aos="zoom-in-up">           
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
               <h4>HTML</h4>
               <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
               <h4>CSS</h4>
               <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
               <h4>JavaScript</h4>
               <small className="text-light">Moderate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBootstrapFill className="experience__details-icon" />
              <div>
               <h4>Bootstrap</h4>
               <small className="text-light">Moderate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
               <h4>Tailwind</h4>
               <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrReactjs className="experience__details-icon" />
              <div>
               <h4>React JS</h4>
               <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/*------------------End_Of_FrontEnd-----------------*/}
        <div className="experience__backend" data-aos="zoom-in-up">
          <h3>Backend Developement</h3>
           <div className="experience__content">
            <article className="experience__details">
              <SiPython className="experience__details-icon" />
              <div>
               <h4>Python</h4>
               <small className="text-light">Moderate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiDjango className="experience__details-icon" />
              <div>
               <h4>Django</h4>
               <small className="text-light">Moderate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <div>
               <h4>Node JS</h4>
               <small className="text-light">Moderate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
               <h4>MySQL</h4>
               <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPhp className="experience__details-icon" />
              <div>
               <h4>PHP</h4>
               <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience