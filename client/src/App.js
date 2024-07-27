
import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Routes , Route, Link ,useLocation , Navigate } from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import { lazy, Suspense } from 'react';
import { useState , useEffect} from 'react'
import { Provider } from 'react-redux';
import './App.css'
import {Navbar, Exchanges, Cryptocurrencies , News, CryptoDetails, } from './components'
import { Spin } from 'antd'
import {Login, Signup} from './pages'
import Footer from './components/Footer'
import Dash from './pages/Dash'
import store from './app/store';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Faq = lazy(() => import('./pages/Faq'));
const Contact = lazy(() => import('./pages/Contact'));
const Terms = lazy(() => import('./pages/Terms'));
const Kyc = lazy(() => import('./pages/Kyc'))

const persistedState = localStorage.getItem('kycState') ? JSON.parse(localStorage.getItem('kycState')) : {};

store.dispatch({ type: 'LOAD_PERSISTED_STATE', payload: persistedState });



const App = () => {
  const { auth } = useContext(AuthContext);
   
  const location = useLocation();
  const noNavbarRoutes = ['/login', '/signup', '/dashboard', '/kyc']; // Add any other routes where you don't want the navbar
  const noFooterRoutes = ['/dashboard']

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
          <Provider store={store}>
          <Suspense fallback={ <Loader/>}>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path="/login" element={ <Login />}/>
              <Route exact path='/about' element={<About />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/exchange' element={<Exchanges />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/faq' element={<Faq />} />
              <Route path="/dashboard" element= {<Dash/>}/>
              <Route exact path='/terms' element={<Terms />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route exact path='/news' element={<News />} />
              <Route exact path='/kyc' element={ <Kyc/>} />
              

            </Routes>
            </Suspense>
            </Provider>
          </div>
        </Layout>

        <div>
        {!noFooterRoutes.includes(location.pathname) && (
        <div className=''>
          <Footer />
        </div>
      )}
        </div>
      </div>
    </div>
  )
}

export default App