import React from 'react'
import iphone from "../images/iphone.png"
import { DownloadOutlined } from '@ant-design/icons'

const SectionII = () => {
  return (
    <div >
        <div className='flex justify-between p-32 relative '>
            <div className=''>
                <h3 className='text-3xl flex gap-6 font-bold text-orange-600 mb-6'> <span>Download Our <br/> Mobile App </span> <DownloadOutlined className='text-5xl'/> </h3>
                <p className='font-thin text-lg'>At AOV, great customers' experience using our platform is our top priority. <br/> We provide an option of mobile app to access our service and start trading with us. <br/> Our App is available on Android and iOS.</p>
                <p className='font-bold mt-6  text-2xl text-orange-400'>Coming Soon...</p>

            </div>
            <div className=''>
                <img src={iphone} className='relative -top-80 mt-6  w-[400px]  -right-24'/>

            </div>
        </div>
    </div>
  )
}

export default SectionII