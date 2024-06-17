
import { projectData } from '../../constants'
import ProjectBox from './ProjectBox/projectbox'
import './project.css'

export default function Projects(){


    return (
        <div>
            <p id='Projects' className='project_title'>Projects</p>
            <div className='projects_box_container'>
            {projectData.map((project,index)=>(
                  <ProjectBox 
                  key={project.id }
                  title={project.title }
                  image={project.image}
                  sentances={project.sentances}
                  link={project.link}
                  />

            ))}
            </div>
        </div>
    )
}