import faqs from './data'
import FAQ from './FAQ'
import './faqs.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
  offset: 300,
  duration: 1080,
  mirror: true,
});

const FAQs = () => {
  return (
    <section id="faqs">
      <h2 className="faqs__intro" data-aos="zoom-in">FAQ's</h2>
      <p>
        Here are some questions I usually get very often.
      </p>
      <div className="container faqs__container">
        {
           faqs.map(faq => (
             <FAQ key={faq.id} faq={faq}/>
           ))
        }
      </div>
    </section>
  )
}

export default FAQs
