import Card from '../../components/Cards'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useState } from 'react'

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init({
//   offset: 800,
//   duration: 1200,
//   mirror: true,
// });

const FAQ = ({faq}) => {
    const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card className="faq" onClick={() => setShowAnswer(prev => !prev)}>
       <div>
          <h5 className="faq__question">{faq.question}</h5>
          <button className="faq__icon">
              {showAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/>}
          </button>
       </div>
      {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  )
}

export default FAQ