import React from 'react'
import GiftCards from './Transactions/GiftCards'
import Crypto from './Transactions/Crypto'
import { useState } from 'react'
import Input from 'antd/es/input/Input'


const Transactions = () => {
  const [selected, setSelected] = useState(0);

  const menuItems = [
    "GiftCards",
    "Crypto"
  ]

  const component = [
    <GiftCards />,
     <Crypto/>
  ]
  
  return (
    <div className='pt-20 px-20 mt-2'>
       <h1 className='text-3xl font-bold mb-6'>Transaction Log</h1>
       <div className=' mb-10'>
        <div className=' flex gap-4 '>
        <div className=' pb-8  flex  gap-4 dashmenu' >
        {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`cursor-pointer p-2 ${
            selected === index ? 'bg-white text-gray-800' : ' '
          }`}
        >
          {item}
        </div>
      ))}
    </div>
        </div>
       <Input placeholder="Search" className='rounded-2xl'/>
       </div>
       <div>
     
     <div className=''>
    
      {component[selected]}
     </div>
     </div>
       
    
    </div>
  )
}

export default Transactions