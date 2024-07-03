import React from 'react'
import { Routes , Route, Link ,useLocation } from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import { useState } from 'react'
import './App.css'
import {Navbar, Exchanges, Cryptocurrencies , News, CryptoDetails, } from './components'
import {Login, Signup, Home,  About, Faq , Contact, Terms , Kyc } from './pages'
import Footer from './components/Footer'
import Dash from './pages/Dash'







const App = () => {
   
  const location = useLocation();
  const noNavbarRoutes = ['/login', '/signup', '/dashboard', '/kyc']; // Add any other routes where you don't want the navbar


  return (
    <div className='app'>
      {!noNavbarRoutes.includes(location.pathname) && (
        <div className='navbar'>
          <Navbar />
        </div>
      )}
      <div>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/exchange' element={<Exchanges />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/faq' element={<Faq />} />
              <Route exact path='/dashboard' element={<Dash />} />
              <Route exact path='/terms' element={<Terms />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route exact path='/news' element={<News />} />
              <Route exact path='/kyc' element={<Kyc/>} />
              

            </Routes>
          </div>
        </Layout>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App