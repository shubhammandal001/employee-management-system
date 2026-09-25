import React from 'react'

const CreateTask = () => {
  return (
    
     <div className='p-5 bg-[1c1c1c] border-[1px] border-emerald-500 rounded mt-5'>
            <form className='flex items-start justify-between  w-full flex-wrap'>

                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-400 mb-0.5'>Task Title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  mb-4 border-gray-500' type="text" placeholder='Enter Task Title'/>
               
                    <h3 className='text-sm text-gray-400 mb-0.5'>Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  mb-4 border-gray-500' type="date"/>
                    
                    <h3 className='text-sm text-gray-400 mb-0.5'>Assign To</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-500' type="text" placeholder='Enter Employee Name'/>
                    
                    <h3 className='text-sm text-gray-400 mb-0.5'>Category</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  mb-4 border-gray-500' type="text" placeholder='Enter Task Category'/><br/>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-400 mb-0.5'>Task Description</h3>
                    <textarea className='text-sm h-44 w-full py-1 px-2 rounded outline-none bg-transparent border-[1px]  mb-4 border-gray-500 ' rows="5" name="" id="" placeholder='Enter Task Description'></textarea>
                    <button className='bg-emerald-500 hover:bg-emerald-700 text-amber-50 text-lg font-bold px-4 py-1 w-full rounded mt-2'>Create Task</button>
                </div>

               
            </form>
        </div>

  )
}

export default CreateTask