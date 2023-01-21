import React from 'react'
import './portfolio.css'
// import axios from 'axios';
// import { useState, useEffect } from "react";
// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'
// import IMG7 from '../../assets/portfolio7.jpg'
// import IMG8 from '../../assets/portfolio8.jpg'
// import IMG9 from '../../assets/portfolio9.jpg'
// import IMG10 from '../../assets/portfolio10.jpeg'
import IMG11 from '../../assets/portfolio11.png'
import IMG12 from '../../assets/portfolio12.jpg'
import IMG13 from '../../assets/portfolio14.jpg'
// import IMG14 from '../../assets/portfolio15.jpg'
import IMG15 from '../../assets/portfolio16.png'
import IMG17 from '../../assets/portfolio17.png'
import IMG18 from '../../assets/portfolio18.png'
import IMG19 from '../../assets/portfolio19.png'
// import IMG20 from '../../assets/portfolio20.png'
import IMG21 from '../../assets/portfolio21.png'
// import IMG22 from '../../assets/portfolio22.png'
import IMG23 from '../../assets/portfolio23.png'
import {BsEyeFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset: 290,
  duration: 1050,
  mirror: true,
});

const data = [
  {
    id: 1, //Unique_Key
    image: IMG11,
    title: 'Goswami Coaching Centre',
    description: 'HTML, CSS, Js, AOS',
    demo: 'https://goswamicoachingcentre.netlify.app'
    // demo:
  },

  {
    id: 2,
    image: IMG15,
    title: 'HealthCare Website',
    description: 'HTML, SASS, Js',
    demo: 'https://bingohealthcare.netlify.app'
    // demo:
  },

  {
    id: 3,
    image: IMG23,
    title: 'Math Wizard',
    description: 'HTML, CSS, Js, Jquery, Aos',
    demo: 'https://mwizard.netlify.app',
  },

  {
    id: 4,
    image: IMG19,
    title: 'Little Lemon Restaurant',
    description: 'HTML, CSS, Js, Jquery, AOS',
    demo: 'https://lemonrestaurant.netlify.app',
    // demo:
  },

  {
    id: 5,
    image: IMG12,
    title: 'GPT-3',
    description: 'React.js',
    demo: 'https://generativepretrainedtransformer.netlify.app'
    // demo:
  },

  {
    id: 6,
    image: IMG18,
    title: 'Metaverse Mania',
    description: 'Next.js, Tailwind',
    demo: 'https://metaverse-mania.netlify.app',
    // demo:
  },

    {
    id: 7,
    image: IMG13,
    title: 'Responsive Admin Dashboard',
    description: 'Chart.js',
    demo: 'https://bingofinance.netlify.app',
    // demo:
  },

  {
    id: 8,
    image: IMG21,
    title: 'Glassmorphism Portfolio Website',
    description: 'HTML, CSS, JS, Jquery',
    demo: 'https://sumanshill.netlify.app',
    // demo:
  },

  {
    id: 9,
    image: IMG17,
    title: 'Xmas 2k22',
    description: 'HTML, CSS, Js, ScrollReveal',
    demo: 'https://xmas22.netlify.app',
    // demo:
  }
]


const Portfolio = () => {
// const [apidata, setData] = useState([]);
    // setData(getData());
    // useEffect(()=> {
    //   setData(getData)
    // },1000);
    // var result=data.data;
    // result=getData();
    // console.log("result",result);

  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2 className="projectintro" data-aos="zoom-in">Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, demo}) => {
           return (
            <article key={id} className="portfolio__item" data-aos="zoom-in-up">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <div className="portfolio__item-cta">
                <a href={demo} className='btn' target='_blank' rel="noreferrer">LIVE DEMO <BsEyeFill className='portfolio__item-icon'/></a>
                {/* <a href="" className='btn btn-primary' target='_blank'>GoLive</a> */}
              </div>
            </article>
            )
         })
        }
      </div>
    </section>
  )
}

export default Portfolio