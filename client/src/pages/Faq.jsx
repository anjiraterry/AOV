import React from 'react'
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from 'antd/es/input/Input';
import bg from '../images/bg.png'

const Faq = () => {
  const [open, setOpen] = React.useState(null);
  const [searchTerm, setSearchTerm] = useState('')
  const toggle = id => setOpen(open === id ? undefined : id)
  const [selected, setSelected] = useState(0);

  const menuItems = [
    "General",
    "GiftCards",
    "Crypto",
    "Referral"
  ]

  
 

  const generalfaq = [
    {
       id: 1,
      title :   "How do I download the app?", 
    content :<p>To play netball professionally in Nigeria, you can participate in the talent identification programs organized by the Nigerian Netball Federation (NNF). These programs, such as the Talent Identification Netball Centres (T.I.N.C), are designed to discover, empower, and equip talents of different age groups. By showcasing your skills and talent at these centres, you can be scouted and selected to join the national teams, including the senior team (Nigerian Net Stars) or the youth and junior teams. The NNF also organizes leagues and tournaments where talented players can compete and demonstrate their abilities. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    {
     id: 2,
      title :   "How do I get started on the website?", 
      content: <p>If you aspire to become a netball coach in Nigeria, the Nigerian Netball Federation offers the Advancing Capacity Excellence (A.C.E.) program, which focuses on developing coaches, umpires (referees), and development officials. The NNF conducts regular workshop sessions under this program where you can receive training and upgrade your coaching skills. By participating in these workshops, you can gain the necessary knowledge and expertise to coach netball teams at various levels, including the national teams or local club teams. To find out more, read up on <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    { id: 3,
      title :   "How do I make a fund deposit to my wallet?", 
    content : <p>To register a netball team in Nigeria, you can <Link className="text-green-600 underline" to="/contact" >contact us </Link>  for guidance and support. The NNF oversees netball and netball-adjacent activities on behalf of Nigeria and can provide you with the necessary information and requirements for team registration. You may need to submit details about your team's name, location, and contact information to complete the registration process. Being part of the NNF's league or tournaments can also help you get your team recognized and be part of the national netball ecosystem. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 4,
      title :   "How do I  make withdrawals?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 5,
      title :   "Is it possible to update my withdrawal bank account?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
  ]

  const giftfaq = [
    {
       id: 1,
      title :   "Is it possible to update my withdrawal bank account?", 
    content :<p>To play netball professionally in Nigeria, you can participate in the talent identification programs organized by the Nigerian Netball Federation (NNF). These programs, such as the Talent Identification Netball Centres (T.I.N.C), are designed to discover, empower, and equip talents of different age groups. By showcasing your skills and talent at these centres, you can be scouted and selected to join the national teams, including the senior team (Nigerian Net Stars) or the youth and junior teams. The NNF also organizes leagues and tournaments where talented players can compete and demonstrate their abilities. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    {
     id: 2,
      title :   "How do I get started on the website?", 
      content: <p>If you aspire to become a netball coach in Nigeria, the Nigerian Netball Federation offers the Advancing Capacity Excellence (A.C.E.) program, which focuses on developing coaches, umpires (referees), and development officials. The NNF conducts regular workshop sessions under this program where you can receive training and upgrade your coaching skills. By participating in these workshops, you can gain the necessary knowledge and expertise to coach netball teams at various levels, including the national teams or local club teams. To find out more, read up on <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    { id: 3,
      title :   "How do I make a fund deposit to my wallet?", 
    content : <p>To register a netball team in Nigeria, you can <Link className="text-green-600 underline" to="/contact" >contact us </Link>  for guidance and support. The NNF oversees netball and netball-adjacent activities on behalf of Nigeria and can provide you with the necessary information and requirements for team registration. You may need to submit details about your team's name, location, and contact information to complete the registration process. Being part of the NNF's league or tournaments can also help you get your team recognized and be part of the national netball ecosystem. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 4,
      title :   "How do I  make withdrawals?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 5,
      title :   "How do I download the app?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
  ]
  const cryptofaq = [
    {
       id: 1,
      title :   "How do I  make withdrawals?", 
    content :<p>To play netball professionally in Nigeria, you can participate in the talent identification programs organized by the Nigerian Netball Federation (NNF). These programs, such as the Talent Identification Netball Centres (T.I.N.C), are designed to discover, empower, and equip talents of different age groups. By showcasing your skills and talent at these centres, you can be scouted and selected to join the national teams, including the senior team (Nigerian Net Stars) or the youth and junior teams. The NNF also organizes leagues and tournaments where talented players can compete and demonstrate their abilities. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    {
     id: 2,
      title :   "How do I get started on the website?", 
      content: <p>If you aspire to become a netball coach in Nigeria, the Nigerian Netball Federation offers the Advancing Capacity Excellence (A.C.E.) program, which focuses on developing coaches, umpires (referees), and development officials. The NNF conducts regular workshop sessions under this program where you can receive training and upgrade your coaching skills. By participating in these workshops, you can gain the necessary knowledge and expertise to coach netball teams at various levels, including the national teams or local club teams. To find out more, read up on <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    { id: 3,
      title :   "How do I make a fund deposit to my wallet?", 
    content : <p>To register a netball team in Nigeria, you can <Link className="text-green-600 underline" to="/contact" >contact us </Link>  for guidance and support. The NNF oversees netball and netball-adjacent activities on behalf of Nigeria and can provide you with the necessary information and requirements for team registration. You may need to submit details about your team's name, location, and contact information to complete the registration process. Being part of the NNF's league or tournaments can also help you get your team recognized and be part of the national netball ecosystem. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 4,
      title :   "How do I download the app?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 5,
      title :   "Is it possible to update my withdrawal bank account?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
  ]

  const reffaq = [
    {
       id: 1,
      title :   "How do I download the app?", 
    content :<p>To play netball professionally in Nigeria, you can participate in the talent identification programs organized by the Nigerian Netball Federation (NNF). These programs, such as the Talent Identification Netball Centres (T.I.N.C), are designed to discover, empower, and equip talents of different age groups. By showcasing your skills and talent at these centres, you can be scouted and selected to join the national teams, including the senior team (Nigerian Net Stars) or the youth and junior teams. The NNF also organizes leagues and tournaments where talented players can compete and demonstrate their abilities. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    {
     id: 2,
      title :   "How do I get started on the website?", 
      content: <p>If you aspire to become a netball coach in Nigeria, the Nigerian Netball Federation offers the Advancing Capacity Excellence (A.C.E.) program, which focuses on developing coaches, umpires (referees), and development officials. The NNF conducts regular workshop sessions under this program where you can receive training and upgrade your coaching skills. By participating in these workshops, you can gain the necessary knowledge and expertise to coach netball teams at various levels, including the national teams or local club teams. To find out more, read up on <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > , or <Link className="text-green-600 underline" to="/getinvolved"> get involved. </Link> </p>
    },
    { id: 3,
      title :   "How do I make a fund deposit to my wallet?", 
    content : <p>To register a netball team in Nigeria, you can <Link className="text-green-600 underline" to="/contact" >contact us </Link>  for guidance and support. The NNF oversees netball and netball-adjacent activities on behalf of Nigeria and can provide you with the necessary information and requirements for team registration. You may need to submit details about your team's name, location, and contact information to complete the registration process. Being part of the NNF's league or tournaments can also help you get your team recognized and be part of the national netball ecosystem. To find out more, read up on  <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 4,
      title :   "How do I  make withdrawals?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
    {
      id: 5,
      title :   "Is it possible to update my withdrawal bank account?", 
      content: <p>If you are interested in sponsoring any of our netball programmes, you can <Link className="text-green-600 underline" to="/contact"> get in touch with us </Link>  to explore partnership opportunities. The NNF is actively involved in various social impact initiatives, talent development programs, and netball-related events that offer sponsorship opportunities. By collaborating with the NNF, you can contribute to empowering young Nigerian girls, promoting netball, and making a positive impact on the community. The NNF will provide details about available programs and how your sponsorship can support their initiatives. To find out more, read up <Link className="text-green-600 underline" to="/bnn"> our strategy </Link > </p>
    },
  ]

  const faqs = [generalfaq, giftfaq, cryptofaq, reffaq]


  return (
    <div>
     <div style={{ backgroundImage:`url(${bg})` }} className='bg-cover p-32 text-white' >
      <div  className='flex flex-col items-center '>
      <div className='text-center pb-16'>
        <h1 className='text-5xl font-bold '>How can we help you today?</h1>
        <p className='font-thin'>We’ve curated a list of questions we thought you could possibly have</p>
      </div>
      <div className=' flex gap-4 '>
        <div className=' pb-8  flex  gap-4 dashmenu' >
        {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`cursor-pointer p-2 ${
            selected === index ? 'bg-white text-gray-800' : ' '
          }`}
        >
          {item}
        </div>
      ))}
    </div>
        </div>
        </div>
   
<div className=' '>
        {faqs[selected].map((faq, index ) =>(
          <div   key={index} >
           <div className='relative '>
            
           <div className='px-72'>
           
           <h1    onClick={() => toggle(faq.id)}  className='text-xl flex items-center cursor-pointer justify-between border-solid border-b-2 py-6 text-white mb-4 border-white'  >
            <span className=''> {faq.title} </span>
            <span className={open === faq.id  ? "rotate-0 duration-300" : "rotate-45 duration-300"}> <PlusCircleOutlined />    </span>
            </h1>
            <div className= "border-solid overflow-hidden "  >
            <p  className= {open === faq.id  ? "faq_show" : "faq_noshow"}>{faq.content}</p>
           </div>
             </div>
           </div>
         
         </div>
         ))}
    </div>
</div>
      
    </div>
  
  )
}

export default Faq