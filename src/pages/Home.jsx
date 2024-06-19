import React from 'react'
import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies , Navbar, News, SectionII} from '../components'
import Hero from '../components/Hero';
import Section from '../components/Section';
import Rates from '../components/Rates';
import bg from '../images/bg.jpeg'
import bg2 from  '../images/bgwhite.jpeg'

const{Title} = Typography

const Home = () => {
    const{ data, isFetching} = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading...'
 

  return (
    <>
    <div style={{ backgroundImage:`url(${bg})` }} className='bg-cover' >
     <div className=''>
   <Hero/>
   </div>
    <div className=' '>
      <Section/>
   </div>
   </div>
   <div  style={{ backgroundImage:`url(${bg2})` }} className='bg-cover'>
    <div className=''>
      <SectionII/>
    </div>
   <div> 
    <Rates/>
   </div>
   </div>
 {/*<div className=' p-24'>
  
    <Title level={2} className='heading'>Global Crypto Stats</Title>
    <Row>
    <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats?.total)}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)}/></Col>
    </Row>
     <div className='home-heading-container'>
      <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
      <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified /> 

    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Latest Crypto News</Title>
      <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified/> 
    </div>*/}
    </>
  )
}

export default Home