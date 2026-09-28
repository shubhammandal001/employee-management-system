import React from 'react'

const FailedTask = ({data}) => {
  return (
     <div className=' w-[285px] bg-red-300 p-4 rounded-xl shrink-0'>
            <div className='flex items-end justify-between '>
                <h3 className='bg-red-600 px-2 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-xl font-semibold mt-1'>{data.taskTitle}</h2>
            <p className='text-gray-600 text-sm  mt-1'>{data.taskDescription}</p>
            <div className='mt-4'>
                <button className='bg-green-400 py-1 px-2 w-full rounded-xl text-sm'>Failed</button>
                
            </div>
        </div>
  )
}

export default FailedTask