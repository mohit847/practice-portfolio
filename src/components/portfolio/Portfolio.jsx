import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id:1,
    image:IMG1,
    title: 'Animated-NavBar',
    github: 'https://github.com',
    demo: 'https://jk204164.w3spaces.com/projects/Animated-NavBar/main.html'
  },
  {
    id:2,
    image:IMG2,
    title: 'This is a Portfolio item 2',
    github: 'https://github.com',
    demo: 'https://www.w3spaces-preview.com/jk204164/projects/Rainy-cloud/index.html'
  },
  {
    id:3,
    image:IMG3,
    title: 'This is a Portfolio item 3',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:4,
    image:IMG4,
    title: 'This is a Portfolio item 4',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:5,
    image:IMG5,
    title: 'This is a Portfolio item 5',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:6,
    image:IMG6,
    title: 'This is a Portfolio item 6',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
               <div className="portfolio__item-image">
                <img src={image} alt={title} />
               </div>
               <h3>{title}</h3>
               <div className="portfolio__item-cta">
                <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
               </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio 

