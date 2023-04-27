"use client"

import Image from "next/image";
import { useRouter } from "next/router";

import { ClockIcon ,BanknotesIcon, MapPinIcon} from "@heroicons/react/24/outline";
import Banner from "./components/Banner";
import Header from "./components/Header";





export default function Home() {
  return (
    <div className="">
      <Header/>
      <Banner/>

      <div className="p-5 py-10">
        <h1 className="font-semibold text-3xl px-7">Join the Movement: Fi Thnitek</h1>
        <img className="w-full h-80 "
        src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_1440,h_337/v1536163144/assets/27/d1f66e-c9c5-455a-b912-234700f4c0d8/original/whyRideWithUs_desktop.svg"
        alt="Picture of the author"
      />

      <div className="flex items-center justify-center py-9 ">

        <div className="space-y-3 mx-8">
          <ClockIcon className="h-5 w-5"/>
          <h1 className="font-semibold">Rides on demand</h1>
          <p className="text-gray-500">Request a ride at any time and on any day of the year. </p>
        </div>
          
        <div className="space-y-3 mx-8">
        <BanknotesIcon className="h-5 w-5"/>
          <h1 className="font-semibold">Budget-friendly options </h1>
          <p className="text-gray-500" >Compare prices on every kind of ride, from daily commutes to special evenings out.</p>

        </div>

        <div className="space-y-3 mx-8"> 
          <MapPinIcon className="h-5 w-5"/>
          <h1 className="font-semibold">An easy way to get around </h1>
          <p className="text-gray-500">Tap and let your driver take you where you want to go, worry-fre</p>
        </div>

        {/*<div>
          <span>
            How riding works
          </span>
    </div>*/ }


      </div>

        <a className='group text-black transition-all duration-300 ease-in-out p-8 hover:text-blue-500' href='#'>
          <span className='font-semibold bg-left-bottom bg-gradient-to-r from-blue-900 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
          How riding works
          </span>
        </a>

      </div>

      <div className="p-10">
        <img className="w-70 h-70  "
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_392/v1681484528/assets/1f/8da917-59a4-452a-8bc0-148f4a48c0f5/original/img_1.png"
        
        alt=""/>

        <div>
          <h1>
            Reserve a ride that's ready when you are
          </h1>
          <p>
          Now more than ever, reservations are a way of life. Reserve a premium Uber experience, up to 30 days in advance, for whenever you’re ready to ride.
          </p>
        </div>

      </div>
      
    </div>
  )
}
