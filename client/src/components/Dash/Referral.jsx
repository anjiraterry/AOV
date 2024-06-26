import React from 'react'
import { CopyOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, WhatsAppOutlined, XOutlined } from '@ant-design/icons'

const Referral = () => {
  return (
    <div className='p-20 mt-2 text-lg font-thin '>
    <h1 className='text-3xl font-bold mb-6'>Refer friends. <br/>Earn together</h1>
    <div className='flex justify-between gap-24 border-b-2 pb-24 '>
    <p className='flex-1  '>
      When they trade gift cards that the total worth is up to ₦140,000.
      The more you invite, the more you earn.  It's that simple.
       What are you waiting for? Refer by sharing the link below and earn! . 
       <span className='bold'>The referral link is unique to you and may be used to refer non-member at anytime.</span>

       </p>
       <div className=' flex flex-col gap-2'>
        <p className='font-bold'>Referal Link & Code</p>
        <div className='bg-[#D9D9D9] px-3 rounded-xl py-2 text-black flex gap-2 items-center'>
          <p>http://localhost:3000/dashboard</p>
          <CopyOutlined className='bg-[#494949] p-3 rounded-full text-white'/>
        </div>
        <div className='flex gap-4'>
          <p >share on:</p>
          <WhatsAppOutlined/>
          <XOutlined/>
          <InstagramOutlined/>
          <FacebookOutlined/>
        </div>
       </div>
       </div>
       <div className='flex flex-col gap-8 mt-8 items-center '>
       <p className='font-bold'>Your Referral Statistics</p>
       <div className='ref flex gap-24 items-center justify-between'>
        <div>
          <div><div >3</div></div>
          <p>Click Count</p>
        </div>
        <div>
          <div><div>3</div></div>
          <p>Register Count</p>
        </div>
        <div>
          <div><div>2</div></div>
          <p>Transactions</p>
        </div>
       </div>
       <div></div>
        <div></div>
       </div>
    </div>
  )
}

export default Referral