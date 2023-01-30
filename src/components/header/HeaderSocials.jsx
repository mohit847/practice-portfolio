import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mohit-kumar-992693237/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/mohit847" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSocials