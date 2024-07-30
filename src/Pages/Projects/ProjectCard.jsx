import React from 'react'
import Button from '../../Components/Custom/Button'

const ProjectCard = (props) => {
  return (
    <div className='project-card border m-5'>
        <div className='project-thumbnail'>
            <img src={props.thumbnail} className='w-full h-full' />
        </div>
        <div className='project-tags grid grid-cols-4'>
            {props.tags && props.tags.map((tag) => (
                <div key={tag} className='border rounded m-2 bg-pink-600'>
                    {tag}
                </div>
            ))}
        </div>
        <div className='project-title text-xl font-bold'>{props.title}</div>
        <div className='project-actions grid grid-cols-2 gap-5 m-5'>
            <Button title={"Source Code"}/>
            <Button title={"View"}/>
        </div>
    </div>
  )
}

export default ProjectCard