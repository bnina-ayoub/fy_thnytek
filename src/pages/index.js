"use client"

import Image from "next/image";
import { useRouter } from "next/router";

import { ClockIcon ,BanknotesIcon, MapPinIcon} from "@heroicons/react/24/outline";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";





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

      <Feedback/>

      <div className="p-10 flex items-center justify-center">
        <img className="w-70 h-70  "
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_392/v1681484528/assets/1f/8da917-59a4-452a-8bc0-148f4a48c0f5/original/img_1.png"
        
        alt=""/>

        <div className="pl-7 space-y-4">
          <h1 className="text-3xl sm:text-3xl text-[#8FE0C1] font-semibold" >
            Reserve a ride that's ready when you are
          </h1>
          <p className="text-lg text-black">
          Now more than ever, reservations are a way of life. Reserve a premium Uber experience, up to 30 days in advance, for whenever you’re ready to ride.
          </p>
          <div className="space-x-4 items-center">

          <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                  <div class="text-left">
                      <div class="mb-1 text-xs">Download on the</div>
                      <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                  </div>
              </a>
              <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                  <div class="text-left">
                      <div class="mb-1 text-xs">Get in on</div>
                      <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                  </div>
              </a>
          </div>
        </div>

      </div>

      {/*app*/}

     


      
      <Footer/>
    </div>
  )
}
