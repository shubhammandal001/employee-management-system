import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data.taskTitle);
    
  return (
     
        <div className=' w-[285px] bg-red-300 p-4 rounded-xl shrink-0'>
            <div className='flex items-end justify-between '>
                <h3 className='bg-red-600 px-2 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-xl font-semibold mt-1'>{data.taskTitle}</h2>
            <p className='text-gray-600 text-sm  mt-1'>{data.taskDescription}</p>
            <div className='flex justify-between gap-2 mt-4'>
                <button className='bg-green-400 py-1 px-2  rounded-xl text-sm'>Marked as completed</button>
                <button className='bg-red-400 py-1 px-2  rounded-xl text-sm'>Marked as Failed</button>
            </div>
        </div>

  )
}

export default AcceptTask