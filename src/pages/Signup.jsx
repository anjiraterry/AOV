import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import icon from '../images/aov.png'
import { Link } from 'react-router-dom';
import {ConfigProvider, Input , Form, Checkbox, Button ,Select, Space } from 'antd';
import {  EyeInvisibleOutlined, EyeOutlined, GoogleCircleFilled, FacebookFilled, AppleFilled , ArrowLeftOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import { Radio } from 'antd';




const Signup = (props) => {

  
 const [steps, setSteps] = useState(0)


  const handleNext= () => {
      setSteps(steps + 1);
      if(steps > 3){
        setSteps(0)
      }
  }

  const handleBack = () => {
    setSteps(steps - 1);
}

  const selectChange = (value) => {
  console.log(`selected ${value}`);
};

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

  console.log(password)

  const [value, setValue] = useState(1);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const [checked, setChecked] = useState(false)
  const [checkedtwo, setCheckedtwo] = useState(false)
  const [checkedthree, setCheckedthree] = useState(false)
 
  var specialChars = /[`0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ 
  var letter = /[A-Za-z]/g;
  var numbers = /[0-9]/g;
     
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
   const pass = event.target.value
    if(pass.match(letter)){
      setChecked(true)
    }else{ setChecked(false)}

    if(pass.match(specialChars)){
      setCheckedtwo(true)
    }else{ setCheckedtwo(false)}

    if(pass.length > 9 ){
      setCheckedthree(true)
    }else{ setCheckedthree(false)}
    
   

  };
 


 



   

   const checktwo= () =>{
   if(password.match(numbers && specialChars )){
    setChecked(true)
   }else{
    setChecked(false)
   }}

   const checkthree = () =>{
    if(password.length > 10 ){
      setChecked(true)
     }else{
      setChecked(false)
     }}
   
  

 const passwordCheck= () =>{
  var specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ 
  var lowerCase = /[a-z]/g;
  var upperCase = /[A-Z]/g;
  var numbers = /[0-9]/g;


  
 }
  
  const onRadio= (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };


  const [passwordVisible, setPasswordVisible] = React.useState(false);


  const style = {
    background: 'none',
    outline:'none '}


    const step= [{
      
      step:  <Form  layout="vertical" className=' mt-4'>
        <Form.Item 
       label="Email">
      <Input 
      value={email} onChange={ handleEmailChange} 
       style={{background:' none' }}
      variant="outlined"
      className='bg-transparent text-white hover:bg-transparent hover:border-orange-400 focus:border-orange-400'
      />
        <button onClick={handleNext}  className="w-full mt-6  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
         Next
        </button>
      </Form.Item>
      <div className='text-white text-center bg-gray-900 a mb-2' >or </div > 

     <div className=' flex items-center flex-col signin pb-4'>
       <Link to=''  onClick={google}  className='group hover:bg-orange-600 hover:border-orange-600'>

        <div className='group-hover:text-white'> 
      <GoogleCircleFilled className='text-xl icon'/>
           Continue with Google
         </div>
     
       </Link>
      <Link to='' onClick={facebook} className='group hover:bg-orange-600 hover:border-orange-600' >
         
       <div className='group-hover:text-white'>
       <FacebookFilled className='text-xl icon'/>
           Continue with  Facebook
       </div>
       </Link>
     
     </div>
     <a className='' href="">Already have an account? Login here.</a>

       
      
    </Form>
    
    } ,
   { step:  <section >
    <div className=' text-white mt-4 flex gap-2 mb-4'>
       <ArrowLeftOutlined  onClick={handleBack} className=' text-2xl hover:text-orange-400'/>
      <div>   
    <h3 className='opacity-80 '>Step 1 of 3</h3>
     <h1 className='font-bold text-lg'>Create a password </h1> 
     </div>
     </div>        
    <Form  layout="vertical" className=' mt-4'>
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
      <Form.Item className='text-white flex flex-col gap-2' >
      Your password must contain at least
      <div  className='text-white flex flex-col gap-2' >
        <Checkbox checked= {checked}  className='text-white'> 1 letter</Checkbox>
        <Checkbox  checked= {checkedtwo}  className='text-white'>  1 number or special character (example: # ? ! &) </Checkbox>
        <Checkbox checked={checkedthree} className='text-white'>  10 characters  </Checkbox>
        </div>
      </Form.Item>
        <Form.Item >
        <button onClick={handleNext} className="w-full  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
         Next
        </button>
       
        </Form.Item>
       
      
    </Form>
    </section> },
    {step: <section>  
      <div className=' text-white mt-4  flex gap-2 mb-4'>
         <ArrowLeftOutlined onClick={handleBack} className=' text-2xl hover:text-orange-400'/>
        <div>   
      <h3 className='opacity-80 '>Step 2 of 3</h3>
       <h1 className='font-bold text-lg'>Tell us about yourself </h1> 
       </div>
       </div>        
      <Form  layout="vertical" className=' mt-4'>
      <Form.Item 
         label="Name">
        <Input 
         style={{background:' none' }}
        variant="outlined"
        className='bg-transparent text-white hover:bg-transparent hover:border-orange-400 focus:border-orange-400'
        />
        </Form.Item>

        <Form.Item 
         label="Date of Birth">
        <DatePicker className='bg-transparent text-white hover:bg-transparent hover:border-orange-400 focus:border-orange-400 w-full' onChange={onChange} />
        </Form.Item>

        
        <Form.Item  label="Gender" className='text-white flex flex-col gap-2' >
        <p className='text-xs opacity-80 mb-4'> We use your gender to help personalize our <br/> content recommendations and ads for you you.</p>
        <div  className='text-white flex flex-col gap-2' >
         <Radio.Group onChange={onRadio} value={value} className='flex gap-2 text-white'>
            <Radio className='text-white' value={1}>Man</Radio>
            <Radio  className='text-white' value={2}>Woman</Radio>
            <Radio className='text-white' value={3}>Prefer not to say</Radio>
         </Radio.Group>
         </div>
        </Form.Item>
          <Form.Item >
          <button onClick={handleNext} className="w-full  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
           Next
          </button>
         
          </Form.Item>
         
        
      </Form>
      </section> 
    
    
    },
    {step: <section>  
      <div className=' text-white  flex gap-2 mt-4 mb-4'>
         <ArrowLeftOutlined  onClick={handleBack} className=' text-2xl hover:text-orange-400'/>
        <div>   
      <h3 className='opacity-80 '>Step 3 of 3</h3>
       <h1 className='font-bold text-lg'>Finishing up </h1> 
       </div>
       </div>        
      <Form  layout="vertical" className=' mt-4'>
      <Form.Item className='text-white flex flex-col gap-2  hover:border-orange-400' >
        <Select 
        placeholder="How did you hear about us?"
      
        onChange={selectChange}
          options={[
                 {
                 label: 'Search Engine( Google Yahoo, etc).',
                 value: 'search',
             },
             {
                label: 'Freinds or family.',
                value: 'friends',
                 },
                 {
                 label: 'Social Media',
                 value: 'social',
               },
               {
                 label: 'Blog or Publication',
                 value: 'blog',

                 },
                 {
                 label: 'Other',
                 value: 'other',

                 },
         ]}
 />

        </Form.Item>
     

        <Form.Item 
        >
         <Checkbox  className='text-white '> I agree to AOV <Link className="p-0 underline" to="/terms">Terms & Conditions</Link></Checkbox>
        </Form.Item>

          <Form.Item >
          <button className="w-full  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
           Sign up
          </button>
         
          </Form.Item>
         
        
      </Form>
      </section> 
    }
  
  
  ]
  

  return (
    < >
     <ConfigProvider
      theme={{
        components: {
          Select:{
            colorPrimary: '#fb923c ',
          },
          Radio:{
            colorPrimary: '#fb923c ',
          },
          DatePicker:{
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
       
        <div className='bg-gray-900 flex flex-col gap-5 justify-center items-center w-screen h-full left-0 absolute'>
        <img src={icon} className='w-32'/>
            <div className='border-solid border-2 flex flex-col justify-center items-center  border-#fff p-6 rounded-3xl'>
              <p className='text-2xl text-white '>Sign up</p>
              <p className='text-md font-thin text-white '>Begin your AOV Journey.</p>
              <div>
             {/*<div className='border-b-2 mb-2 relative'>
              
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
                <div className='text-white text-center bg-gray-900 a mb-2' >or </div > 

               <div className=' flex items-center flex-col signin pb-4'>
                 <Link to=''  onClick={google}  className='group hover:bg-orange-600 hover:border-orange-600'>
   
                  <div className='group-hover:text-white'> 
                <GoogleCircleFilled className='text-xl icon'/>
                     Continue with Google
                   </div>
               
                 </Link>
                <Link to='' onClick={facebook} className='group hover:bg-orange-600 hover:border-orange-600' >
                   
                 <div className='group-hover:text-white'>
                 <FacebookFilled className='text-xl icon'/>
                     Continue with  Facebook
                 </div>
                 </Link>
               
               </div>
               <a className='' href="">Already have an account? Login here.</a>

                 
                
              </Form>

             <section >
              <div className=' text-white  flex gap-2 mb-4'>
                 <ArrowLeftOutlined className=' text-2xl hover:text-orange-400'/>
                <div>   
              <h3 className='opacity-80 '>Step 1 of 3</h3>
               <h1 className='font-bold text-lg'>Create a password </h1> 
               </div>
               </div>        
              <Form  layout="vertical" className=' mt-4'>
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
                <Form.Item className='text-white flex flex-col gap-2' >
                Your password must contain at least
                <div  className='text-white flex flex-col gap-2' >
                  <Checkbox   className='text-white'> 1 letter</Checkbox>
                  <Checkbox  className='text-white'>  1 number or special character (example: # ? ! &) </Checkbox>
                  <Checkbox  className='text-white'>  10 characters  </Checkbox>
                  </div>
                </Form.Item>
                  <Form.Item >
                  <button className="w-full  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
                   Next
                  </button>
                 
                  </Form.Item>
                 
                
              </Form>
              </section> 

              <section>  
              <div className=' text-white  flex gap-2 mb-4'>
                 <ArrowLeftOutlined className=' text-2xl hover:text-orange-400'/>
                <div>   
              <h3 className='opacity-80 '>Step 2 of 3</h3>
               <h1 className='font-bold text-lg'>Tell us about yourself </h1> 
               </div>
               </div>        
              <Form  layout="vertical" className=' mt-4'>
              <Form.Item 
                 label="Name">
                <Input 
                 style={{background:' none' }}
                variant="outlined"
                className='bg-transparent text-white hover:bg-transparent hover:border-orange-400 focus:border-orange-400'
                />
                </Form.Item>

                <Form.Item 
                 label="Date of Birth">
                <DatePicker className='bg-transparent text-white hover:bg-transparent hover:border-orange-400 focus:border-orange-400 w-full' onChange={onChange} />
                </Form.Item>

                
                <Form.Item  label="Gender" className='text-white flex flex-col gap-2' >
                <p className='text-xs opacity-80 mb-4'> We use your gender to help personalize our <br/> content recommendations and ads for you you.</p>
                <div  className='text-white flex flex-col gap-2' >
                 <Radio.Group onChange={onRadio} value={value} className='flex gap-2 text-white'>
                    <Radio className='text-white' value={1}>Man</Radio>
                    <Radio  className='text-white' value={2}>Woman</Radio>
                    <Radio className='text-white' value={3}>Prefer not to say</Radio>
                 </Radio.Group>
                 </div>
                </Form.Item>
                  <Form.Item >
                  <button className="w-full  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
                   Next
                  </button>
                 
                  </Form.Item>
                 
                
              </Form>
              </section> 

              <section>  
              <div className=' text-white  flex gap-2 mb-4'>
                 <ArrowLeftOutlined className=' text-2xl hover:text-orange-400'/>
                <div>   
              <h3 className='opacity-80 '>Step 3 of 3</h3>
               <h1 className='font-bold text-lg'>Finishing up </h1> 
               </div>
               </div>        
              <Form  layout="vertical" className=' mt-4'>
              <Form.Item className='text-white flex flex-col gap-2  hover:border-orange-400' >
                <Select 
                placeholder="How did you hear about us?"
              
                onChange={selectChange}
                  options={[
                         {
                         label: 'Search Engine( Google Yahoo, etc).',
                         value: 'search',
                     },
                     {
                        label: 'Freinds or family.',
                        value: 'friends',
                         },
                         {
                         label: 'Social Media',
                         value: 'social',
                       },
                       {
                         label: 'Blog or Publication',
                         value: 'blog',
    
                         },
                         {
                         label: 'Other',
                         value: 'other',
    
                         },
                 ]}
         />

                </Form.Item>
             

                <Form.Item 
                >
                 <Checkbox  className='text-white '> I agree to AOV <Link className="p-0 underline" to="/terms">Terms & Conditions</Link></Checkbox>
                </Form.Item>

                
                <Form.Item  className='text-white flex flex-col gap-2' >
              
                </Form.Item>
                  <Form.Item >
                  <button className="w-full  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
                   Sign up
                  </button>
                 
                  </Form.Item>
                 
                
              </Form>
              </section> 
             
                </div> */}
              </div>
             
                <div className='relative'>
                  {step[steps].step }
                </div>
             

            
            </div>
        </div>
        </ConfigProvider>
    </>
  )
}

export default Signup;