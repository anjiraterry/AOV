import { Input, Form, Select } from 'antd'
import bg from '../images/bg.png'

import React from 'react'
import { DashNav } from '../components/Dash'
import { CheckCircleOutlined } from '@ant-design/icons'

const Kyc = () => {
  return (
    <div style={{ backgroundImage:`url(${bg})` }}>
    <DashNav/>
     <div className='p-32  text-white flex flex-col items-center justify-centers'>
     <div className='text-center pb-8'>
        <h1 className='text-5xl font-bold '>KYC Verification</h1>
        <p className='font-thin'>Complete your KYC verification to start trading.</p>
      </div>
    <div className='kyc'>
          <div className='quarter'>Step 1</div>
          <div className='half'> Step 2</div>
          <div className='threequater'>Step 3</div>
          <div className='full'>Step 4</div>
     </div>
     <div>
   
    <div className=' '>
    <div className='flex items-center justify-center gap-4 mt-10 mb-8  '>
    <div className='bg-[#D9D9D9] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-black'>1</div>
    <div >
    <h1 className='text-3xl font-bold mb-2'>Step 1 : Bank Details</h1>
    <p className=' font-thin mb-2 text-lg text-wrap'>Enter your bank information. This is the bank account we will pay your funds to when  you request for withdrawal.</p>
    </div>
    </div>
       
          <Form layout="vertical" className=' flex gap-8 flex-col mb-8'>
            <Form.Item label="Select Bank ">
            <Select
            placeholder= "What bank do you use?"
            className='border-white rounded-xl  caret-black placeholder-black'
            />
            </Form.Item>
            <Form.Item label="Account Number">
              <Input/>
            </Form.Item>
          </Form>
          <div className='text-center p-4 bg-orange-600 rounded-3xl'>Next</div>
        </div>
        
        <div>
        <div className='flex items-center gap-4 mt-10 mb-8 '>
    <div className='bg-[#D9D9D9] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-black'>2</div>
    <div >
    <h1 className='text-3xl font-bold mb-2'>Step 2 : Personal Information</h1>
    <p className=' font-thin mb-2 text-lg'>Enter your name and phone number, Make sure the names match with the one on the provided bank account</p>
    </div>
    </div>
    <div>
          <Form layout="vertical"className=' flex gap-8 flex-col mb-8'>
            <Form.Item label="First Name">
              <Input/>
            </Form.Item>
            <Form.Item label="Last Name">
              <Input/>
            </Form.Item>
            <Form.Item label="Phone Number">
              <Input/>
            </Form.Item>
          </Form>
          <div className='text-center p-4 bg-orange-600 rounded-3xl'>Next</div>  
        </div>
        </div>
        <div>
        <div className='flex items-center gap-4 mt-10 mb-8 '>
    <div className='bg-[#D9D9D9] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-black'>3</div>
    <div >
    <h1 className='text-3xl font-bold mb-2'>Step 3 : Identity Verification</h1>
    <p className=' font-thin mb-2 text-lg'>Enter your BVN. Required to validate your identity.</p>
    </div>
    </div>
    
          <Form layout='vertical' className=' flex gap-8 flex-col mb-8'>
            <Form.Item label="BVN">
              <Input/>
            </Form.Item>
          </Form>
          <div className='text-center p-4 bg-orange-600 rounded-3xl'>Next</div>
        </div>
        <div>
        <div className='flex items-center gap-4 mt-10 mb-8 '>
    <div className='bg-[#D9D9D9] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-black'>4</div>
    <div >
    <h1 className='text-3xl font-bold mb-2'>Step 4 : Additional Details</h1>
    <p className=' font-thin mb-2 text-lg'>Additional Information Required</p>
    </div>
    </div>
          <Form layout='vertical' className=' flex gap-8 flex-col mb-8'> 
            <Form.Item label="Date of Birth">
              <Input/>
            </Form.Item>
            <Form.Item label="Gender">
              <Input/>
            </Form.Item>
            <Form.Item label="Country">
              <Input/>
            </Form.Item>
          </Form>
          <div className='text-center p-4 bg-orange-600 rounded-3xl'>Submit Details</div>
        </div>
        <div className='flex items-center gap-4 mt-20 mb-8 flex-col '>
        <p className='text-7xl'>You’re set to go <CheckCircleOutlined/> </p>
        <p className='text-3xl font-thin'>Enjoy seamless trading and exchange services</p>
        </div>
        <div className='text-center p-4 bg-orange-600 rounded-3xl'>Go to Dashboard</div>
        
    </div>
    </div>
    </div>
  )
}

export default Kyc