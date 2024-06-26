import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import icon from '../images/aov.png'
import {ConfigProvider, Input , Form, Checkbox, Button ,Select, Space } from 'antd';
import {  EyeInvisibleOutlined, EyeOutlined, GoogleCircleFilled, FacebookFilled, AppleFilled , ArrowLeftOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import { Radio } from 'antd';

import { Link, useNavigate } from 'react-router-dom'

import bg from '../images/bg.jpeg'
import axios from 'axios';


const Signup = () => {
  const navigate = useNavigate()
  
 

 


const [email, setEmail] = useState('');
const [password , setPassword] = useState('');
const [name , setName] = useState('');
const [value, setValue] = useState(1);
const [find, setFind] =useState()
const [dob , setDob] = useState(null)
const [term , setTerm] = useState(false)


//Select onChange
  const selectChange = (val) => {
  console.log(`selected ${val}`);
  setFind(val)
};


//Term and condition onChange
const handleTerm = () =>{
  setTerm(!term)
}


//Name onChange
const onName = (e) => {
  setName(e.target.value)

  const na = e.target.value
  if(na.length>0){
    setNameError('')
    setStepName(true)
  }else{
    setNameError( 'Name required')
    setStepName(false)
  }
}


//Date onChange
  function onChange(date, dateString) {
    console.log(date, dateString);

    setDob(dateString)
    if(calculateAge(dateString) > 18){
      setDOBError('')
      setStepDate(true)
    }else{
      setDOBError('Date of Birth required')
      setStepDate(false)
    }
   

    }

//Radio Button onChange
  const onRadio= (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


//Email onChange
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError('')
     } else{ setEmailError('Invalid email')}
  };


 
//Register Object
 


  //Submit Functiion
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newUser = {
      email: email,
      password: password,
      name: name,
      dob: dob,
      radio: value,
      select: find,
    };
  
    try {
      const response = await axios.post('http://localhost:8000/api/register', newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      // Handle success, e.g., redirect to another page or show a success message
      alert('User registered successfully');
    } catch (error) {
      console.error('There was an error registering the user!', error);
      // Handle error, e.g., show an error message
      alert('Error registering user');
    }
  
  };

  

 

//Password validation check

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
     
    if (pass.match(letter) && pass.match(specialChars ) && (pass.length > 9 )) {
      setPasswordError('')
     } else{ setPasswordError('Invalid Password')}


    };

    //----------------------------------------


    //Signup Form Next and Previous

    const [steps, setSteps] = useState(0)


    const handleNext= () => {
        setSteps(steps + 1);
        if(steps > 3){
          setSteps(0)
        }
    }
  
    const handleBack = (e) => {
      e.preventDefault()
      setSteps(steps - 1);
  }
 //------------------------------------------

//Form validation

 const [emailError,setEmailError] = useState("")
 const [passwordError,setPasswordError] = useState("")
 const[nameError, setNameError] = useState("")
 const [dobError, setDOBError] = useState('');
 const[selectError, setSelectError] = useState("")
 const[termError, setTermError] = useState("")



 //Email validation
 const emailval =(e) =>{
 e.preventDefault()

  if (!email) {
  setEmailError( 'Email required')
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
   setEmailError('Invalid email address')
  } else{
    handleNext()
  }
}


//Password validation
const passwordval = (e)=>{
  e.preventDefault()
  if (!password) {
    setPasswordError( 'Password required')}
 else if(checked ===false || checkedtwo ===false || checkedthree === false) {
    setPasswordError('Invalid Password')
  } else{
    handleNext()
  }

}




//Step 2 validation
const [stepName, setStepName] = useState(false)
const [stepDate, setStepDate] = useState(false)

const  steptwoval = (e) => {


  e.preventDefault()



  if (stepName ===true && stepDate === true){
    handleNext()
  }

  if(!name){
    setNameError( 'Name required')
    setStepName(false)
  } else {
    setNameError( '')
    setStepName(true)
  }

    const age = calculateAge(dob);
    console.log(age)
   

    if(!dob){
      setDOBError('Date of Birth required')
      setStepDate(false)
    } else if (age < 18) {
      setDOBError('You must be at least 18 years old.');
      setStepDate(false)
    } else {
     setStepDate(true)
    
    }
  } 

const calculateAge = (dob) => {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;


 
};


const [stepSelect, setStepSelect] = useState(false)
const [stepTerm, setStepTerm] = useState(false)

const  stepthreeval = (e) => {


  e.preventDefault()

  if (stepTerm ===true && stepSelect === true){
    handleSubmit(e)
  }


if(!find){
  setSelectError( 'Please pick an option')
  setStepSelect(false)
} else {
  setSelectError( '')
  setStepSelect(true)
}

if(term === false){
  setTermError( 'Accept Terms and conditions to signup')
  setStepTerm(false)
} else {
  setTermError( '')
  setStepTerm(true)
}
}

  //--------------------------------------------

  //Passport js Signin options

  const google = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:8000/auth/facebook", "_self");
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
      <div className='opacity-60 font-thin text-xs text-white'>{emailError}</div>
        <button onClick={emailval}  className="w-full mt-6  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
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
        <div className='opacity-60 font-thin text-xs text-white'>{passwordError}</div>
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
        <button onClick={passwordval} className="w-full  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
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
        value={name}
        onChange={onName}
         style={{background:' none' }}
        variant="outlined"
        className='bg-transparent text-white hover:bg-transparent hover:border-orange-400 focus:border-orange-400'
        />
          <div className='opacity-60 font-thin text-xs text-white'>{nameError}</div>
        </Form.Item>
      

        <Form.Item 
         label="Date of Birth">
        <DatePicker format="MM/DD/YYYY" onChange={onChange} className='bg-transparent text-white hover:bg-transparent hover:border-orange-400 focus:border-orange-400 w-full' onChange={onChange} />
        <div className='opacity-60 font-thin text-xs text-white'>{dobError}</div>
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
          <button onClick={steptwoval} className="w-full  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
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
        placeholder= "How did you hear about us?"
        value={find}
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
 <div className='opacity-60 font-thin text-xs text-white'>{selectError}</div>

        </Form.Item>
     

        <Form.Item 
        >
         <Checkbox checked={term} onClick={handleTerm} className='text-white '> I agree to AOV <Link className="p-0 underline" to="/terms">Terms & Conditions</Link></Checkbox>
         <div className='opacity-60 font-thin text-xs text-white'>{termError}</div>

        </Form.Item>

          <Form.Item >
          <button onClick={stepthreeval}  className="w-full  hover:bg-orange-400 bg-orange-600 p-2 rounded-3xl text-white border-0">
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
       
        <div  style={{ backgroundImage:`url(${bg})` }} className='bg-cover flex flex-col gap-5 justify-center items-center w-screen h-full left-0 absolute'>
        <img src={icon} className='w-32'/>
            <div className='border-solid border-2 flex flex-col justify-center items-center  border-#fff p-6 rounded-3xl'>
              <p className='text-2xl text-white '>Sign up</p>
              <p className='text-md font-thin text-white '>Begin your AOV Journey.</p>
                <form  className='relative'>
                  {step[steps].step }
                </form >
             

            
            </div>
        </div>
        </ConfigProvider>
    </>
  )
}

export default Signup;