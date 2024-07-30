import React from 'react'

const Input = (props) => {
  return (
    <input
     type={props.type}
     placeholder={props.placeholder}
     onChange={props.onChange && props.onChange}
     className="rounded border-spacing-2 p-2 text-black"
     />
  )
}

export default Input