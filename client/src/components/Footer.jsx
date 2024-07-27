import React from 'react'
import bg from '../images/footer.png'
import { Link } from 'react-router-dom'
import img from '../images/aovwhite.png'

const Footer = () => {
  return (
    <div>
      
      <div className='cover footerdiv h-96 ' style={{ backgroundImage:`url(${bg})` }}>
      <div className='h-12 bg-[#887568]'></div>
      <div className='p-32'>
      <div className='flex items-center justify-between  '>
        <img src={img}/>
        <div className='flex justify-between gap-24'>
          <div className='text-white font-thin flex flex-col '>
            <h3 className='font-bold text-white text-xl'>Quick Links</h3>
            <Link to='/login'>Login</Link>
            <Link to="/register">Register</Link>
            <Link to='/faq'>Faqs</Link>
          </div>
          <div className='text-white font-thin flex flex-col '>
          <h3 className='font-bold text-white text-xl'>Company</h3>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About Us</Link>
           </div>
          <div  className='text-white font-thin flex flex-col '>
            <h3 className='font-bold text-white text-xl'>Legal</h3>
            <Link to='/terms'>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
           </div>
        </div>
       
      </div>
      <div className='text-xs text-white font-thin mt-12 flex items-center justify-center'>Copyright © 2024 AOVentures</div>
      </div>
      </div>
    </div>
  )
}

export default Footer