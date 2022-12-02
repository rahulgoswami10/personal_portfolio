import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {SiWhatsapp} from 'react-icons/si'
import {TbBrandTelegram} from 'react-icons/tb'
import {BiSend} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
  offset: 300,
  duration: 1080,
  mirror: true,
});


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6b93m8d', 'template_247e9yg', form.current, '9C27gMDfh1igSriKS')
    e.target.reset()
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 className="contactintro" data-aos="zoom-in">Connect Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" data-aos="zoom-in-up">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>therahulgoswami99@gmail.com</h5>
            <a href="mailto:therahulgoswami99@gmail.com" target="_blank" rel="noreferrer">Leave a message</a>
          </article>
          <article className="contact__option" data-aos="zoom-in-up">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Rahul Goswami</h5>
            <a href="https://www.facebook.com/profile.php?id=100027510530355" target="_blank" rel="noreferrer">Let's Talk</a>
          </article>
          <article className="contact__option" data-aos="zoom-in-up">
            <SiWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Rahul</h5>
            <a href="https://api.whatsapp.com/send?phone=+919679441193" target="_blank" rel="noreferrer">Let's Talk</a>
          </article>
          <article className="contact__option" data-aos="zoom-in-up">
            <TbBrandTelegram className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>Rahul</h5>
            <a href="https://web.telegram.org/k/" target="blank" rel="noreferrer">Let's Talk</a>
          </article>
        </div>
        {/*_______________END OF CONTACT OPTIONS_______________*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Please Enter Your Full Name' required />
          <input type="email" name='email' placeholder="Enter Your Email" required />
          <textarea name="message" rows="7" placeholder="Enter Your Message here" required></textarea>
          <button type="submit" className='btn btn-primary'> Send Message <BiSend /></button>
        </form>
        {/*_______________END OF CONTACT FORM_______________*/}
      </div>
    </section>
  )
}

export default Contact