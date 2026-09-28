import React from 'react'

function TasklistNumber({data}) {
  return (
    <div className='flex mt-10 justify-between gap-4 screen'>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskSummary.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='rounded-xl px-9 py-6 w-[45%] bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskSummary.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className='rounded-xl px-9 py-6 w-[45%] bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskSummary.active}</h2>
            <h3 className='text-xl font-medium'>Accept Task</h3>
        </div>

        <div className='rounded-xl px-9 py-6 w-[45%] bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskSummary.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TasklistNumber