import React from 'react'
import { useState } from 'react'
import apple from '../../images/apple.png'
import google from '../../images/google.png'
import sephora from '../../images/sephora.png'
import xbox from '../../images/xbox.png'
import nike from '../../images/apple.png'
import americanexp from '../../images/americanexp.png'
import steam from '../../images/steam.png'
import ebay from '../../images/ebay.png'
import macys from '../../images/macys.png'
import visa from '../../images/visa.png'
import razer from '../../images/razer.png'
import nordstorm from '../../images/apple.png'
import amazon from '../../images/amazon.png'
import Input from 'antd/es/input/Input'
import { SearchOutlined } from '@ant-design/icons'

const SellGiftCard = () => {
  const giftcards =[
    {
      name: "Amazon",
      status: "available",
      img: require ( '../../images/amazon.png')
    },
    {
      name: "American Express",
      status: "available",
      img: require ( '../../images/americanexp.png')
    },
    {
      name: "Apple",
      status: "available",
      img:  require (  '../../images/apple.png')
    },
    {
      name: "Ebay",
      status: "available",
      img:  require ( '../../images/ebay.png')
    },
    {
      name: "Google",
      status: "available",
      img:  require ( '../../images/google.png')
    },
    
     {
      name: "Macy's",
      status: "available",
      img: require ( '../../images/macys.png')
    },
    {
      name: "Nike",
      status: "available",
      img: require ( '../../images/nike.png')
    },

     {
      name: "Nordstorm",
      status: "available",
      img: require ('../../images/nordstorm.png')
    },
    {
      name: "Razer",
      status: "available",
      img: require ('../../images/razer.png')
    },

     {
      name: "Sephora",
      status: "available",
      img:  require (  '../../images/sephora.png')
    },

     {
      name: "Steam",
      status: "available",
      img:  require ( '../../images/steam.png')
    },


    
    {
      name: "Visa",
      status: "available",
      img: require (  '../../images/visa.png')
    },

     {
      name: "Xbox",
      status: "available",
      img: require (  '../../images/xbox.png')
    },

]
const [selected, setSelected] = useState(0);
  return (
    <div className='p-20 mt-2'>
    <div className='flex justify-between gap-16 items-center '>
    <div className='flex items-center  gap-4 '>
    <div className='bg-[#D9D9D9] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-black'>1</div>
    <div>
    <h1 className='text-3xl font-bold mb-4'>Step 1 : Select Gift Card</h1>
    <p className=' font-thin mb-2 text-lg'>Choose the gift card you would like to sell</p>
    </div>
    </div>
    <div className='flex bg-[#D9D9D9]  p-2 w-96 rounded-2xl '>
      <SearchOutlined className='text-black text-2xl m-2'/>
      <Input placeholder='Search gift cards' className='placeholder-black p-2 focus:border-0 caret-neutral-950'/>
    </div>
    </div>
    <div className='mt-20'>
    <div className=' pb-8  grid grid-cols-5 gap-8 dashmenu' >
        { giftcards.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
         className='border p-12 w-40 h-60 flex flex-col items-center justify-center'
        >
          <div className='flex flex-col gap-4 w-32 items-center justify-center'>
            <img src={item.img} className=''/> 
           
          
          </div>
          <p className='text-xs text-center'>{item.name}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default SellGiftCard