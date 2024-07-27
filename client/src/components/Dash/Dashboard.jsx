import { ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../../images/accountbg.png'
import desc1 from '../../images/desc1.png'
import desc2 from '../../images/desc2.png'
import {FaBitcoin, FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa"
import {MdCall, MdCardGiftcard, MdOutlineCardGiftcard, MdRateReview}from "react-icons/md"
import {TbGiftCardFilled } from "react-icons/tb"
import classNames from 'classnames';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const kycsteps = useSelector(state => state.kycsteps);

  

  return (
    <div className='p-20 mt-2 text-lg font-thin'>
      <div className='flex flex-col gap-2'>
      <h1 className='text-3xl font-bold flex s'>Welcome Alexis</h1>
        <p className='mb-4'>An overview of your current account status</p>
        {kycsteps.steppercentage === "100%" ? (
          <div></div>
        ) :(  <div>
          <h2 className='font-bold '>Reminder to Complete your <Link to='/kyc' className='p-0 underline'>KYC Verification</Link> <ArrowRightOutlined/> </h2>
         
          <div className='kyc'>
          <div className={classNames(kycsteps?.step1)}></div>
            <div className={classNames(kycsteps?.step2)}></div>
            <div className={classNames(kycsteps?.step3)}></div>
            <div className={classNames(kycsteps?.step4)}></div>
          </div>
          <p> {kycsteps.steppercentage}</p>
          </div>)}
      </div>
      <div>
        <div style={{ backgroundImage:`url(${bg})` }} className='py-12 px-40 border-white border-2 font-normal rounded-2xl mt-16 pl-24  bg-cover bg-[100%] '>
          <div className=' flex items-center gap-48 '>
            <div className='flex flex-col gap-4'>
            <p>NGN</p>
            <p className='text-6xl font-bold'>1,106,000</p>
            <p className='bg-black rounded-3xl px-4 py-2 w-44 '>Withdraw Funds</p>
            </div>
            <div className='flex flex-col gap-4 text-black '>
              <p>
              ₦20,000
              <p>pending</p>
              </p>
              <p>
              ₦100,000
              <p>Ambassador</p>
              </p>
            </div>
          </div>
          <div className=' bg-[#6D6F76] bg-opacity-50 p-4 flex items-center gap-6 justify-between rounded-2xl mt-14'>
            <div>Start Trading <ArrowRightOutlined/></div>
            <div className='bg-[#D9D9D9] p-2 px-8 rounded-2xl text-black flex gap-4 items-center'>Crypto <FaBitcoin size={30}/></div>
            <div className='bg-[#D9D9D9] p-2 px-8 rounded-2xl text-black flex gap-4 items-center'>Gift Cards <MdCardGiftcard size={30}/></div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-20 gap-8'>
        <div  style={{ backgroundImage:`url(${desc1})` }} className='bg-cover border rounded-2xl p-8 flex justify-between items-end gap-5 pt-20'>
          <div>
            <h1 className='font-bold text-xl'>Buy airtime at your convenience</h1>
            <p className='text-sm'>Get Airtime and Date Bundles at ease</p>
          </div>
          <div className='flex gap-3 p-1'> <FaChevronCircleLeft/> <FaChevronCircleRight/></div>
          
        </div>
        <div  style={{ backgroundImage:`url(${desc2})` }} className='bg-cover border rounded-2xl p-8 flex justify-between items-end gap-5 pt-20'>
          <div>
            <h1 className='font-bold text-xl'>Need more insight on Crypto</h1>
            <p className='text-sm'>Click here to get more info</p>
          </div>
          <div className='flex gap-3 p-1'> <FaChevronCircleLeft/> <FaChevronCircleRight/></div>
          
        </div>
        
      </div>
      <div className='bg-[#D9D9D9]  p-10 flex items-center justify-between dashsection text-black mt-20 rounded-2xl'>
        <div className='cont border-r '>
          <div>
          <h2>Top Gift Cards</h2>
          <p>Trade gift cards for Fast Cash</p>
          <p className='soon'>coming soon</p>
          </div>
         <span> <MdCardGiftcard  size={30}/></span>
        </div >
        <div className='cont border-r '>
          <div>
          <h2>Check Rates</h2>
          <p>Know your gift cards andcrypto value at a glance</p>
          <p className='soon'>coming soon</p>
          </div>
          <span><MdRateReview size={30}/></span>
        </div>
        <div className='cont '>
          <div>
          <h2>Buy Airtime</h2>
          <p>Buy airtime at a glance</p>
          <p className='soon'>coming soon</p>
          </div>
          <span><MdCall size={30}/></span>
        </div>
       
      </div>
      <Link className=' underline text-white float-right p-2'>View All <ArrowRightOutlined/></Link>
      <div >
     <div className='mt-20'>
         <p className='font-bold mb-4'>Gift Card Transactions</p>
         <div className='border p-8 flex gap-12 items-center rounded-2xl justify-between'>
          <TbGiftCardFilled size={100} className=''/>
          <p>You have no gift card transaction yet.</p>
          <div className=' p-4 bg-white text-black font-medium rounded-2xl'>Kick off a Trade <ArrowRightOutlined/></div>
         
         </div>
         <Link className=' underline text-white float-right p-2'>View All <ArrowRightOutlined/></Link>
      </div>
      <div className='mt-20'>
         <p className='font-bold mb-4'>Crypto Transactions</p>
         <div className='border p-8 flex gap-12 items-center rounded-2xl justify-between'>
          <FaBitcoin size={100} className=''/>
          <p>You have no crypto transaction yet.</p>
          <div className=' p-4 bg-white text-black font-medium rounded-2xl'>Kick off a Trade <ArrowRightOutlined/></div>
         
         </div>
      </div>
      <Link className=' underline text-white float-right p-2'>View All <ArrowRightOutlined/></Link>
      </div>
    </div> 
  )
}

export default Dashboard