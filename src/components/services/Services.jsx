import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Conduct user research.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Determine the information architecture of a digital product.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Design user flows and wireframes.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Creat prototypes.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Conduct user testing.</p>
            </li> 
          </ul>
        </article>
          {/* END OF UI/UX */}
        <article className="service" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Create all types of website.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Ongoing Website Maintenance.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Web Hosting.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Integrate data from various back-end services and databases.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Search Engine Optimization (SEO).</p>
            </li> 
            <li> 
              <BiCheck className='service__list-icon' />
              <p> Social Media Management.</p>
            </li>
          </ul>
        </article>
           {/* END OF WEB DEVELOPMENT */}
        <article className="service" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000" >
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Create Blogs.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Integrating Sociak Media.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Automated Mails and Replies.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Graphic Design, Logo Design and ad Design.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon' />
              <p>Css and Hover effects.</p>
            </li> 
          </ul>
        </article>
          {/* END OF CONTENT CREATION */}   

      </div>
    </section>
  )
}

export default Services