import React from 'react'
import './experience.css'
// import {AiFillHtml5} from 'react-icons/ai'
// import {SiCss3} from 'react-icons/si'
// import {SiJavascript} from 'react-icons/si'
// import {BsFillBootstrapFill} from 'react-icons/bs'
// import {SiTailwindcss} from 'react-icons/si'
// import {GrReactjs} from 'react-icons/gr'
// import {SiPython} from 'react-icons/si'
// import {SiDjango} from 'react-icons/si'
// import {GrNode} from 'react-icons/gr'
// import {GrMysql} from 'react-icons/gr'
// import {SiPhp} from 'react-icons/si'

import Logo1 from '../../assets/skills/html5.png'
import Logo2 from '../../assets/skills/css3.png'
import Logo3 from '../../assets/skills/javascript.png'
import Logo4 from '../../assets/skills/bootstrap.png'
import Logo5 from '../../assets/skills/tailwind-css.png'
import Logo6 from '../../assets/skills/native.png'
import Logo7 from '../../assets/skills/figma.png'
import Logo8 from '../../assets/skills/material-ui.png'
import Logo9 from '../../assets/skills/jquery.png'
import Logo10 from '../../assets/skills/canva.png'
import Logo11 from '../../assets/skills/adobe-illustrator.png'
// import Logo12 from '../../assets/skills/nextJs.png'
import Logo13 from '../../assets/skills/nodeJs.png'
// import Logo14 from '../../assets/skills/django.png'
import Logo15 from '../../assets/skills/firebase.png'
import Logo16 from '../../assets/skills/netlify.png'
import Logo17 from '../../assets/skills/python.png'
// import Logo18 from '../../assets/skills/redux.png'
import Logo19 from '../../assets/skills/redux1.png'
import Logo20 from '../../assets/skills/django1.png'
import Logo21 from '../../assets/skills/nextJs1.png'


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 800,
  duration: 1200,
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
            {/*==================== Article 1 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <AiFillHtml5 className="experience__details-icon" /> */}
              <img src= {Logo1} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>HTML</h4>
               {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            {/*==================== Article 2 ====================*/}
            <article className="experience__details" data-aos="fade-up">
              {/* <SiCss3 className="experience__details-icon" /> */}
              <img src= {Logo2} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>CSS</h4>
               {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            {/*==================== Article 3 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <SiJavascript className="experience__details-icon" /> */}
              <img src= {Logo3} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>JavaScript</h4>
               {/* <small className="text-light">Moderate</small> */}
              </div>
            </article>

            {/*==================== Article 4 ====================*/}
            <article className="experience__details" data-aos="fade-up">
              {/* <BsFillBootstrapFill className="experience__details-icon" /> */}
              <img src= {Logo4} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Bootstrap</h4>
               {/* <small className="text-light">Moderate</small> */}
              </div>
            </article>

            {/*==================== Article 5 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <SiTailwindcss className="experience__details-icon" /> */}
              <img src= {Logo5} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Tailwind</h4>
               {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            {/*==================== Article 6 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <GrReactjs className="experience__details-icon" /> */}
              <img src= {Logo6} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>React JS</h4>
               {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            {/*==================== Article 7 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <GrReactjs className="experience__details-icon" /> */}
              <img src= {Logo19} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Redux</h4>
               {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            {/*==================== Article 8 ====================*/}
            <article className="experience__details" data-aos="fade-up">
              {/* <GrReactjs className="experience__details-icon" /> */}
              <img src= {Logo7} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Figma</h4>
               {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            {/*==================== Article 9 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <GrReactjs className="experience__details-icon" /> */}
              <img src= {Logo8} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Material UI</h4>
               {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            {/*==================== Article 10 ====================*/}
            <article className="experience__details" data-aos="fade-up">
              {/* <GrReactjs className="experience__details-icon" /> */}
              <img src= {Logo9} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Jquery</h4>
               {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            {/*==================== Article 11 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <GrReactjs className="experience__details-icon" /> */}
              <img src= {Logo10} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Canva</h4>
               {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            {/*==================== Article 12 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <GrReactjs className="experience__details-icon" /> */}
              <img src= {Logo11} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Adobe</h4>
               {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
        {/*------------------End_Of_FrontEnd-----------------*/}

        <div className="experience__backend" data-aos="zoom-in-up">
          <h3>Backend Developement</h3>
           <div className="experience__content">
            {/*==================== Article 13 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <SiPython className="experience__details-icon" /> */}
              <img src= {Logo13} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Node.Js</h4>
               {/* <small className="text-light">Moderate</small> */}
              </div>
            </article>

            {/*==================== Article 14 ====================*/}
            <article className="experience__details" data-aos="fade-up">
              {/* <SiDjango className="experience__details-icon" /> */}
              <img src= {Logo21} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Next.Js</h4>
               {/* <small className="text-light">Moderate</small> */}
              </div>
            </article>

            {/*==================== Article 15 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <GrNode className="experience__details-icon" /> */}
              <img src= {Logo17} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Python</h4>
               {/* <small className="text-light">Moderate</small> */}
              </div>
            </article>

            {/*==================== Article 16 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <GrMysql className="experience__details-icon" /> */}
              <img src= {Logo20} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Django</h4>
               {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            {/*==================== Article 17 ====================*/}
            <article className="experience__details" data-aos="slide-right">
              {/* <SiPhp className="experience__details-icon" /> */}
              <img src= {Logo15} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Firebase</h4>
               {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>

               {/*==================== Article 18 ====================*/}
               <article className="experience__details" data-aos="fade-up">
              {/* <SiPhp className="experience__details-icon" /> */}
              <img src= {Logo16} alt="html-logo" className="experience__details-icon"/>
              <div>
               <h4>Netlify</h4>
               {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience