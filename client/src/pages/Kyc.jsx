import React from 'react'
import { useState, useContext , useEffect } from 'react'
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import {ConfigProvider, Input , Form, Checkbox, Button ,Select, Space } from 'antd';
import bg from '../images/bg.png'
import classNames from 'classnames';
import { DatePicker, Radio} from "antd";
import { DashNav } from '../components/Dash'
import { CheckCircleOutlined } from '@ant-design/icons'
import CountryList from 'react-select-country-list';
import { AuthContext } from '../context/AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import { updateStep } from '../app/actions';
import { updateForm } from '../app/actions';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';


const Kyc = () => {





  
  const [bank , setBank] = useState()
  const [ accountno, setAccountno] =useState()
  const [steps, setSteps] = useState(0)
  const [quarter, setQuater]= useState('')
  const [half , setHalf] = useState('')
  const [threeQuater , setThreeQuater] = useState('')
  const [full , setFull] = useState('')
  const [firstName , setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [number , setNumber] = useState('')
  const [bvn, setBVN] = useState('');
  const [dob , setDob] = useState(null)
  const [value, setValue] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState();
  const { auth, userData, token } = useContext(AuthContext);




  const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const email = userData.email

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8000/api/kyc', { ...kycform, email });

    if (response.status === 200) {
      setSuccess('User information updated successfully!');
      dispatch({ type: 'UPDATE_USER_INFO', payload: kycform });
    } else {
      setError('Failed to update user information.');
    }
  } catch (err) {
    setError('An error occurred while updating user information.');
  }}


 const navigate = useNavigate();


  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]); 
  

  const dispatch = useDispatch();
  const kycsteps = useSelector(state => state.kycsteps);
  const kycform = useSelector(state => state.kycform);


  console.log('KYC Form State:', kycform); 
   
  const formChange = (field, value) => {
    dispatch(updateForm(field, value));
  };
  


  const handleNext= (step,value) => {
    dispatch(updateStep(step, value));
      
  }

  const handleBack = (e) => {
    e.preventDefault()
    setSteps(steps - 1);
}

const selectChange = (val) => {
  console.log(`selected ${val}`);
  formChange('bank' , val)
  setBank(val)

  setBankError('')
};




const onAccountno = (e) => {
  
  const value = e.target.value;
  // Only allow numeric characters (0-9)
  const numericValue = value.replace(/\D/g, '');
  setAccountno( numericValue )
  formChange('accountNo'  ,numericValue )
  console.log(stepAccountno)
  console.log(accountnoError)
  console.log(stepAccountno)

  if  ( /^\d{10}$/.test( numericValue)){
   
    setAccountnoError('')
    setStepAccountno(true)
    
  }else{
    setStepAccountno(false)
    setAccountnoError('Invalid account')
   
  }
}
const onFirstName= (e) => {
  setFirstName(e.target.value)
  formChange('firstName' , e.target.value )
  const na = e.target.value
  if(na.length>0){
    setFirstNameError('')
    setStepFname(true)
  }else{
    setFirstNameError( 'Accountno required')
    setStepFname(false)
  }
}

const onLastname= (e) => {
  setLastName(e.target.value)
  formChange('lastName' , e.target.value )
  const na = e.target.value
  if(na.length>0){
    setLastNameError('')
    setStepLname(true)
  }else{
    setLastNameError( 'Accountno required')
    setStepLname(false)
  }
}
const onNumber=  (value, country, e, formattedValue) => {
  setNumber(formattedValue);
  formChange('number' , e.target.value )
  const na = e.target.value
  if(validatePhoneNumber(formattedValue)){
    setNumberError('')                          
    setStepNumber(true)
  }else{
    setNumberError( 'Accountno required')
    setStepNumber(false)
  }
  console.log (numberError)
}


const onBvn = (e) => {
  const value = e.target.value;
  const numericValue = value.replace(/\D/g, '');

  formChange('bvn' , numericValue )
  // Only allow numeric characters (0-9)
 
  setBVN(numericValue);

  if  ( /^\d{11}$/.test( numericValue)){
   
    setBvnError('')
    
  }else{
    setAccountnoError('Invalid Bvn')
   
  }
  
};

const onDate = (date, dateString) => {
  console.log(date, dateString);
  formChange('dob' , dateString )
  setDob(dateString)
  if(dateString){
    setDOBError('')
    setStepDate(true)
  }else{
    setDOBError('Date of Birth required')
    setStepDate(false)
  }
 

  }

  const onRadio= (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    formChange('gender' , e.target.value )
  };

  const { Option } = Select;


  const onCountry = (value) => {
    setSelectedCountry(value);
    formChange('country' , value )
  };


// kyc val
 const [bankError,setBankError] = useState('')
 const [accountnoError, setAccountnoError] = useState('')
 const [firstNameError, setFirstNameError] = useState('')
 const [lastNameError, setLastNameError] = useState('')
 const [bvnError , setBvnError] = useState('')
 const [dobError,  setDOBError] = useState('')
 const [countryError, setCountryError] = useState('')
 const [numberError, setNumberError] = useState('')
 const [stepBank, setStepBank] = useState('')
 const [ stepAccountno, setStepAccountno] = useState('')
 const [ stepFname, setStepFname] = useState('')
 const [ stepLname, setStepLname] = useState('')
 const [ stepNumber, setStepNumber] = useState('')
const [stepDate, setStepDate] = useState('')
const [stepCountry, setStepCountry] = useState('')

const validatePhoneNumber = (number) => {
  // Remove all non-digit characters
  const numericValue = number.replace(/\D/g, '');
  
  // Phone number must be between 10 and 15 digits
  return numericValue.length >= 10 && numericValue.length <= 15;
};

const validateBVN = (bvn) => {
  const bvnRegex = /^\d{11}$/;
  return bvnRegex.test(bvn);
};
const validateAccountNumber = (accountno) => {
  const AccountnoRegex =  /^\d{10}$/;
  return AccountnoRegex.test(accountno);
};

let validFname = stepFname;
let validLname = stepLname;
let validNumber = stepNumber;
let validBank = stepBank;
let validAccountNo = stepAccountno;
let validBVN = validateBVN(kycform.bvn);
let validDate = stepDate;
let validCountry = stepCountry;

const steponeval = (e) => {
  e.preventDefault();

  // Perform validation checks
  
  if (!kycform.bank) {
    setBankError('Please pick an option');
    validBank = false;
  } else {
    setBankError('');
    validBank = true;
  }

  if (!kycform.accountNo) {
    setAccountnoError('Please Input account');
    validAccountNo = false;
  } else if (!validateAccountNumber(kycform.accountNo)) {
    setAccountnoError('Invalid account no');
    validAccountNo = false;
  } else {
    setAccountnoError('');
    validAccountNo = true;
  }

  // Update the state to reflect the validation results
  setStepBank(validBank);
  setStepAccountno(validAccountNo);

  // Log current states for debugging
  console.log('Step Bank:', validBank);
  console.log('Step Account No:', validAccountNo);
  console.log('Account No:', accountno);
  console.log('Account No Error:', accountnoError);

  // Decide the next step based on validation results
  if (validBank && validAccountNo) {
    handleNext("stepid", 1);
    dispatch(updateStep('step1', 'quarter'));
    dispatch(updateStep('steppercentage', '25%, You\'re almost there.'));

  } else {
    dispatch(updateStep('step1', ''));
    dispatch(updateStep('steppercentage', '0%, Please complete your KYC'));
  }
};


