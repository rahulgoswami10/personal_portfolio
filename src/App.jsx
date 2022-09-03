import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import {useState, useEffect} from 'react'
// import BarLoader from 'react-spinners/BarLoader'
// import axios from 'axios';

// import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers'

// const override: useEffect = {
  // display: "flex",
  // margin: "30rem auto",
  // padding: "2rem",
  // width: "65%",
  // height: "100vh",
  // borderColor: "red",
// };

const App = () => {
  // const [loading, setLoading] = useState(false)
  // const [apidata, setData] = useState([]);

  // useEffect(()=> {
      // setLoading(true)
      // setData(getData);
      // setTimeout(()=> {
        // if(apidata)
      // setLoading(false);
  
    // },2000)
  // },[])

  return ( 
            
      <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
      </>  
  )

}

export default App