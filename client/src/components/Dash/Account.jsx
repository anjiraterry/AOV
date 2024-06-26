import { Avatar } from 'antd'
import React from 'react'
import { EditOutlined, UserOutlined } from '@ant-design/icons'
import Form from 'antd/es/form/Form'
import Input from 'antd/es/input/Input'

const Account = () => {
  return (
    <div className='p-20 mt-2'>
      <h1 className='text-3xl font-bold mb-10'>Account Settings</h1>
      <p className=' font-thin mb-2 text-lg'>My profile</p>
      <div className='border-2 p-12 rounded-3xl flex flex-col gap-12 '>
      
        <div className='flex  justify-between  items-center'>
        <div className='flex items-center gap-4'>
          <div> <Avatar className="bg-[#87d068] , w-20 h-20" icon={<UserOutlined className='text-5xl'/>} /></div>
          <div>
            <h1 className='text-xl font-bold'>Alexis Ojere</h1>
            <h2 className='text-lg '>Administrator</h2>
            <p className='text-sm font-thin'>Lagos, Nigeria</p>
          </div>
        </div>
        <div className='flex justify-between px-8 py-2 border-2 gap-2 rounded-3xl'>
          <p>Edit</p>
          <EditOutlined/>
        </div>
      </div>
      <div>
        <Form layout='vertical'>
          <div className='flex justify-between gap-5'>
          <Form.Item label="First Name">
            <Input  />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input/>
          </Form.Item>
          <Form.Item label="Username">
            <Input/>
          </Form.Item>
          </div>
          <div className=' flex justify-between gap-4'>
          <Form.Item label="Email Address" className="flex-1">
            <Input/>
          </Form.Item>
          <Form.Item  label="Date of Birth" className="flex-2">
            <Input/>
          </Form.Item>

          </div>
          <div className='flex justify-between gap-4'>
          <Form.Item label="Gender" className="flex-2">
            <Input/>
          </Form.Item>
          <Form.Item label="Nationality" className="flex-2">
            <Input/>
          </Form.Item>
          <Form.Item label="Mobile" className="flex-1">
            <Input/>
          </Form.Item>

          </div>
          <div className='flex justify-between gap-4'>
          <Form.Item label="Password" className="flex-2">
            <Input/>
          </Form.Item>
          <Form.Item label="Location" className="flex-1">
            <Input/>
          </Form.Item>

          </div>

        </Form>
      </div>
      </div>
    </div>
  )
}

export default Account