import './About.css'

import { motion } from 'framer-motion'

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma
} from 'react-icons/fa'

import {
  SiMongodb,
  SiExpress,
  SiPostman
} from 'react-icons/si'

const About = () => {

  return (

    <section className='about' id='about'>

      {/* LEFT SIDE */}

      <div className='about-left'>

        {/* ABOUT */}

        <motion.div
        className='about-card'

        initial={{opacity:0,y:50}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:0.6}}
        >

          <h2>
            About Me
          </h2>

          <p className='about-intro'>

            I am a passionate MERN Stack Developer
            focused on building modern, scalable and
            responsive full stack web applications.

          </p>

        </motion.div>

        {/* CAREER OBJECTIVE */}

        <motion.div
        className='about-card'

        initial={{opacity:0,y:50}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:0.7}}
        >

          <h3>
            Career Objective
          </h3>

          <p>

            Seeking a frontend/backend/full stack
            developer role to build scalable modern
            applications and improve my development skills.

          </p>

        </motion.div>

        {/* EDUCATION */}

        <motion.div
        className='about-card education-card'

        initial={{opacity:0,y:50}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:0.8}}
        >

          <h3>
            Education
          </h3>

          <div className='education-details'>

            <p className='education-degree'>

              B.Tech
              (Bachelor Of Technology)

            </p>

            <p>

              <span>
                College:
              </span>

              Amrita Sai Institute Of Science And Technology

            </p>

            <p>

              <span>
                CGPA:
              </span>

              8.25 / 10

            </p>

            <p>

              <span>
                Graduation Year:
              </span>

              2024

            </p>

          </div>

        </motion.div>

      </div>

      {/* RIGHT SIDE */}

      <div className='about-right'>

        {/* EXPERIENCE */}

        <motion.div
        className='about-card'

        initial={{opacity:0,y:50}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:0.9}}
        >

          <h3>
            Experience
          </h3>

          <div className='experience-badge'>

            Fresher • Open To Opportunities

          </div>

          <p>

            Built multiple personal MERN stack projects
            and continuously learning real-world application
            development.

          </p>

        </motion.div>

        {/* TECH STACK */}

        <motion.div
        className='about-card tech-main-card'

        initial={{opacity:0,y:50}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:1}}
        >

          <h3>
            Tech Stack
          </h3>

          <div className='tech-stack'>

            <div className='tech-card'>
              <FaReact />
              <p>React</p>
            </div>

            <div className='tech-card'>
              <FaNodeJs />
              <p>Node.js</p>
            </div>

            <div className='tech-card'>
              <SiMongodb />
              <p>MongoDB</p>
            </div>

            <div className='tech-card'>
              <SiExpress />
              <p>Express</p>
            </div>

            <div className='tech-card'>
              <FaGithub />
              <p>GitHub</p>
            </div>

            <div className='tech-card'>
              <SiPostman />
              <p>Postman</p>
            </div>

            <div className='tech-card'>
              <FaFigma />
              <p>Figma</p>
            </div>

            <div className='tech-card'>
              <span className='uiux-icon'>
                UI
              </span>

              <p>UI/UX</p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default About