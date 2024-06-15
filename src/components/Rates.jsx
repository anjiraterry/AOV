import React from 'react'
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {Table } from 'antd';

const Rates = () => {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Denomination',
          dataIndex: 'denomination',
          key: 'denomination',
        },
        {
          title: 'Sell Rate',
          dataIndex: 'sellRate',
          key: 'sellRate',
        },]

    const [open, setOpen] = React.useState(null);
    const toggle = id => setOpen(open === id ? undefined : id)

    const rates =[{
            id: 1,
            icon: 'img', 
           title :   "Apple Gift Card", 
           content :[{
                     name : "Amazon UK All receipt" ,
                     denomination: 	"50 - 500",
                     sellRate: "₦930"
           },
        ]
        }

]


  return (
    <div>
        <div className=' lg:px-[105px] lg:py-28  md:px-28   md:pt-24    min-[100px]:p-8  grid min-[100px]:py-20  gap-6 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1'>
        {rates.map((rate, index ) =>(
          <div   key={index} >
           <div className='relative text-black font-basc'>
            
           <div className=''>
           
           <h1    onClick={() => toggle(rate.id)}  className='text-xl flex items-center cursor-pointer justify-between border-solid border-2 rounded-3xl p-4 py-4 mb-4 border-black'  >
            <span className='lg:text-lg min-[100px]:text-sm'> {rate.title} </span>
            <span className={open === rate.id  ? "rotate-45 duration-300" : "rotate-0 duration-300"}> <PlusCircleOutlined/>    </span>
            </h1>
            <div className= "border-solid overflow-hidden "  >
            <div  className= {open === rate.id  ? "rate_show" : "rate_noshow"}>
                <Table  columns={columns} dataSource={rate.content} pagination={false} />
            </div>
           </div>
             </div>
           </div>
         
         </div>
         ))}
    </div>
    </div>
  )
}

export default Rates