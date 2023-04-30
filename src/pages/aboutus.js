import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carding from './components/carding';


const people = [
  {
    name: 'Ramla Azouni',
    role: 'Junior Full Stack Developer',
    imageUrl:
        'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/343405716_555892343362024_6072775585782141684_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=jvkbKYPsz5kAX_nUqj9&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdT9PcA7wE_nuIkU7BWzZKK1pgiInzcuIdrUEPyexHYY-A&oe=6475201F',
      },
        {
    name: 'Ayoub Bnina',
    role: 'Junior Data Scientist & Back-End Developer',
    imageUrl:
      'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/343557465_160921653594462_2039202578258696238_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=EU-Eb4i_5DQAX9tn7WX&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdS7XaIQ_1udyiQ1pJ1k51y3b8MSgxUQUUzQTcVcCMSABg&oe=64751F5D',
    },
  {
    name: 'Rayen Zegden',
    role: 'Junior Front-End Developer / ML Enthusiast',
    imageUrl:
    "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/343543278_549264090720335_7766274660298736295_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=jqhZHdBvBTsAX9VJfTu&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdSJXMdq-8fmxVW1cKX2fd58IOl61n0Crjy-d_nO-U8iUw&oe=647508E1"  },
  {
    name: 'Mohamed Aziz Omri',
    role: 'Junior Front-End Developer / ML Enthusiast',
    imageUrl:
      'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/343590379_744794054051742_1123928267686702009_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=HA9fDwsOsggAX-CXqd1&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdTCVMxlG8TC1R25jGZhYIVriqPRrftftIbktMke8E_81A&oe=64751CC4',
  },
  
]

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

      {/*our team*/}



    
    
    <Carding/>

        

        {/* Security*/}


        <div className="flex p-10 space-x-10">
        <div className="text-black space-y-10 py-20">
            <h1 className="text-2xl sm:text-3xl text-[#8FE0C1] font-semibold ">Our Secure and Safer Rides</h1>
          <span className="text-xl text-black">
          We want you to move freely, make the most of your time, and be connected to the people and places that matter most to you. That’s why we are committed to safety, from the creation of new standards to the development of technology with the aim of reducing incidents.
          </span>

          <a className='group text-black transition-all duration-300 ease-in-out p-8 hover:text-blue-500' href={'fqa'}>
            <span className='font-semibold bg-left-bottom bg-gradient-to-r from-blue-900 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
          More Info
          </span>
        </a>
        </div>

        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
            
            className=""/>
      </div>
      <div className="bg-[#05091a]/30 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are 2nd Year Computer engineering students at FST. We are passionate about technology and we love to build things.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
            
           <Footer/>

      </div>
    
  );
}
