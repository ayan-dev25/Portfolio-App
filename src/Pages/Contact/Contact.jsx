import React from 'react'
import Input from '../../Components/Custom/Input'
import Button from '../../Components/Custom/Button'

const Contact = () => {
  return (
    <div className='p-5 mx-auto w-full max-w-7xl md:grid md:grid-cols-2' id='contact'>
      <div className='contact-details'>
        <div className='contact-heading text-2xl'>Connect with me</div>
        <div className='contact-address px-2 py-1'>
          <div className='address-icon'></div>
          <div className='address-text'>Planet Earth</div>
        </div>
        <div className='contact-email px-2 py-1'>
          <div className='email-icon'></div>
          <div className='email-text'>ayanbera25@gmail.com</div>
        </div>
        <div className='contact-social-link grid grid-cols-4'>

        </div>
      </div>
      <div className='contact-form'>
        <div className='form-heading text-2xl text-green-500'>- Contact me</div>
        <div className='py-2 form-input-box grid grid-cols-1 gap-3'>
          <Input type="text" placeholder= "Your Full Name" />
          <Input type="text" placeholder= "Your Email" />
          <Input type="text" placeholder= "Your Message" />
          <Button title={"Send Message"}/>
        </div>
      </div>
    </div>
  )
}

export default Contact