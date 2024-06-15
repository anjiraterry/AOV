import React from 'react'
import {Button ,Menu , Typography, Avatar} from 'antd'
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'
import icon from '../images/aov.png'


const Navbar = () => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  
  return (
    <div className='fixed w-[100%] flex px-20 justify-between items-center  bg-[#001529] z-20'>
      <div className='container flex justify-between items-center '>
        <Link to='/' className=''>
            <img src={icon} className='w-32'/>
          
            {/* <Button className="menu-control-contsiner">
            
            </Button> */}

        </Link>
        <div className='text-white nav '>
                <Link to = "/" > Home</Link>
                <Link to = "/cryptocurrencies" > Cryptocurriences</Link>
                <Link to = "/exchanges" > Exchanges</Link>
                <Link to = "/news" > News</Link>
        </div>

        <div className='text-white nav '>
                <Link to = "/login" >Login</Link>
                <Link to = "/cryptocurrencies" className='bg-orange-600 p-12 rounded-xl' >Get Started</Link>
        </div>
        </div>

    </div>
  )
}

export default Navbar