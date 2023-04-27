import React from 'react'

function searchbar() {
  return (
    <div>
        <form action="" className='rounded-lg p-4 pt-10 bg-gray-700/30 border-none'>
    <input type="text" placeholder='Leaving From'
    className='p-2'/>
    
    <input type="text" placeholder='Going To'
    className='p-2'/>
    <button className='bg-[#00AFF5] p-2 '>Search
     </button>
  </form>
  </div>
  )
}

export default searchbar