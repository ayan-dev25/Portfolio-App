import React from 'react'

const Button = (props) => {
  return (
    <button 
    onClick={props.onClick && props.onClick}
    className="bg-lime-600 rounded-md p-2 hover:bg-lime-500"
    >
        {props.title}
    </button>
  ) 
}

export default Button