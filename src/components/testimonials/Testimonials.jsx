import React from 'react'
import './testimonials.css'
// import AVATAR1 from '../../assets/avatar1.jpg'
// import AVATAR2 from '../../assets/avatar2.jpg'
// import AVATAR3 from '../../assets/avatar3.jpg'
// import AVATAR4 from '../../assets/avatar4.jpg'
import AVATAR5 from '../../assets/avatar5.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
  offset: 290,
  duration: 1000,
  mirror: false,
});


const data =[
  {
    avatar: AVATAR5,
    name: 'Keya Chakraborty',
    review: 'Satisfied With the service. Great Designings and Animation.'
  },
  {
    avatar: AVATAR5,
    name: 'Prateek Singh',
    review: 'Good Service'
  },
  {
    avatar: AVATAR5,
    name: 'Clinton Dest',
    review: 'Rahul is a very highly motivated Freelancer. Keep it Up bro!'
  },
  {
    avatar: AVATAR5,
    name: 'Mousumi Saha',
    review: "Great Service. It's always a pleasure to work with you!"
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Client's Feedback</h5>
      <h2 className="feedbackintro" data-aos="zoom-in">Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar" data-aos="zoom-in">
                <img src={avatar} alt="my avatar"/>
              </div>  
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
              </SwiperSlide>
             )
           })
        } 
      </Swiper>
    </section>
  )
}

export default Testimonials