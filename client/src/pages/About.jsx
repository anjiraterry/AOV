import React from 'react'
import bg from '../images/bg.png'
import { TbExchange, TbExchangeOff, TbTransactionBitcoin } from 'react-icons/tb'
import { MdCurrencyBitcoin } from 'react-icons/md'
import { FaBullseye } from 'react-icons/fa'

const About = () => {
  return (
    <div>
    <div style={{ backgroundImage:`url(${bg})` }} className='bg-cover p-32 text-white' >
   <div  className='flex flex-col items-center '>
   <div className='text-center pb-16'>
     <h1 className='text-5xl font-bold '>About Us</h1>
     <p className='font-thin'>About Alexis Ojere Ventures</p>
   </div>
   <div className='text-lg font-thin border-b pb-16'>
   Your trusted partner for seamless digital currency trading! Enjoy high exchange rates, fast and secure transactions, and a user-friendly platform designed for ease.
    Our reliable customer support team is always available to assist. 
    Perfect for both beginners and experienced traders, AOVentures ensures a hassle-free experience and maximum value for your digital assets.
   </div>
   <div className="mt-16 text-lg font-thin flex flex-col justify-between gap-16 ">
    <div className='flex'>
    <h1 className='flex text-4xl flex-1 font-bold gap-6 items-center'><TbTransactionBitcoin size={60}/><p>Crypto and Gift Cards <br/> Trading Platform You Can Trust</p></h1>
    <p className='flex-1'>Looking for a reliable and secure platform to trade digital currency and gift cards? Look no further than AOVentures. 
      Our platform is designed to be easy to use, reliable, and secure, so you can buy and sell digital currency and gift cards with confidence.
       Our team is committed to providing our customers with the best possible service, whether you're a seasoned trader or just getting started with digital currency.
       We work hard to ensure that our platform is always up-to-date with the latest technology and security features, so you can be confident that your transactions are safe and secure.
        Our goal is to create a platform that's transparent and trustworthy, so you can buy and sell digital currency and gift cards with ease.
        
</p>
</div>
<div className='flex '>
<h1 className='flex text-4xl flex-1 font-bold  gap-6 items-center'><FaBullseye size={60}/><p>Our Mission</p></h1>
    <p className='flex-1'>Looking for a reliable and secure platform to trade digital currency and gift cards? Look no further than AOVentures. 
      Our platform is designed to be easy to use, reliable, and secure, so you can buy and sell digital currency and gift cards with confidence.
       Our team is committed to providing our customers with the best possible service, whether you're a seasoned trader or just getting started with digital currency.
       We work hard to ensure that our platform is always up-to-date with the latest technology and security features, so you can be confident that your transactions are safe and secure.
        Our goal is to create a platform that's transparent and trustworthy, so you can buy and sell digital currency and gift cards with ease.
</p>
</div>

<div className='flex '>
<h1 className='flex text-4xl flex-1 font-bold  gap-6 items-center'><TbExchange size={60}/><p>Our Vision</p></h1>
    <p className='flex-1'>Looking for a reliable and secure platform to trade digital currency and gift cards? Look no further than AOVentures. 
      Our platform is designed to be easy to use, reliable, and secure, so you can buy and sell digital currency and gift cards with confidence.
       Our team is committed to providing our customers with the best possible service, whether you're a seasoned trader or just getting started with digital currency.
       We work hard to ensure that our platform is always up-to-date with the latest technology and security features, so you can be confident that your transactions are safe and secure.
        Our goal is to create a platform that's transparent and trustworthy, so you can buy and sell digital currency and gift cards with ease.
</p>
</div>
   </div>
 

   </div>

   </div>
   </div>
  )
}

export default About