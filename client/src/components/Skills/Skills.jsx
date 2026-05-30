import './Skills.css'

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa'

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiRedux,
  SiAxios,
  SiPostman
} from 'react-icons/si'

import { TbApi } from 'react-icons/tb'

const Skills = () => {

  const skills = [

    {
      icon:<FaHtml5 />,
      name:'HTML5'
    },

    {
      icon:<FaCss3Alt />,
      name:'CSS3'
    },

    {
      icon:<FaBootstrap />,
      name:'Bootstrap'
    },

    {
      icon:<SiJavascript />,
      name:'JavaScript ES6+'
    },

    {
      icon:<FaReact />,
      name:'React.js'
    },

    {
      icon:<FaReact />,
      name:'React Router'
    },

    {
      icon:<SiRedux />,
      name:'Redux'
    },

    {
      icon:<SiAxios />,
      name:'Axios'
    },

    {
      icon:<FaNodeJs />,
      name:'Node.js'
    },

    {
      icon:<SiExpress />,
      name:'Express.js'
    },

    {
      icon:<SiMongodb />,
      name:'MongoDB'
    },

    {
      icon:<SiMongoose />,
      name:'Mongoose'
    },

    {
      icon:<TbApi />,
      name:'REST API'
    },

    {
      icon:<FaFigma />,
      name:'Figma'
    },

    {
      icon:<span className='uiux-icon'>UI</span>,
      name:'UI/UX Design'
    },

    {
      icon:<FaGitAlt />,
      name:'Git'
    },

    {
      icon:<FaGithub />,
      name:'GitHub'
    },

    {
      icon:<SiPostman />,
      name:'Postman'
    }

  ]

  return (

    <section className='skills' id='skills'>

      <h2>
        Skills
      </h2>

      <div className='skills-container'>

        {
          skills.map((skill,index)=>(

            <div
            className='skill-card'
            key={index}
            >

              <div className='skill-icon'>

                {skill.icon}

              </div>

              <p>
                {skill.name}
              </p>

            </div>

          ))
        }

      </div>

    </section>

  )
}

export default Skills