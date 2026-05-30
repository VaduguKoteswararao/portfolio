import './Footer.css'

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

const Footer = () => {

  return (

    <footer className='footer'>

      <div className='footer-container'>

        {/* LEFT */}

        <div className='footer-left'>

          <h2>
            PORTFOLIO
          </h2>

          <p>
            Passionate MERN Stack Developer building
            modern responsive and scalable web
            applications.
          </p>

        </div>

        {/* CENTER */}

        <div className='footer-center'>

          <h3>
            Quick Links
          </h3>

          <a href='#home'>
            Home
          </a>

          <a href='#about'>
            About
          </a>

          <a href='#skills'>
            Skills
          </a>

          <a href='#projects'>
            Projects
          </a>

          <a href='#contact'>
            Contact
          </a>

        </div>

        {/* RIGHT */}

        <div className='footer-right'>

          <h3>
            Connect
          </h3>

          <a
          href='mailto:v.koteswararao217@gmail.com'
>
            <FaEnvelope />
            <span>Email</span>
          </a>

          <a
          href='https://github.com/VaduguKoteswararao'
          target='_blank'
          rel='noreferrer'
          >
            <FaGithub />
            GitHub
          </a>

          <a
          href='https://www.linkedin.com/in/koteswararao-vadugu030899'
          target='_blank'
          rel='noreferrer'
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>

      {/* BOTTOM */}

      <div className='footer-bottom'>

        <p>
          © 2026 Koti. All Rights Reserved.
        </p>

        <span>

          Built with React & MERN Stack

        </span>

      </div>

    </footer>

  )
}

export default Footer