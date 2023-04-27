

import Image from 'next/image'
import React from 'react'


function Banner() {
  return (
    <div className='relative'>
      <img src="https://blog.uber-cdn.com/wp-content/uploads/2022/07/UberAcuerdo_V2_700x240-1.png" 
      
      alt="" />

      <div className="flex items-center absolute top-3/4 right-1 rounded-lg p-4 space-x-0 ">
        
        <form action="" className=''>
          <input type="text" placeholder='Leaving From'
          className='p-2'/>
          
          <input type="text" placeholder='Going To'
          className='p-2'/>
          <button className='bg-[#00AFF5] p-2'>Search
           </button>
        </form>

      </div>



    </div>

    
  )
}

export default Banner
