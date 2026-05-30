import './ProjectCard.css'

const ProjectCard = ({project}) => {

  return (

    <div className='project-card'>

      <img
      src={project.image}
      alt='project'
      />

      <h3>
        {project.title}
      </h3>

      <p>
        {project.description}
      </p>

      <div className='project-buttons'>

        <a
        href={project.github}
        target='_blank'
        >
          GitHub
        </a>

        <a
        href={project.live}
        target='_blank'
        >
          Live Demo
        </a>

      </div>

    </div>

  )
}

export default ProjectCard