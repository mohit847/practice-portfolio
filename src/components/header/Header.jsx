import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Mohit Kumar</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img id="img" src={ME} alt="me" width={"300px"}/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header