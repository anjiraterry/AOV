import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../images/bg.png'
import { Form, Input } from 'antd'
import { ContactsTwoTone, FacebookOutlined, InstagramOutlined, WhatsAppOutlined, XOutlined } from '@ant-design/icons'
import { MdContactMail, MdContactPage, MdContactPhone, MdContactSupport } from 'react-icons/md'
import TextArea from 'antd/es/input/TextArea'

const Contact = () => {
  return (
    <div>
       <div style={{ backgroundImage:`url(${bg})` }} className='bg-cover p-32 text-white' >
      <div  className='flex flex-col items-center '>
      <div className='text-center pb-16'>
        <h1 className='text-5xl font-bold '>Contact Us</h1>
        <p className='font-thin'>For enquiries, suggestions and assistance, contact us</p>
      </div>
      </div>
      <div className='border  rounded-2xl '>
        <div className=' flex items-center '>
        <div className='p-32 flex-2'><MdContactMail size={250}/> </div>
      <div className='flex-1'>
        <Form layout='vertical' className=' pr-12 pt-14 pb-12'>
          <Form.Item label='Name'>
            <Input className='border-0 border-b rounded-none'/>
          </Form.Item>
          <Form.Item label='Email'>
            <Input className='border-0 border-b rounded-none'/>
          </Form.Item>
          <Form.Item label="Subject">
            <Input className='border-0 border-b rounded-none'/>
          </Form.Item>
          <Form.Item label="Message">
            <TextArea className='border-0 border-b rounded-none bg-transparent hover:bg-transparent focus:bg-transparent'/>
          </Form.Item>
     
        </Form>
              
        <div className='flex flex-col gap-4  font-thin text-black bg-white contact p-6 rounded-tl-3xl '>
      <p>Alexis Ojere Ventures ltd <br/> Allen Avenue, Lagos State, Nigeria</p>
          <p>support@myaov.com</p>
          <div className=''>
            <Link><WhatsAppOutlined/></Link>
            <Link><XOutlined/></Link>
            <Link><InstagramOutlined/></Link>
            <Link><FacebookOutlined/></Link>
          </div>
        </div>
        </div>
        
        </div>
    
      </div>
      
   
      </div>
      
    </div>
  )
}

export default Contact