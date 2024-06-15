import React from 'react'
import banner from '../images/banner.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='' >
        <div className=' flex items-center py-48  px-24  justify-between'>
            <div className='flex flex-col justify-between py-16'>
                <p className=' text-orange-600 text-5xl '>Nigeria's Leading </p>
                <p className=' text-white text-6xl'>Crypto Currencies and Gift Cards Trading Company.</p>
                <p  className=' text-white text-md font-thin mt-4'>We buy cryptocurrencies and gift cards at a very sweet rate. Our transactions are fast! Our rates are second to none. Trade with us now!</p>
                <div className='flex items-center gap-12 text-white button mt-6'>
                <Link className='rounded-3xl  px-10  py-3 bg-gradient-to-r from-indigo-500 to-purple-500 '> Get Started</Link>
                <Link to='/login' className='rounded-3xl border-solid border-white border-2 px-10 py-3'>Login</Link>
                </div>

            </div>
            <div>
            <img src={banner} />

        </div>
        </div>
       
    </div>
  )
}

export default Hero