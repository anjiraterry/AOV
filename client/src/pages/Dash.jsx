import React, {useState} from 'react'
import { DashNav, Dashboard, Cryptowallets, SellGiftCard, Transactions, Referral, Withdrawal,Notifications, Account } from '../components/Dash'
import bg from '../images/bg.png'
import { Link } from 'react-router-dom'


const Dash = () => {
  const [selected, setSelected] = useState(0);

  const menuItems = [
    "Dashboard",
    "Crypto Wallets",
    "Sell Gift Card",
    "Transactions",
    "Referral",
    "Withdrawal",
    "Notifications",
    "Account"
  ];

  const components = [
     <Dashboard />,
   <Cryptowallets />,
    <SellGiftCard />,
    <Transactions />,
   <Referral />,
    <Withdrawal />,
   <Notifications />,
    <Account />
  ];

  return (
    <div style={{ backgroundImage:`url(${bg})` }}>
      <DashNav/>
    
      <div className='flex text-white pt-4 '>
        <div className=' flex flex-col gap-8 text-sm h-full p-20  mt-4 border-r-2 white '>
    
        <div className=' border-b-2 pb-8  flex flex-col gap-4 dashmenu' >
        {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`cursor-pointer p-2 ${
            selected === index ? 'bg-orange-600 text-white' : ' '
          }`}
        >
          {item}
        </div>
      ))}
    </div>
       
        <div className='flex flex-col gap-8 px-8 '>
          <Link className='p-0'>FAQs</Link>
          <Link className='p-0'>Contact</Link>
          <Link className='p-0 flex flex-col'>Support <span className=' text-xs font-light '>support@myaov.com </span></Link>
        
        </div>
       
      </div>
      
     
      <div>
     
      <div className=''>
      { components[selected]}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Dash