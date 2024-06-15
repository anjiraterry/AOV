import React from 'react';
import { useState } from 'react';
import icon from '../images/aov.png'
import { Link } from 'react-router-dom';
import {ConfigProvider, Input , Form, Checkbox, Button } from 'antd';
import {  EyeInvisibleOutlined, EyeOutlined, GoogleCircleFilled, FacebookFilled, AppleFilled } from "@ant-design/icons";



const Login = () => {

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const google = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:8000/auth/facebook", "_self");
  };

  const apple = () => {
    window.open("http://localhost:8000/auth/apple", "_self");
  };

  const [passwordVisible, setPasswordVisible] = React.useState(false);


  const style = {
    background: 'none',
    outline:'none '
    
    }
  

  return (
    < >
     <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#fb923c ',
          },
          Input: {
            colorPrimary: '#fb923c ',
          },
          Checkbox:{
            colorPrimary: '#fb923c ',
          }
        },
      }}
    >
       
        <div className='bg-gray-900 flex flex-col gap-5 justify-center items-center w-screen h-screen left-0 absolute'>
        <img src={icon} className='w-32'/>
            <div className='border-solid border-2 flex flex-col justify-center items-center  border-#fff p-6 rounded-3xl'>
              <p className='text-2xl text-white '>Sign in</p>
              <p className='text-md font-thin text-white '> Pick up where you left off.</p>
              <div className=' flex items-center flex-col signin pb-4 border-b-2'>
                <a  onClick={google}  className='group hover:bg-orange-600 hover:border-orange-600'>
                 
                 <div className='group-hover:text-white'> 
                 <GoogleCircleFilled className='text-xl icon'/>
                 Continue with Google
                  </div>

                </a>
                <a onClick={facebook} className='group hover:bg-orange-600 hover:border-orange-600' >
                  
                <div className='group-hover:text-white'>
                <FacebookFilled className='text-xl icon'/>
                    Continue with  Facebook
                </div>
                </a>
             
              </div>
              <Form  layout="vertical" className=' mt-4'>
                <Form.Item 
                 label="Email">
                <Input 
                value={email} onChange={ handleEmailChange} 
                 style={{background:' none' }}
                variant="outlined"
                className='bg-transparent text-white hover:bg-transparent hover:border-orange-400 focus:border-orange-400'
                />
                </Form.Item>
                <Form.Item
                 label="Password"
                 className='bg-transparent text-white hover:bg-transparent hover:border-orange-400 focus:border-orange-400'>
                <Input.Password
                 value={password} onChange={ handlePasswordChange} 
                style={style}
                  variant="outlined"
                  className='bg-transparent text-white focus:border-orange-400 hover:border-orange-400 outline-none pass'
                  iconRender={(visible) => (visible ? <EyeOutlined style={{color:' rgb(251 146 60 )'}} /> : <EyeInvisibleOutlined  style={{color:' rgb(251 146 60 )'}}/>)}
                />
                </Form.Item>
                <Form.Item className='flex items-center justify-between gap-8 '>
                  <Checkbox  className='text-white '>Remember me</Checkbox>
                  <Link className="hover:text-orange-400" href="">
                   Forgot password?
                  </Link>
     
                  </Form.Item>
                  <Form.Item >
                  <button className="w-full hover:text-orange-400 hover:bg-white bg-orange-600 p-2 rounded-3xl text-white border-0">
                   Log in
                  </button>
                 
                  </Form.Item>
                  <a className='' href="">Dont have an account? Register now!</a>
                
              </Form>

            </div>
        </div>
        </ConfigProvider>
    </>
  )
}

export default Login