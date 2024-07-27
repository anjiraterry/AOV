import React,{ useState, useContext , useEffect }from 'react'
import {Button ,Menu , Typography, Avatar} from 'antd'
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'
import icon from '../images/aov.png'
import bg from '../images/bg.jpeg'
import { AuthContext } from '../context/AuthContext';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const { auth, logout} = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logOut = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  
  return (
    <div className={`fixed top-0 left-0 w-full z-10 transition-colors md:px-20 min-[100px]:px-8  min-[100px]:py-0 md:py-2 duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur' : 'bg-transparent'}`}>
      <div className='container flex justify-between items-center '>
        <Link to='/' className=''>
            <img src={icon} className='md:w-32  min-[100px]:w-24'/>
          
            {/* <Button className="menu-control-contsiner">
            
            </Button> */}

        </Link>
        
        <div className='text-white nav md:flex items-center min-[100px]:hidden  '>
                <Link to = "/" > Home</Link>
                <Link to = "/cryptocurrencies" > Cryptocurriences</Link>
                <Link to = "/exchanges" > Rates </Link>
                <Link to = "/news" > News</Link>
        </div>
        {auth.isLoggedIn ? (

<div className='text-white nav flex items-center'>
<Link to = "/dashboard" >Dashboard</Link>
<Link  onClick={logout} className='bg-orange-600 p-12 rounded-xl' >Logout</Link>
</div>
        ) : (
          <div className='text-white nav flex justify-center items-center gap-4'>
          <Link to = "/login" >Login </Link>
          <div className='md:hidden min-[100px]:flex '> <FaBars/> </div>
          <Link to = "/signup" className='bg-orange-600 p-12 rounded-xl md:flex min-[100px]:hidden' >Get Started</Link>
  </div>
        )}
        </div>

    </div>
  )
}

export default Navbar