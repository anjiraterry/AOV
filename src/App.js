import React from 'react'
import { Routes , Route, Link } from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import { useState } from 'react'
import './App.css'
import {Navbar, Exchanges, Cryptocurrencies , News, CryptoDetails,} from './components'
import {Login, Signup, Home,  About, Faq , Contact, Terms  } from './pages'







const App = () => {
   


  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar/>

        </div>
        <div  className='' >
            <Layout>
                <div className='routes '>
                    <Routes>
                        <Route exact path ='/' element={<Home/>}/>
                        <Route exact path ='/login' element={<Login/>}/>
                        <Route exact path ='/about' element={<About />}/>
                        <Route exact path ='/signup' element={<Signup/>}/>
                        <Route exact path ='/exchange' element={<Exchanges/>}/>
                        <Route exact path ='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                        <Route exact path ='/faq' element={<Faq/>}/>
                        <Route exact path ='/terms' element={<Terms/>}/>
                        <Route exact path ='/contact' element={<Contact/>}/>
                        <Route exact path ='/crypto/:coinId' element={<CryptoDetails/>}/>
                        <Route exact path ='/news' element={<News/>}/>
                          
                    </Routes>

                </div>
            </Layout>

       
        <div className='footer'>
            <Typography.Title  level={5} style={{ color:'white', textAlign:'center'}}>
                AOV<br/>
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to='/'> Home</Link>
                <Link to='/exchanges'> Exchanges</Link>
                <Link to='/news'>News</Link>
            </Space>

        </div>
        </div>
    </div>
  )
}

export default App