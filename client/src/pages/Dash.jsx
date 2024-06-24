import React from 'react'
import DashNav from '../components/DashNav'
import bg from '../images/bg.png'
import { Link } from 'react-router-dom'


const Dash = () => {
  return (
    <div style={{ backgroundImage:`url(${bg})` }}>
    
      <div className='flex text-white mt-16 p-4 '>
        <div className=' flex flex-col gap-8 text-sm h-full p-20  border-r-2 white '>
        <div className=' border-b-2 pb-8  flex flex-col gap-8' >
        <div>Dashboard</div>
        <div>Crypto Wallets</div>
        <div>Sell Gift Card</div>
        <div>Transactions</div>
        <div>Referral</div>
        <div>Withdrawal</div>
        <div>Notifications</div>
        <div>Account</div>
        </div>
        <div className='flex flex-col gap-8 '>
          <Link className='p-0'>FAQs</Link>
          <Link className='p-0'>Contact</Link>
          <Link className='p-0 flex flex-col'>Support <span className=' text-xs font-light '>support@myaov.com </span></Link>
        </div>
      </div>
      </div>
      <div>
      <div>

      </div>
      </div>
    </div>
  )
}

export default Dash