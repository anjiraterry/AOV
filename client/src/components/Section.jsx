import React from 'react'
import coin from '../images/coin.png'
import medal from '../images/medal.png'
import arrow from '../images/arrow.png'
import card from '../images/card.png'
import shield from '../images/shield.png'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined, UserOutlined, SafetyOutlined, BarChartOutlined } from '@ant-design/icons'
import classNames from 'classnames';
import creambg from '../images/creambg.jpeg'



const Section = () => {
    const services = [{
         img: require('../images/coin.png'),
         title: "Cryptocurrency Trading",
         body:"Secure cryptocurrency selling  platform ",
         link: "",
         color: 'orange'
    },
    {   
        img:require('../images/card.png'),
        title: "Gift Card Trading",
        body:"Trade unused gift cards for cash on our hassle-free platform. We accept a wide range of cards and ensure maximum value with minimal effort.",  
        link:'',
         color: 'pink'
    },
    {
        img: require('../images/medal.png'),
        title: "Referral Rewards",
        body:"Refer friends to our platform and earn rewards! Share your unique link and get rewarded for each successful referral.",
        link:'',
        color: 'green'
    },
    {
        img: require('../images/arrow.png'),
         title: "Airtime VTU",
         body:"Top up your phone easily with our secure and reliable airtime VTU service, supporting multiple mobile networks. Stay connected, wherever you are!",
         link:'',
         color: 'red'
    }

]

  return (
    <div className='md:p-24 min-[100px]:p-8'>
        <div  className='  bg-opacity-60 border-2 border-white p-10  text-white flex min-[100px]:flex-col md:flex-row relative justify-between rounded-3xl '>
            <div className=' border-white md:border-r-2 md:border-b-0 min-[100px]:border-b-2  min-[100px]:px-0 p-8' >
                <h1 className='text-3xl mb-4 font-bold'> Why Trade with AOV? </h1>
                <p className='font-thin'>
                    At AOV, we prioritize transparency, ensuring your trades are not only efficient
                    but conducted with the utmost trust. 
                    We pride ourselves on offering competitive rates,
                    maximizing the value of your gift cards and cryptocurrencies
                </p>
                <img src={require( '../images/shield.png')} className='absolute bottom-0    min-[100px]:hidden md:block w-64'/>

            </div>
            <div className='md:p-10  min-[100px]:p-0  min-[100px]:py-4 flex flex-col gap-6 '>
                <div   className='flex justify-between gap-2 '>
                    <div>
                    <SafetyOutlined className='md:text-3xl  min-[100px]:text-xl  border-2 p-2 rounded-full bg-white text-gray-900'/>
                    </div>
                    <div className='flex flex-col '>
                    <h3 className='text-lg mb-1 font-bold'>Secured User Data</h3>
                    <p className='font-thin'>
                        We understand that secure user data is of the utmost importance.
                        We take great care to ensure that our platform is secure and that your data is protected.
                        We have agreements with trusted third-party xsproviders to ensure that your data is stored,
                        analyzed, and processed in a secure manner. We also recommend that you take additional steps to protect your account, 
                        such as verifying your contact information. If you have any questions or concerns about data security,
                        please don't hesitate to contact us.
                     </p>
                     </div>

                </div>
                 <div   className='flex justify-between gap-2 '>
                    <div>
                <BarChartOutlined className='md:text-3xl    min-[100px]:text-xl  border-2 p-2 rounded-full bg-white text-gray-900'/> </div>
                <div className='flex flex-col '>
                    <h3 className='text-lg mb-1 font-bold'>Credibility</h3>
                    <p className='font-thin'>
                        Our business has a proven track record of reliable and trustworthy transactions.
                        Our satisfied customers have praised our professionalism and prompt service.
                        We pride ourselves on providing a secure platform to ensure that your transactions are smooth.
                    </p>
                    </div>

                </div>
                <div   className='flex justify-between gap-2 '>
                <div>
                <UserOutlined className='md:text-3xl   min-[100px]:text-xl   border-2 p-2 rounded-full bg-white text-gray-900'/> 
                </div>
                <div className='flex flex-col '>
                    <h3 className='text-lg mb-1 font-bold'>User Friendly and Accessible</h3>
                    <p className='font-thin'>
                        Our platform is user-friendly and easy to navigate, 
                        making it simple for you to complete transactions quickly and efficiently. 
                        We also offer a wide range of products and services to meet your needs, 
                        and our customer service team is always available to assist you with any questions or concerns.
                    </p>
                    </div>

                </div>
            </div>
          
        </div>
        <div className='relative text-white mt-12 mb-32'>
        <h1 className='text-3xl font-bold'> Our Services</h1>
        <p className='font-thin text-wrap'>We pride ourselves on our commitment to swift and smooth trading with high transaction rates.<br/> Our goal is to make the selling process as easy and efficient as possible for our customers</p>
            
        <div className='relative text-white flex  justify-between items-center gap-2 g transition-all'>
           {services.map((service, index ) =>(

                <div   key={index} >
                    <div className={classNames(
        'relative text-white flex justify-between px-36 py-44 items-center flex-col border-2 gap-8 rounded-3xl bg-gradient-to-br from-transparent group from-50% to-gray-700 to-120% mt-24 border-white ',
        `hover:to-${service.color}-700 transition-all duration-300`
      )}> 
                    <img  src={service.img} className=' absolute -top-20 w-40 group-hover:-top-24 transition-all' />
                    <div className='absolute flex justify-center items-left p-10 gap-4 flex-col top-16'>
                        <h1 className='text-xl font-bold'>{service.title}</h1>
                        <p className='font-thin'>{service.body}</p>
                       
                    </div>
                    <Link className='absolute bottom-0 left-0 p-10 underline group hover:underline started' to={service.link} ><span className='hover:mr-2 transition-all'>Get Started </span><ArrowRightOutlined /></Link>
                    </div>
                </div>
            ))}
        
       
            </div>
            <div  style={{ backgroundImage:`url(${creambg})` }} className='flex bg-cover justify-between items-center border-[12px] border-[#B18A8A] bg-rose-100 mt-24 text-gray-900 rounded-3xl'>
                <div className='p-20 flex-flex-col gap-10 flex-1'>
                    <h3 className='text-xl'>Join Today!</h3>
                    <h1 className='text-3xl font-bold py-8 text-nowrap'>Become an <br/> AOV Ambassador</h1>
                    <button className='bg-gray-900 text-white text-sm rounded-3xl p-2'>Click here to start earning</button>

                </div>
                <div className='p-12 flex-2'>
                    <p className='text-xl flex justify-center items-center text-wrap p-4'>Are you a dynamic, outgoing, and influential figure in the crypto, finance, or academic communities? 
                        Would you like to earn more than #200,000 a month in passive income? 
                        Join us as an AOV ambassador today!</p>

                </div>
            </div>
            </div>
    </div>
  )
}

export default Section