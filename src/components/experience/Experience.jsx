import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
});

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend" data-aos="fade-up-right">
          <h3>Frontend Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>HTMl</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>CSS</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>ReactJs</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>Bootstrap</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>Tailwind</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>JavaScript</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONT-END */}

        <div className="experience__backend" data-aos="fade-up-left">
        <h3>Backend Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>Python</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>NodeJs</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>MongoDB</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>Firebase</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience