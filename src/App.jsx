import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Exclusive from './components/exclusiveWorks/Exclusive'
// import Achievements from './components/achievements/Achievements'
// import Testimonials from './components/testimonials/Testimonials'
import FAQs from './components/faqs/FAQs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {useState, useEffect} from 'react'
import BarLoader from 'react-spinners/BarLoader'
import './app.css'
// import axios from 'axios';

// import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers'

const override: useEffect = {
  // display: "flex",
  margin: "30rem auto",
  padding: "1rem",
  width: "85%",
  height: "2",
  // height: "rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(false)
  // const [apidata, setData] = useState([]);

  useEffect(()=> {
      setLoading(true)
      // setData(getData);
      setTimeout(()=> {
        // if(apidata)
        setLoading(false);
  
    }, 4000)
  },[])

  return ( 

    loading ?   
      <BarLoader 
        color={"#08edff"} 
        loading={loading} 
        cssOverride={override} 
        size={300} 
      />

      :

            
      <>

        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Exclusive />
        {/* <Achievements /> */}
        {/* <Testimonials /> */}
        <FAQs />
        <Contact />
        <Footer />

      </>  
  )

}

export default App