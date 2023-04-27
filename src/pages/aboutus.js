import React from 'react';
import Header from './components/Header';



export default function AboutUs() {
  return (
   
    
    <div className=" ">
        <Header/>
      {/*about us*/}
      <div className="flex p-10">
        <div className="text-black space-y-4 py-20">
            <h1 className="text-3xl sm:text-3xl text-[#8FE0C1] font-semibold ">About Us :</h1>
          <p className="text-lg text-black">
            We are a carpooling service that connects people who are traveling in the
            same direction. Our goal is to reduce traffic congestion, decrease
            carbon emissions, and provide a more affordable and convenient travel
            option.
          </p>
          <p className="text-lg  text-black">
            Our platform allows drivers to offer rides to passengers who are heading
            in the same direction. Passengers can search for available rides and
            book a seat in a carpool. We verify all drivers and passengers to ensure
            a safe and reliable experience.
          </p>
          <p className="text-lg text-gray-400">
            Join our community and start carpooling today. Together, we can make a
            difference.
          </p>
        </div>
        <img src="https://img.freepik.com/free-vector/car-driving-concept-illustration_114360-7951.jpg?w=996&t=st=1682370752~exp=1682371352~hmac=727850c796412a379897ed7e910f78fed2e54352292d2e59728552be3584bba4"
            
            className="w-[900px] h-[600px]"/>
      </div>

        {/*our popular destinations*/}
        <p className="text-3xl sm:text-3xl text-black font-semibold py-6 ">Our Popular Destination</p>
        
        
        <div className="grid grid-rows-2 py-6">


          {/*row1*/}
        <div className='relative grid grid-cols-2 px-4'>
          {/*Nabeul*/}
          <div className='grid grid-cols-2 py-7 '>
            <img  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a1/08/91/nabeul.jpg?w=700&h=500&s=1" className="w-[200px] h-[200px]" layout="fill" objectFit="cover"/>
            <div className='px-3 grid-rows-3'>
              <p className="text-lg sm:text-2xl text-black font-bold flex flex-col flex-1 ">Nabeul</p>
              <p className="text-lg sm:text-xl text-gray-700  flex flex-col flex-1 ">Mr x said :</p>
              <p className="text-lg sm:text-xl text-gray-700 flex flex-col flex-1 ">Good care about Client</p>
            </div>
          </div>
        {/*Tunis*/}
        <div className='grid grid-cols-2 py-7'>
          <img  src="https://3.bp.blogspot.com/-r61R6dlOw_Q/UzQO79qC3bI/AAAAAAAABko/k0XLBWKmFDY/s1600/Avenue-Habib-Bourguiba-Tunis.jpg" className="w-[200px] h-[200px]" layout="fill" objectFit="cover"/>
          <div className='px-3 grid-rows-3'>
            <p className="text-lg sm:text-2xl text-black font-bold flex flex-col  ">Tunis</p>
            <p className="text-lg sm:text-xl text-black  flex flex-col  ">Mr x said :</p>
            <p className="text-lg sm:text-xl text-black  flex flex-col ">Good care about Client</p>
            
          </div>
        </div>

        </div>
        {/*row2*/}
        <div className='relative grid grid-cols-2 px-4'>
          {/*Soussa*/}
          <div className='grid grid-cols-2  py-7'>
            <img  src="https://static1.evcdn.net/images/reduction/229595_w-1600_h-1200_q-75_m-crop.jpg" className="w-[200px] h-[200px]" layout="fill" objectFit="cover"/>
            <div className='px-3 grid-rows-3'>
              <p className="text-lg sm:text-2xl text-black font-bold flex flex-col flex-1 ">Soussa</p>
              <p className="text-lg sm:text-xl text-black  flex flex-col flex-1 ">Mr x said :</p>
              <p className="text-lg sm:text-xl text-black  flex flex-col flex-1 ">Good care about Client</p>
            </div>
          </div>
        {/*Jerba*/}
        <div className='grid grid-cols-2 py-7'>
          <img  src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRiJON89THI7oDY58UBkA2HIJMwFkQoJPAYwGAnBm3wdKCCUKuCGtBf56JguqlQJds6" className="w-[200px] h-[200px]" layout="fill" objectFit="cover"/>
          <div className='px-3 grid-rows-3'>
            <p className="text-lg sm:text-2xl text-black font-bold flex flex-col">Jerba</p>
            <p className="text-lg sm:text-xl text-black  flex flex-col  ">Mr x said :</p>
            <p className="text-lg sm:text-xl text-black  flex flex-col ">Good care about Client</p>
            
          </div>
        </div>


        </div>
        </div>






        {/* Security*/}
            <div className="py-20">
        
            </div>
            
            <div className="grid grid-cols-2 py-8 ">
                <div className="grid-rows-2">
                <p className="text-lg sm:text-2xl text-black font-bold flex flex-col flex-1 ">Our Secure and Safer Rides</p>    
                  <p className="text-lg sm:text-2xl text-black flex flex-col flex-1 ">I do more than just get people from A to B : make the ride matter with ground transportation solutions experiences from </p>
                  <p className="text-lg sm:text-2xl text-black flex flex-col flex-1 ">our Business that build relationships and drive results.</p>
                </div>

                <img src="https://img.freepik.com/free-photo/beautiful-young-latin-woman-driving-her-brand-new-car-showing-her-thumb-up_231208-7751.jpg?w=996&t=st=1682446066~exp=1682446666~hmac=f83163d1873f21635992226400a9e848edd4aaa76edbb8b14b7b3f20fb1db8fe"
                className="w-[600px] h-[600px]"
                />
              </div>

      </div>
    
  );
}
