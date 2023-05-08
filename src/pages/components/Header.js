import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid'
<<<<<<< HEAD
import { Router, useRouter } from 'next/router';
import Link from 'next/link';

import { useState } from 'react';

function Header() {
    const [showPopup, setShowPopup] = useState(false);
  
    

  return (

    <div className="sticky top-0  bg-[#05091a] grid grid-cols-4 shadow-md py-1 px-5 ">
        
        <div className='cursor-pointer left-0 relative flext 
        items-center  my-auto'>
          
          <img src='https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/334249645_853648469066576_3681408509611808809_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=S5x_JMGecd8AX-8xkpe&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdTn1jGJaIu_Kc64YQ2Z3KhoIYlXqDrECOJyQLSw3kGEuA&oe=64725573'
          width={70}
          height={70}
          className=''>

        </img>
=======
import Link from 'next/link';





function Header() {


  return (

    <div className="sticky top-0  bg-[#05091a] grid grid-cols-3 shadow-md py-1 px-5 ">
        
        <div className='cursor-pointer left-0 relative flext 
        items-center  my-auto'>
          <a href="/">

          <img src='https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/334249645_853648469066576_3681408509611808809_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=S5x_JMGecd8AX-8xkpe&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdTn1jGJaIu_Kc64YQ2Z3KhoIYlXqDrECOJyQLSw3kGEuA&oe=64725573'
          width={70}
          height={70}
          className=''
          />
          </a>


>>>>>>> origin/main
          </div>
        {/*Middle*/}
        <div className=" space-x-6 flex items-center justify-center">
            <Link href="/" 
            className="transform text-white transition-colors duration-300 hover:text-[#24AE5F]  " >
              Home
            </Link>

            <Link href={'aboutus'}
            className="transform text-white transition-colors duration-300 hover:text-[#24AE5F]  " >
              About Us
            </Link>

            <Link href={"map"} 
            className="transform text-white transition-colors duration-300 hover:text-[#24AE5F]  " >
              Ride
            </Link>

            <Link href={"faq"}
            className="transform text-white transition-colors duration-300 hover:text-[#24AE5F]  " >
              FAQ
            </Link>
            
            <a href={'support'} 
            className="transform text-white transition-colors duration-300 hover:text-[#24AE5F]  " >
              Support
            </a>

        </div>
        
<<<<<<< HEAD
        <div className='flex items-center'>
          <form action="" className=' flex items-center rounded-lg p-4 text-white  border-white/30'>
              <input type="text" placeholder='Leaving From'
              className='p-2 bg-[#05091a]/30 outline-none'/>
              
              <input type="text" placeholder='Going To'
              className='p-2 bg-transparent outline-none'/>

              
            </form>
            <div >
              
               <Link href={"map"}>
                <button   className='  bg-[#24AE5F] p-4 text-white '>Search</button>
                
               
               </Link> 
              

            </div>
              

            </div>
=======
       
>>>>>>> origin/main
        {/*Right*/}
        <div className='flex items-center space-x-4 justify-end'>
          
          
            <div className='cursor-pointer p-2 rounded-md
              flex items-center space-x-2 hover:bg-[#24AE5F]/50'>
                <UserIcon className='h-6 text-white'/>
                <Link href={"login"}>
                <button   className=' text-white '>Sign In</button>
                
               
               </Link> 
            
            </div>
            
        </div>
    </div>


  )
}

export default Header;