const steptwoval = (e) => {
  e.preventDefault();

  // Perform validation checks
 

  if (!kycform.firstName) {
    setFirstNameError('Please Provide a Name');
    validFname = false;
  } else {
    setFirstNameError('');
    validFname = true;
  }

  if (!kycform.lastName) {
    setLastNameError('Please Provide a Name');
    validLname = false;
  } else {
    setLastNameError('');
    validLname = true;
  }

  if (!kycform.number) {
    setNumberError('Invalid Number');
    validNumber = false;
  } else if (!validatePhoneNumber(kycform.number)) {
    setNumberError('Invalid Number');
    validNumber = false;
  } else {
    setNumberError('');
    validNumber = true;
  }

  // Update the state to reflect the validation results
  setStepFname(validFname);
  setStepLname(validLname);
  setStepNumber(validNumber);

 
  // Decide the next step based on validation results
  if (validFname && validLname && validNumber && validBank && validAccountNo) {
   
    handleNext("stepid", 2);
    dispatch(updateStep('step2', 'half'));
    dispatch(updateStep('steppercentage', '50%, Lets keep going!'));
    
  } else {
   
    dispatch(updateStep('step2', ''));
    dispatch(updateStep('steppercentage', '25%, You\'re almost there.'));

  
  }

  // Log current states for debugging
  console.log('Step Fname:', validFname);
  console.log('Step Lname:', validLname);
  console.log('Step Number:', validNumber);
};

const stepthreeval = (e) => {
  e.preventDefault();

  // Perform validation check



  // Update the state to reflect the validation result
  if (validBVN && validFname && validLname && validNumber && validBank && validAccountNo) {
    handleNext("stepid", 3);
    setBvnError('');
    dispatch(updateStep('step3', 'threeQuater'));
    dispatch(updateStep('steppercentage', '75%, Just a little more...'));
  
   
    return;
  } else {
    setBvnError('BVN is not valid');
    dispatch(updateStep('step3', ''));
    dispatch(updateStep('steppercentage', '50%, Lets keep going!'));

  }

  // Log current state for debugging
  console.log('BVN:', kycform.bvn);
  console.log('BVN Error:', validBVN ? '' : 'BVN is not valid');
};


const stepfourval = (e) => {
  e.preventDefault();



  // Perform validation checks
  

  if (!kycform.dob) {
    setDOBError('Date of Birth required');
    validDate = false;
  } else {
    setDOBError('');
    validDate = true;
  }

  if (!kycform.country) {
    setCountryError('Please pick an option');
    validCountry = false;
  } else {
    setCountryError('');
    validCountry = true;
  }

  // Update the state to reflect the validation results
  setStepDate(validDate);
  setStepCountry(validCountry);

  // Decide the next step based on validation results
  if (validDate && validCountry && validBVN && validFname && validLname && validNumber && validBank && validAccountNo ) {
    handleSubmit(e)
    handleNext("stepid", 4);
    dispatch(updateStep('step4', 'full'));
    dispatch(updateStep('steppercentage', '100%'));
  } else {
    dispatch(updateStep('step4', ''));
    dispatch(updateStep('steppercentage', '75%, Just a little more...'));
    
 
  }

  // Log current states for debugging
  console.log('Step Date:', validDate);
  console.log('Step Country:', validCountry);
};




//----------------


