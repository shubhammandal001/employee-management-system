import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>Shubham 👋</span> </h1>
        <button className='bg-red-500 text-lg font-medium text-white py-2 px-4 rounded-xl hover:bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header