import React from 'react'
import './achievements.css'

import CERTIFICATE1 from '../../assets/certificate1.png'
import CERTIFICATE2 from '../../assets/certificate2.png'
import CERTIFICATE3 from '../../assets/certificate3.png'
import CERTIFICATE4 from '../../assets/certificate4.png'
import CERTIFICATE5 from '../../assets/certificate5.png'
// import CERTIFICATE6 from '../../assets/certificate6.png'
import CERTIFICATE7 from '../../assets/certificate7.png'



import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
  offset: 350,
  duration: 1000,
  mirror: true,
});

const data =[
    {
        certificate: CERTIFICATE1,
        title: 'HTML and CSS In Depth'
    },
    {
        certificate: CERTIFICATE2,
        title: 'Introduction to Front-End Developement'
    },
    {
        certificate: CERTIFICATE3,
        title: 'CSS Foundation'
    },
    {
        certificate: CERTIFICATE4,
        title: 'Fundamentals of Digital Marketing'
    },
    {
        certificate: CERTIFICATE5,
        title: 'Javascript Basics'
    },
    {
        certificate: CERTIFICATE7,
        title: 'UI/UX basics'
    }
]

const Achievements = () => {
  return (
    <section id="certification">
        <h5>Certifications</h5>
        {/*------ Certificate Section ------*/}
        <h2 className="certificateintro" data-aos="zoom-in">My Certificates</h2>

      <Swiper className='container certificates__container'
      // install Swiper modules
      navigation={true} 
      spaceBetween={450}
      slidesPerView={1}
      modules={[Navigation]}>
        {
          data.map(({certificate, title}, index) => {
            return (
              <SwiperSlide key={index} className="certificates">
                <div className="my__certificate">
                  <img src={certificate} alt="my certificate"/>
                </div>
                <h5 className="certificate__org">{title}</h5>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Achievements
