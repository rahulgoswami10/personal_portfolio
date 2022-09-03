import React from 'react'
import CV from '../../assets/my_resume.pdf'

const CTOA = () => {
  return (
    <div className='ctoa'>
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
  )
}

export default CTOA