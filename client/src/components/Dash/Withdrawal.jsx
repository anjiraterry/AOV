import React from 'react'
import bg from '../../images/accountbg.png'
import {Input, Table } from 'antd';
import { MdApproval, MdPending } from 'react-icons/md';
import { CheckCircleFilled } from '@ant-design/icons';



const Withdrawal = () => {
  const columns = [
    {
      title: 'Withdrawal Id',
      dataIndex: 'withdrawalid',
      key: 'withdrawalid',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank',
    },
    {
     
      dataIndex: 'icon',
      key: 'icon',
    },
  
  ]



const withdrawals =[{
      
  content :[{
    withdrawalid : "AW1OVLPMEAGQt" ,
    status: 	"Pending",
     amount: "₦20,000",
     bank: "First ",
     icon: <MdPending size={20}/>
    },
    {
    withdrawalid : "AW1OVLPMEAGQt" ,
     status: 	"Approved",
      amount: "₦20,000",
      bank: "Access",
      icon: <CheckCircleFilled  size={20}/>
    },
    {
    withdrawalid : "AW1OVLPMEAGQt" ,
     status: 	"Approved",
      amount: "₦20,000",
      bank: "Guaranteed Trust",
      icon: <CheckCircleFilled  size={20}/>
    },

]
}, 



]
  return (
    <div className='pt-20 px-20 mt-2 text-lg font-thin'>
       <h1 className='text-3xl font-bold '>Current balance</h1>
       <div style={{ backgroundImage:`url(${bg})` }} className='py-12 px-40 border-white border-2 font-normal rounded-2xl mt-10 pl-24  bg-cover bg-[100%] '>
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
        </div>
        <div>
       <p className='font-bold mt-20 mb-4'>Withdrawal Log</p>
       <div className=' p-20 rounded-t-xl  bg-white'> 
       <div><Input  className='text-black border-gray-400 mb-4'/> </div>
       
       {withdrawals.map((withdrawal, index ) =>(
          <div   key={index} >
   <Table  columns={columns} dataSource={withdrawal.content} pagination={false} />
   </div>
     ))}
  
       <div>

       </div></div>
       </div>
    </div>
  )
}

export default Withdrawal