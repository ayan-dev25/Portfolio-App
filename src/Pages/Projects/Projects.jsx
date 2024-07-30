import React from 'react'
import { projectList } from '../../api/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='p-5 mx-auto w-full max-w-7xl' id="projects">
      <div className='projects-heading text-center text-2xl mb-5 font-bold'>
        Projects
      </div>
      <div className='projects-cards text-center md:grid md:grid-cols-2 lg:grid-cols-3 '>
        {projectList && projectList.map((project) => (
          <ProjectCard
          key = {project._id}
          title = {project.projectName}
          tags = {project.techStack}
          thumbnail = {project.thumbnailImg}
           />
        ))}
      </div>
    </div>
  )
}

export default Projects