import './Projects.css'

import { motion } from 'framer-motion'

import {
  FaGithub,
  FaFigma,
  FaExternalLinkAlt,
  FaStar
} from 'react-icons/fa'

/* PROJECT IMAGES */

import netflixImg from '../../assets/images/projects/netflix.png'
import edusityImg from '../../assets/images/projects/edusity.png'
import financeImg from '../../assets/images/projects/finance.png'
import portfolioImg from '../../assets/images/projects/mern-portfolio.png'
import caspaiImg from '../../assets/images/projects/caspai.png'
import ariesImg from '../../assets/images/projects/aries.png'

const Projects = () => {

  const projects = [

    {
      title:'Netflix Clone',
      image:netflixImg,
      description:
      'Netflix inspired streaming platform UI with responsive layouts and premium movie browsing experience.',
      tech:['React','CSS','Firebase'],
      github:'https://github.com/VaduguKoteswararao/netflix-clone.git',
      live:'null',
      type:'Frontend'
    },

    {
      title:'Edusity',
      image:edusityImg,
      description:
      'Responsive educational website with reusable React components and modern clean UI design.',
      tech:['React','CSS','JavaScript'],
      github:'https://github.com/VaduguKoteswararao/edusity.git',
      live:'null',
      type:'Frontend'
    },

    {
      title:'Finance Dashboard',
      image:financeImg,
      description:
      'Modern analytics dashboard with responsive cards, charts and finance tracking UI.',
      tech:['React','Dashboard','Charts'],
      github:'https://github.com/VaduguKoteswararao/finance-dashboard.git',
      live:'null',
      type:'Dashboard',
      featured:true
    },

    {
      title:'MERN Portfolio',
      image:portfolioImg,
      description:
      'Modern full stack developer portfolio built using React and MERN stack with recruiter focused UI.',
      tech:['React','Node.js','Express','MongoDB'],
      github:'#',
      live:'null',
      type:'Full Stack',
      featured:true
    },

    {
      title:'Caspai UI/UX',
      image:caspaiImg,
      description:
      'Premium SaaS UI/UX design created in Figma with modern layouts and user experience.',
      tech:['Figma','UI Design','UX'],
      figma:'https://www.figma.com/design/GQPuJKJE2mlwA4SSUrPW9a/Caspai?t=fn4IGCzDurl6h8jk-1',
      type:'UI/UX'
    },

    {
      title:'Aries UI Design',
      image:ariesImg,
      description:
      'Creative mobile and web application UI concept designed using modern design systems.',
      tech:['Figma','Prototype','Mobile UI'],
      figma:'https://www.figma.com/design/2i8lHqABRSdfWjvXtbARZ3/Aries?node-id=0-1&t=fn4IGCzDurl6h8jk-1',
      type:'UI/UX'
    }

  ]

  return (

    <section className='projects' id='projects'>

      <h2>Projects</h2>

      <p className='projects-subtitle'>
        Real world frontend, full stack and UI/UX projects
        focused on modern responsive applications.
      </p>

      <div className='project-stats'>
        6+ Projects Completed
      </div>

      <div className='projects-container'>

        {
          projects.map((project,index)=>(

            <motion.div
              className={`project-card ${project.featured ? 'featured-card' : ''}`}
              key={index}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:index * 0.1}}
            >

              <div className='project-top'>

                <span className='project-type'>
                  {project.type}
                </span>

                {
                  project.featured && (
                    <div className='featured-badge'>
                      <FaStar />
                      Featured
                    </div>
                  )
                }

              </div>

              <div className='project-image'>
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <h3>{project.title}</h3>

              <p className='project-description'>
                {project.description}
              </p>

              <div className='project-tech'>

                {
                  project.tech.map((item,i)=>(

                    <span key={i}>
                      {item}
                    </span>

                  ))
                }

              </div>

              <div className='project-buttons'>

                {
                  project.github && (

                    <a
                      href={project.github}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FaGithub />
                      GitHub
                    </a>

                  )
                }

                {
                  project.live && (

                    <a
                      href={project.live}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>

                  )
                }

                {
                  project.figma && (

                    <a
                      href={project.figma}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FaFigma />
                      Figma
                    </a>

                  )
                }

              </div>

            </motion.div>

          ))
        }

      </div>

    </section>
  )
}

export default Projects