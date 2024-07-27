import React from 'react';
import { Spin } from 'antd';
import bg from '../images/bg.png'

const Loader = () => (
  <div style={{ backgroundImage:`url(${bg})` }} className="loader">
    <div className='w-screen h-screen flex items-center justify-center'><Spin size='large'/></div>
  </div>
);

export default Loader;
