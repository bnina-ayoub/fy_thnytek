import React from 'react'

function Feedback() {
  return (
    
    <section className="relative  overflow-hidden bg-[#05091a]/30 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="https://scontent.ftun4-2.fna.fbcdn.net/v/t1.15752-9/334249645_853648469066576_3681408509611808809_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=S5x_JMGecd8AX_uRTXL&_nc_ht=scontent.ftun4-2.fna&oh=03_AdTFnnO9ihTVkr5uesGvbCvSFLQmTejDd0JDzxOQUNOAwQ&oe=6473A6F3" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “One of the standout features of <span className='font-bold underline text-[#24AE5F] '>Fy Thnytek</span> is its easy-to-use interface. The app is well-designed and intuitive, allowing you to quickly search for rides or create your own ride listing. The platform is also optimized for mobile, which means you can access it on the go from your smartphone or tablet.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Uber</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

  )
}

export default Feedback