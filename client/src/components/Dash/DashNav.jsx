import React from 'react'
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined,  BellOutlined, UserOutlined } from '@ant-design/icons'
import icon from '../../images/aovblack.png'
import  { useState, useEffect } from 'react';
import { Button, Badge, Avatar } from 'antd';
import moment from 'moment';
import bg from '../../images/bg.jpeg'

const DashNav = ({ userData }) => {
  const [notificationCount, setNotificationCount] = useState(5);
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  
    const [date, setDate] = useState(moment());
  
    useEffect(() => {
      // Function to update date at midnight
      const updateDate = () => {
        setDate(moment());
      };
  
      // Calculate time to next midnight
      const now = moment();
      const midnight = moment().endOf('day').add(1, 'milliseconds');
      const timeToMidnight = midnight.diff(now);
  
      // Set timeout to update date at midnight
      const timer = setTimeout(() => {
        updateDate();
        // Set interval to update every 24 hours thereafter
        setInterval(updateDate, 24 * 60 * 60 * 1000);
      }, timeToMidnight);
  
      // Cleanup on component unmount
      return () => clearTimeout(timer);
    }, []);
  
    // Format the date as needed
    const formattedDate = date.format('dddd, Do MMMM YYYY');
  
  return (
    <div style={{  }}  className='fixed w-[100%] bg-white flex px-20 justify-between items-center z-20 dash '>
      <div className='container flex justify-between items-center '>
        <Link to='/' className=''>
            <img src={icon} className='w-32'/>
          
            {/* <Button className="menu-control-contsiner">
            
            </Button> */}

        </Link>
        <div className='text-black flex items-center justify-between  '>
          <div className='flex items-center justify-between border-r-4 pr-8'>
                <Link to = "/" > Home</Link>
                <Link to = "/dashboard" > Dashboard</Link>
                <p className='px-4'>{formattedDate}</p>
         
                <Badge count={notificationCount} offset={[2, 0]}>
                 <BellOutlined style={{ fontSize: '20px', marginRight: '0px' }} />
                 </Badge>
          </div>
          <div className='flex items-center justify-between'>
            <p className=' px-4'>{userData? userData.name : ""}</p>
            <Avatar style={{ backgroundColor: '#87d068', marginRight: '20px' }} icon={<UserOutlined />} />
          </div>
               
        </div>

      
        </div>

    </div>
  )
}

export default DashNav