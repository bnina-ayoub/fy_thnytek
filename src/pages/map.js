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
        title="Navigation">

        </iframe>
        <h1 className="text-lg font-bold tracking-tight text-center p-5">
            Welcome, Check Out Our Rides
        </h1>
        
        <div class="container my-12 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-auto" 
                        src="https://www.auto-plus.tn/assets/modules/usedcars/10657/full/voiture-peugeot-1-ere-main_used_0.jpeg"/>
                    </a>

                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Tunis - Sousse
                            </a>
                        </h1>
                        <p class="text-grey-darker text-sm">
                        10/04/2023
                        </p>
                    </header>

                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                            <p class="ml-2 text-sm">
                                Aymen Fathallah
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">2 places Disponibles</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </footer>

                </article>
            

            </div>
            

        
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.cava.tn/media/item/675390/resized/57391682883174.jpeg"/>
                    </a>

                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Mannouba - Bizerte
                            </a>
                        </h1>
                        <p class="text-grey-darker text-sm">
                            11/1/19
                        </p>
                    </header>

                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                            <p class="ml-2 text-sm">
                                Mohamed Saleh
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </footer>

                </article>
            

            </div>
        


            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.auto-plus.tn/assets/modules/usedcars/19335/full/audi-q2-importe-dallemagne-douane-paye_used_01614541155.jpeg"/>
                    </a>

                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Article Title
                            </a>
                        </h1>
                        <p class="text-grey-darker text-sm">
                            11/1/19
                        </p>
                    </header>

                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                            <p class="ml-2 text-sm">
                                Author Name
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </footer>

                </article>
                

            </div>
        

        
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.auto-plus.tn/assets/modules/usedcars/19335/full/audi-q2-importe-dallemagne-douane-paye_used_01614541155.jpeg"/>
                    </a>

                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Article Title
                            </a>
                        </h1>
                        <p class="text-grey-darker text-sm">
                            11/1/19
                        </p>
                    </header>

                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                            <p class="ml-2 text-sm">
                                Author Name
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </footer>

                </article>
            

            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                    </a>

                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Article Title
                            </a>
                        </h1>
                        <p class="text-grey-darker text-sm">
                            11/1/19
                        </p>
                    </header>

                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                            <p class="ml-2 text-sm">
                                Author Name
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </footer>

                </article>
            

            </div>
            

        
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                    </a>

                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Article Title
                            </a>
                        </h1>
                        <p class="text-grey-darker text-sm">
                            11/1/19
                        </p>
                    </header>

                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                            <p class="ml-2 text-sm">
                                Author Name
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </footer>

                </article>
                

            </div>
            

        </div>
    </div>
        
        </div>
        <Footer/>
        </div>
        
    )
    }
