import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Carding from './components/carding';

export default function Mapp() {
  return (
    <div >
      <Header/>
      <div className="flex flex-col sm:flex-row">
    <iframe width='500px' height='700px' src="https://api.mapbox.com/styles/v1/rayen1/clfspe4x9014301pe8mvvvzg5.html?title=false&access_token=pk.eyJ1IjoicmF5ZW4xIiwiYSI6ImNsZnNwYTdoejA4YXkzY2wydTdneXM4dXEifQ.ZtKGFls9JdhgcStyIyxYtA&zoomwheel=false#6.86/35.228/9.358" 
    title="Navigation"></iframe>
    <h1 className="text-lg font-bold tracking-tight text-center p-5">
        Welcome, Check Out Our Rides
    </h1>

    <div className='grid-cols-4'>
        <div class="bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img class="rounded-t-lg" src="https://www.tunisienumerique.com/wp-content/uploads/2020/08/banu.jpg" alt="" />
            <div class="py-6 px-8 rounded-lg bg-white">
                <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Nabeul </h1>  
            </div>
            </div>

            <div class="bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img class="rounded-t-lg" src="https://www.tunisienumerique.com/wp-content/uploads/2020/08/banu.jpg" alt="" />
            <div class="py-6 px-8 rounded-lg bg-white">
                <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Nabeul </h1>  
            </div>
            </div>

            <div class="bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img class="rounded-t-lg" src="https://www.tunisienumerique.com/wp-content/uploads/2020/08/banu.jpg" alt="" />
            <div class="py-6 px-8 rounded-lg bg-white">
                <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">Nabeul </h1>  
            </div>
            </div>
            
        </div>

        
    </div>
    <Footer/>
    </div>
  )
}
