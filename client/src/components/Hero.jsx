import React,  { useContext }  from 'react'
import banner from '../images/banner.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Hero = () => {
  const { auth, logout } = useContext(AuthContext);
  return (
    <div className='' >
        <div className='  min-[100px]:flex md:flex items-center md:py-48 min-[100px]:py-16  md:px-24 min-[100px]:px-6 min-[100px]:flex-col md:flex-row justify-between'>
            <div className='flex flex-col justify-between py-16  min-[100px]:items-center min-[100px]:text-center md:items-start md:text-start '>
                <p className=' text-orange-600 min-[100px]:text-3xl md:text-5xl '>Nigeria's Leading </p>
                <p className=' text-white min-[100px]:text-4xl  md:text-6xl '>Crypto Currencies and Gift Cards Trading Company.</p>
                <p  className=' text-white text-md font-thin mt-4 '>We buy cryptocurrencies and gift cards at a very sweet rate. Our transactions are fast! Our rates are second to none. Trade with us now!</p>
                <img src={banner} className='min-[100px]:block md:hidden' />
                <div className='flex items-center gap-12 text-white button mt-6'>
                {auth.isLoggedIn ? (
       <Link to='/dashboard' className='rounded-3xl  px-10  py-3 bg-gradient-to-r from-indigo-500 to-purple-500 '> Dashboard</Link>
      ) : (
        <div className='flex gap-5 hero'>
        <Link to='signup' className='rounded-3xl  px-10  py-3 bg-gradient-to-r from-indigo-500 to-purple-500 '> Get Started</Link>
        <Link to='/login' className='rounded-3xl border-solid  border hover:bg-orange-600 hover:border-orange-600  px-10 py-3'>Login</Link>
        </div>
      )}

                </div>

            </div>
            <div>
            <img src={banner} className='min-[100px]:hidden md:block' />

        </div>
        </div>
       
    </div>
  )
}

export default Hero