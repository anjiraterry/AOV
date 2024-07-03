import React from 'react'
import btc from "../../images/btc.png"
import usdtc from "../../images/usdtc.png"


const Cryptowallets = () => {
  return (
    <div className='pt-20  px-20 mt-2 text-lg font-thin '>
      <div>
    <h1 className='text-3xl font-bold mb-4'>Select your crypto wallet</h1>
    <p>Select the wallet you want to sell crypto to</p>
    </div>
    <div className='flex mt-20 gap-12 text-black text-center'>
      <div className='p-12 rounded-2xl bg-white'>
      <p className='mb-5'>Bitcoin</p>
        <img src={btc} className='w-40' />
      </div>
      <div className='p-12 rounded-2xl bg-white'>
        <p className='mb-5'>USDTC</p>
      <img src={usdtc} className='w-40'/>
        </div>
    </div>


    </div>
  )
}

export default Cryptowallets