//----------------



   const forms = [{
   form:   <div className=' '>
    
    <div className='flex items-center justify-center gap-4 mt-10 mb-8  '>
    
    <div className='flex gap-4'>
   
    <div className='bg-[#D9D9D9] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-black'>1</div>
    </div>
    <div >
    <h1 className='text-3xl font-bold mb-2'>Step 1 : Bank Details</h1>
    <p className=' font-thin mb-2 text-lg text-wrap'>Enter your bank information. This is the bank account we will pay your funds to when  you request for withdrawal.</p>
    </div>
    </div>
   
       
          <Form layout="vertical" className=' flex gap-8 flex-col mb-8'>
            <Form.Item label="Select Bank">
            <Select
            value={kycform.bank}
            onChange={selectChange}
            placeholder= "What bank do you use?"
            className='border-white rounded-xl focus:border-orange-400  caret-black placeholder-black'
 options={[
         { value:"access", label: 'Access Bank'},
        { value:"citibank", label: 'Citibank'},
        { value:"diamond", label: 'Diamond Bank'},
        { value:"ecobank", label: 'Ecobank'},
        { value:"fidelity", label: 'Fidelity Bank'},
        { value:"firstbank", label: 'First Bank'},
        { value:"fcmb", label: 'First City Monument Bank (FCMB)'},
        { value:"gtb", label: 'Guaranty Trust Bank (GTB)'},
        { value:"heritage", label: 'Heritage Bank'},
        { value:"keystone", label: 'Keystone Bank'},
        { value:"polaris", label: 'Polaris Bank'},
        { value:"providus", label: 'Providus Bank'},
        { value:"stanbic", label: 'Stanbic IBTC Bank'},
        { value:"standard", label: 'Standard Chartered Bank'},
        { value:"sterling", label: 'Sterling Bank'},
        { value:"suntrust", label: 'Suntrust Bank'},
        { value:"union", label: 'Union Bank'},
        { value:"uba", label: 'United Bank for Africa (UBA)'},
        { value:"unity", label: 'Unity Bank'},
        { value:"wema", label: 'Wema Bank'},
        { value:"zenith", label: 'Zenith Bank'},]}

            />
             <div className='opacity-60 font-thin text-xs text-white'>{bankError}</div>
            </Form.Item>
            <Form.Item label="Account Number">
              <Input
              maxLength={10}
              value={kycform.accountNo}
              onChange={onAccountno}
              />
               <div className='opacity-60 font-thin text-xs text-white'>{accountnoError}</div>
            </Form.Item>
          </Form>
          <Button onClick={steponeval} className='text-center p-3 border-0 text-white bg-orange-600 rounded-3xl w-full h-full'>Next</Button>
        </div>
   },
  {
   form:   
    <div>
    <div className='flex items-center gap-4 mt-10 mb-8 '>
   <div className='flex gap-4'>
    <ArrowLeftOutlined  onClick={() => handleNext("stepid", 0)}  className=' text-3xl hover:text-orange-400'/>
    <div className='bg-[#D9D9D9] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-black'>2</div>
    </div>
<div >
<h1 className='text-3xl font-bold mb-2'>Step 2 : Personal Information</h1>
<p className=' font-thin mb-2 text-lg'>Enter your name and phone number, Make sure the names match with the one on the provided bank account</p>
</div>
</div>
<div>
      <Form layout="vertical"className=' flex gap-8 flex-col mb-8'>
        <Form.Item label="First Name">
          <Input
          value={kycform.firstName}
          onChange={onFirstName}
          />
          <div className='opacity-60 font-thin text-xs text-white'>{firstNameError}</div>
        </Form.Item>
        <Form.Item label="Last Name">
          <Input
          value={kycform.lastName}
          onChange={onLastname}
          />
          <div className='opacity-60 font-thin text-xs text-white'>{lastNameError}</div>
        </Form.Item>
        <Form.Item label="Phone Number">
        
           <PhoneInput
               value={kycform.number}
              country={'ng'}
              enableAreaCodes={true}
              enableLongNumbers={true}
              countryCodeEditable={false}
              inputStyle={{width: "70vw"}}
              onChange={onNumber}
            />
            <div className='opacity-60 font-thin text-xs text-white'>{numberError}</div>
        </Form.Item>
      </Form>
      <Button onClick={steptwoval} className='text-center p-3 border-0 text-white bg-orange-600 rounded-3xl w-full h-full'>Next</Button>
    </div>
    </div>
  },
  {
   form: 
    <div>
    <div className='flex items-center gap-4 mt-10 mb-8 '>
   <div className='flex gap-4'>
    <ArrowLeftOutlined  onClick={() => handleNext("stepid", 0)}  className=' text-3xl hover:text-orange-400'/>
    <div className='bg-[#D9D9D9] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-black'>3</div>
    </div>
<div >
<h1 className='text-3xl font-bold mb-2'>Step 3 : Identity Verification</h1>
<p className=' font-thin mb-2 text-lg'>Enter your BVN. Required to validate your identity.</p>
</div>
</div>

      <Form layout='vertical' className=' flex gap-8 flex-col mb-8'>
        <Form.Item label="BVN">
          <Input
          value={kycform.bvn}
          onChange={onBvn}
          />
          <div className='opacity-60 font-thin text-xs text-white'>{bvnError}</div>
        </Form.Item>
      </Form>
      <Button onClick={stepthreeval} className='text-center p-3 border-0 text-white bg-orange-600 rounded-3xl w-full h-full'>Next</Button>
    </div>
  },
  {
   form:  
    <div>
    <div className='flex items-center gap-4 mt-10 mb-8 '>
    <div className='flex gap-4'>
    <ArrowLeftOutlined  onClick={() => handleNext("stepid", 0)}  className=' text-3xl hover:text-orange-400'/>
    <div className='bg-[#D9D9D9] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-black'>4</div>
    </div>
<div >
<h1 className='text-3xl font-bold mb-2'>Step 4 : Additional Details</h1>
<p className=' font-thin mb-2 text-lg'>Additional Information Required</p>
</div>
</div>
      <Form layout='vertical' className=' flex gap-8 flex-col mb-8'> 
      <Form.Item 
         label="Date of Birth">
        <DatePicker format="MM/DD/YYYY" onChange={onDate}  value={kycform.dob ? moment(kycform.dob) : null} className='bg-transparent text-white hover:bg-transparent hover:border-orange-400 focus:border-orange-400 w-full' />

        <div className='opacity-60 font-thin text-xs text-white'>{dobError}</div>
        </Form.Item>

        <Form.Item label="Gender">
        <Radio.Group onChange={onRadio} value={kycform.gender} className='flex gap-2 text-white'>
            <Radio className='text-white' value={1}>Man</Radio>
            <Radio  className='text-white' value={2}>Woman</Radio>
            <Radio className='text-white' value={3}>Prefer not to say</Radio>
         </Radio.Group>
        </Form.Item>
        <Form.Item label="Country">
        <Select
            value={kycform.country}
            onChange={onCountry}
            placeholder="Select a country"
            style={{ }}
          >
            {CountryList().getData().map(country => (
              <Option key={country.value} value={country.value}>
                {country.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
      <Button onClick={stepfourval} className='text-center p-3 border-0 text-white bg-orange-600 rounded-3xl w-full h-full'>Submit Details</Button>
    </div>
  },
  {
   form:  <div>
    <div className='flex items-center gap-4 mt-20 mb-8 flex-col '>
    <p className='text-7xl'>You’re set to go <CheckCircleOutlined/> </p>
    <p className='text-3xl font-thin'>Enjoy seamless trading and exchange services</p>
    </div>
    <div className='text-center p-4 bg-orange-600 rounded-3xl'><Link to="/dashboard" >Go to Dashboard </Link></div>
    
</div>
  }
  
  
  
  ]

  return (
    <>
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
    ></ConfigProvider>
    <div style={{ backgroundImage:`url(${bg})` }}>
       
    <DashNav userData={userData}/>
     <div className='p-32  text-white flex flex-col items-center justify-centers'>
     <div className='text-center pb-8'>
        <h1 className='text-5xl font-bold '>KYC Verification</h1>
        <p className='font-thin'>Complete your KYC verification to start trading.</p>
      </div>
    <div className='kyc'>
          <div className={classNames(kycsteps.step1)} onClick={() => handleNext("stepid", 0)}  >Step 1</div>
          <div className={classNames(kycsteps.step2)}onClick={steponeval}  > Step 2</div>
          <div className={classNames(kycsteps.step3)}onClick= {  steptwoval} >Step 3</div>
          <div className={classNames(kycsteps.step4)}onClick={stepthreeval} >Step 4</div>
     </div>
     <div>
     {forms[kycsteps.stepid].form }
     </div>
   
    </div>
    </div>
    </>
  )
}

export default Kyc