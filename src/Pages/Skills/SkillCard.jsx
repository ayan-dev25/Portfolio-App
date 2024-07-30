import React from 'react'

const SkillCard = (props) => {
  return (
    <div className='skill-card border bg-lime-600 rounded-md p-3 font-bold'>
        <div className='skillCard-icon'></div>
        <div className='skillCard-text text-center'>{props.text}</div>
    </div>
  )
}

export default SkillCard