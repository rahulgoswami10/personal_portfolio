import React from 'react'
import './services.css'
import {FiEdit} from 'react-icons/fi'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset: 300,
  duration: 1050,
  mirror: false,
});


const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2 className="servicesintro" data-aos="zoom-in">Services</h2>
      {/* <h5>I Offer</h5> */}

      <div className="container services__container">
        <article className="service" data-aos="zoom-in-up">
          <div className="service__head">
            <h3>UI/UX designs</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiEdit className="service__list-icon" />
                <p>Mobile APP UI Design</p>
            </li>
            <li>
              <FiEdit className="service__list-icon" />
                <p>Mobile App UX Design</p>
            </li>
            <li>
              <FiEdit className="service__list-icon" />
                <p>Visual Design</p>
            </li>
            <li>
              <FiEdit className="service__list-icon" />
                <p>UI and UX Consulting</p>
            </li>
          </ul>
        </article>
      {/* ___________END OF UI/UX____________ */}
      <article className="service" data-aos="zoom-in-up">
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiEdit className="service__list-icon" />
                <p>Front-end Developement</p>
            </li>
            <li>
              <FiEdit className="service__list-icon" />
                <p>Back-end Developement</p>
            </li>
            <li>
              <FiEdit className="service__list-icon" />
                <p>Web Desigining</p>
            </li>
            <li>
              <FiEdit className="service__list-icon" />
                <p>Blog and Content Writing</p>
            </li>
            <li>
              <FiEdit className="service__list-icon" />
                <p>Web Site Logo Designing</p>
            </li>
          </ul>
        </article>
      {/* ___________END OF Web-Developement____________ */}
      <article className="service" data-aos="zoom-in-up">
          <div className="service__head">
            <h3>Digital Marketing</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiEdit className="service__list-icon" />
                <p>Search Engine Optimization</p>
            </li>
            <li>
              <FiEdit className="service__list-icon" />
                <p>Search Engine Marketing</p>
            </li>
            <li>
              <FiEdit className="service__list-icon" />
                <p>Social Media Marketing</p>
            </li>
            <li>
              <FiEdit className="service__list-icon" />
                <p>Email Marketing</p>
            </li>
          </ul>
        </article>
      {/* ___________END OF Search-Engine-Optimization____________ */}
      </div>
    </section>
  )
}

export default Services