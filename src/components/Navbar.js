import React from 'react'

function Navbar() {
  return (
    <div className='py-2 px-10 flex justify-between items-center'>
       
      {/* Map */}
      <div className='w-1/2 flex gap-2'>
        <h1 className='font-nunito font-semibold text-gray-300 text-sm'>Home</h1>
        <h1 className='font-nunito font-semibold text-gray-300 text-sm'>&#62;</h1>
        <h1 className='font-nunito font-semibold text-indigo-900 text-sm'>Dashboard</h1>
      </div>

      <div className='w-1/2 flex justify-between'>

        {/* Search Box */}
        <div className='w-96 p-1 bg-gray-100 flex items-center gap-1 border border-sky-500 rounded-md'>
          <img src='./assets/search.svg' alt='search' className='size-4' />
          <input type='text' placeholder='search anything....' className='w-full bg-gray-100 text-sm'/>
        </div>

        {/* Profile Section */}
        <div className='flex items-center gap-1'>

          <div className='size-8 flex items-center justify-center hover:bg-gray-200 rounded-full cursor-pointer'>
              <img src='./assets/bell.svg' alt='user-avatar' className='size-4 cursor-pointer' />
          </div>

          <div className='px-2 py-1 flex items-center gap-2 hover:bg-gray-100 rounded-md'>

            {/* User Avatar */}
            <div className='size-8 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer'>
              <img src='./assets/user.svg' alt='user-avatar' className='size-4 cursor-pointer' />
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
              <h1 className='font-nunito'>username</h1>
              <div className='size-2 rotate-45 border-b-2 border-r-2 border-black'></div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Navbar