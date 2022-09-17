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
import IMG7 from '../../assets/portfolio7.jpg'
// import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'
// import IMG10 from '../../assets/portfolio10.jpeg'
import IMG11 from '../../assets/portfolio11.png'
import IMG12 from '../../assets/portfolio12.jpg'
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
    description: 'HTML, CSS, JS',
    demo: 'https://goswamicoachingcentre.netlify.app'
    // demo:
  },
  
  {
    id: 2,
    image: IMG7,
    title: 'Ice Cream Shop Website',
    description: 'Django, HTML, CSS, JS',
    demo: 'https://github.com'
    // demo:
  },

  {
    id: 3,
    image: IMG12,
    title: 'GPT-3',
    description: 'React.js',
    demo: 'https://generativepretrainedtransformer.netlify.app/'
  },

  {
    id: 4,
    image: IMG9,
    title: 'Responsive Admin DashBoard',
    description: 'HTML CSS JS',
    demo: 'https://github.com',
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