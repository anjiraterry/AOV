import { ArrowDownOutlined, ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'
import {Table } from 'antd';

const GiftCards = () => {
  const columns = [
    {
      title: 'Transaction Id',
      dataIndex:  'transactionid',
      key:  'transactionid',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },]


const transactions =[{
      
       content :[{
                 transactionid : "AW1OVLPMEAGQt" ,
                 date: 	"June 20th, 2024",
                 amount: "₦20,000"
                 },
                 {
                 transactionid : "AW1OVLPMEAGQt" ,
                  date: 	"June 20th, 2024",
                  amount: "₦20,000"
                 },
                 {
                 transactionid : "AW1OVLPMEAGQt" ,
                  date: 	"June 20th, 2024",
                  amount: "₦20,000"
                 },
       
    ]
    }, 
    


]

  return (
    <div> 
    <div className=' flex justify-between items-center gap-24 pb-10 border-b mb-10 '>
    <div className='flex flex-col gap-4 border items-center justify-between rounded-3xl p-8 px-20'>
    <div className='giftcard flex gap-24 items-center justify-between'>
        <div>
          <div><div >?</div></div>
        </div> </div>
      <p className='text-xl font-bold text-center '>You have no gift card <br/> transaction yet </p>
      <p className='text-white bg-orange-600 rounded-2xl p-2 px-6'>Kick off a Trade <ArrowRightOutlined/></p>
    </div>
    <div className='flex flex-col gap-4 border-2 items-center justify-between rounded-3xl p-8 px-20'>
    <div className='giftcard flex gap-24 items-center justify-between'>
        <div>
          <div><div >?</div></div>
        </div> </div>
      <p className='text-xl font-bold text-center '>You have no gift card <br/> transaction yet </p>
      <p className='text-white bg-orange-600 rounded-2xl p-2 px-6'>Kick off a Trade <ArrowRightOutlined/></p>
    </div>
   </div>
   <div className='flex justify-between gap-6 '>
   <div className='flex-1 pb-24 bg-white' >
   {transactions.map((transaction, index ) =>(
          <div   key={index} >
   <Table  columns={columns} dataSource={transaction.content} pagination={false} />
   </div>
     ))}
   </div>
   <div>
   <ArrowRightOutlined className='text-xl font-bold py-14'/>
   </div>
   <div className='flex-2 bg-white text-black pb-72 '>
    <div className=' bg-orange-600 text-white p-3 py-12'>
      <h1 className='text-3xl font-bold'>₦20,000</h1>
      <span className='font-thin text-xs flex items-center justify-between gap-4'>
      <p>AW1OVLPMEAGQ</p> <p>Download Statement <ArrowDownOutlined/></p>
      </span>
    </div>
   </div>
   </div>
   </div>
  )
}

export default GiftCards