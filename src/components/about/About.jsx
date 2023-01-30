import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
});

const About = () => {
  return (
    <section id="about">
     <h5>Get To Know</h5>
     <h2>About Me</h2> 
     <div className="container about__container">
       <div className="about__me" data-aos="flip-up">
        <div className="about__me-image">
          <img id='img-about' src={ME} alt="About" />
        </div>
       </div>

       <div className="about__content">
         <div className="about__cards">
          <article className='about__card' data-aos="fade-up">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>6+ Months</small>
          </article>
          <a rel='noreferrer' target="_self" href='#testimonials'>
          <article className='about__card' data-aos="fade-down">
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>7+</small>
          </article>
          </a>
          <a target="_blank" rel='noreferrer' href="https://github.com/mohit847 ">
          <article className='about__card' data-aos="fade-up">
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            
            <small>10+ Completed</small>
          </article>
          </a>
         </div>
         <p>
         I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites!
         </p>

         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>  
     </div>
    </section>
  )
}

export default About