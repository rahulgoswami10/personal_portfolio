import React from 'react'
import './contact.css'
// import {HiOutlineMail} from 'react-icons/hi'
// import {RiMessengerLine} from 'react-icons/ri'
// import {SiWhatsapp} from 'react-icons/si'
// import {TbBrandTelegram} from 'react-icons/tb'
import Logo1 from '../../assets/socialhandles/gmail.png';
import Logo2 from '../../assets/socialhandles/facebook.png';
import Logo3 from '../../assets/socialhandles/instagram.png';
import Logo4 from '../../assets/socialhandles/whatsapp.png';
import Logo5 from '../../assets/socialhandles/twitter.png';
import Logo6 from '../../assets/socialhandles/linkedin.png';
import Logo7 from '../../assets/socialhandles/github.png';
import Logo8 from '../../assets/socialhandles/messenger.png';
import {BiSend} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AOS from 'aos'
import 'aos/dist/aos.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

AOS.init({
  offset: 300,
  duration: 1200,
  mirror: false,
});


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6b93m8d', 'template_247e9yg', form.current, '9C27gMDfh1igSriKS')
    e.target.reset()
    toast.success('Messege sent', {
      position: "top-right",
      autoClose: 7000,
      theme: "colored"
    })
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 className="contactintro" data-aos="zoom-in">Connect Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/*========== ARTICLE 1 ==========*/}
          <article className="contact__option" data-aos="slide-right">
            {/* <HiOutlineMail className='contact__option-icon' /> */}
            <img src={Logo1} alt="social__logo" className='contact__option-icon'/>
            {/* <h4>Email</h4> */}
            {/* <h5>therahulgoswami99@gmail.com</h5> */}
            <a href="mailto:therahulgoswami99@gmail.com" target="_blank" rel="noreferrer">Email</a>
          </article>

          {/*========== ARTICLE 2 ==========*/}
          <article className="contact__option" data-aos="fade-up">
            {/* <RiMessengerLine className='contact__option-icon' /> */}
            <img src={Logo2} alt="social__logo" className='contact__option-icon'/>
            {/* <h4>Messenger</h4> */}
            {/* <h5>Rahul Goswami</h5> */}
            <a href="https://www.facebook.com/profile.php?id=100027510530355" target="_blank" rel="noreferrer">Facebook</a>
          </article>

          {/*========== ARTICLE 3 ==========*/}
          <article className="contact__option" data-aos="slide-right">
            {/* <SiWhatsapp className='contact__option-icon' /> */}
            <img src={Logo3} alt="social__logo" className='contact__option-icon'/>
            {/* <h4>WhatsApp</h4> */}
            {/* <h5>Rahul</h5> */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </article>

          {/*========== ARTICLE 4 ==========*/}
          <article className="contact__option" data-aos="fade-up">
            {/* <TbBrandTelegram className='contact__option-icon' /> */}
            <img src={Logo4} alt="social__logo" className='contact__option-icon'/>
            {/* <h4>Telegram</h4> */}
            {/* <h5>Rahul</h5> */}
            <a href="https://api.whatsapp.com/send?phone=+919679441193" target="blank" rel="noreferrer">Whatsapp</a>
          </article>

          {/*========== ARTICLE 5 ==========*/}
          <article className="contact__option" data-aos="slide-right">
            {/* <TbBrandTelegram className='contact__option-icon' /> */}
            <img src={Logo5} alt="social__logo" className='contact__option-icon'/>
            {/* <h4>Telegram</h4> */}
            {/* <h5>Rahul</h5> */}
            <a href="https://twitter.com" target="blank" rel="noreferrer">Twitter</a>
          </article>

          {/*========== ARTICLE 6 ==========*/}
          <article className="contact__option" data-aos="fade-up">
            {/* <TbBrandTelegram className='contact__option-icon' /> */}
            <img src={Logo6} alt="social__logo" className='contact__option-icon'/>
            {/* <h4>Telegram</h4> */}
            {/* <h5>Rahul</h5> */}
            <a href="https://www.linkedin.com/in/rahul-goswami-452918214" target="blank" rel="noreferrer">LinkedIn</a>
          </article>

          {/*========== ARTICLE 7 ==========*/}
          <article className="contact__option" data-aos="slide-right">
            {/* <TbBrandTelegram className='contact__option-icon' /> */}
            <img src={Logo7} alt="social__logo" className='contact__option-icon'/>
            {/* <h4>Telegram</h4> */}
            {/* <h5>Rahul</h5> */}
            <a href="https://github.com/rahulgoswami10" target="blank" rel="noreferrer">Github</a>
          </article>

          {/*========== ARTICLE 8 ==========*/}
          <article className="contact__option" data-aos="fade-up">
            {/* <TbBrandTelegram className='contact__option-icon' /> */}
            <img src={Logo8} alt="social__logo" className='contact__option-icon'/>
            {/* <h4>Telegram</h4> */}
            {/* <h5>Rahul</h5> */}
            <a href="https://messenger.com" target="blank" rel="noreferrer">Messenger</a>
          </article>
        </div>
        {/*_______________END OF CONTACT OPTIONS_______________*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'> Send Message <BiSend /></button>
          <ToastContainer position="top-center" />
        </form>
        {/*_______________END OF CONTACT FORM_______________*/}
      </div>
    </section>
  )
}

export default Contact