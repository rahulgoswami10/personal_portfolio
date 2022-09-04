import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrFacebook} from 'react-icons/gr'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><GrFacebook/></a>
    </div>
  )
}

export default Socials