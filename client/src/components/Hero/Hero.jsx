import './Hero.css'

import { motion } from 'framer-motion'

import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'

import { Typewriter } from 'react-simple-typewriter'

import profileImage from '../../assets/images/profile.png'

const Hero = () => {

  return (

    <section className='hero' id='home'>

      {/* LEFT SIDE */}

      <motion.div
      className='hero-content'

      initial={{opacity:0,x:-100}}

      animate={{opacity:1,x:0}}

      transition={{duration:1}}
      >

        {/* SMALL BADGE */}

        <div className='hero-badge'>

          <span></span>

          Available For Work

        </div>

        {/* TITLE */}

        <h1>

          Hi, I'm <span>Koti</span>

        </h1>

        {/* TYPEWRITER */}

        <h2>

          <Typewriter

          words={[
            'MERN Stack Developer',
            'Frontend Developer',
            'Full Stack Developer'
          ]}

          loop={true}

          cursor

          cursorStyle='|'

          typeSpeed={80}

          deleteSpeed={50}

          delaySpeed={1500}

          />

        </h2>

        {/* DESCRIPTION */}

        <p className='hero-description'>

          Passionate fresher focused on building
          modern, scalable and responsive full stack
          web applications using MERN Stack.

        </p>

        {/* STATS */}

        <div className='hero-info'>

          <div>

            <h3>5+</h3>

            <p>Projects</p>

          </div>

          <div>

            <h3>10+</h3>

            <p>Technologies</p>

          </div>

          <div>

            <h3>100%</h3>

            <p>Learning</p>

          </div>

        </div>

        {/* BUTTON */}

        <a
        href="/Koteswararao_MernStack_Developer_Resume.pdf"
        download
        className="resume-btn"
        >
        Download Resume
        </a>

        {/* SOCIAL ICONS */}
    
        <div className='social-icons'>

          <a
          href='https://github.com/'
          target='_blank'
          >

            <FaGithub />

          </a>

          <a
          href='https://linkedin.com/'
          target='_blank'
          >

            <FaLinkedin />

          </a>

          <a
          href='https://instagram.com/'
          target='_blank'
          >

            <FaInstagram />

          </a>

        </div>

        {/* SCROLL DOWN */}

        <div className='scroll-down'>

          Scroll Down ↓

        </div>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
      className='hero-image'

      initial={{opacity:0,x:100}}

      animate={{opacity:1,x:0}}

      transition={{duration:1}}
      >

        <img
        src={profileImage}
        alt='profile'
        />

      </motion.div>

    </section>

  )
}

export default Hero