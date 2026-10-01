import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

function AllTask() {

  const [userData,setuserData] = useContext(Authcontext)

  return (
    <div className=' bg-[1c1c1c] p-5 rounded mt-5'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
        <h2 className=' text-lg font-medium w-1/5'>Employe Name</h2>
        <h2 className=' text-lg font-medium w-1/5'>New Task</h2>
        <h2 className=' text-lg font-medium w-1/5'>Active Task</h2>
        <h2 className=' text-lg font-medium w-1/5'>Completed</h2>
        <h2 className=' text-lg font-medium w-1/5'>Failed</h2>
      </div>
      <div>
        {userData.employee.map(function(elem , idx){
        return  <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded '>
        <h2 className=' text-lg font-medium w-1/5 text-blue-500' >{elem.firstName}</h2>
        <h2 className=' text-lg font-medium w-1/5 text-amber-300'>{elem.taskSummary.newTask}</h2>
        <h2 className=' text-lg font-medium w-1/5 text-amber-800'>{elem.taskSummary.active}</h2>
        <h2 className=' text-lg font-medium w-1/5 text-gray-200'>{elem.taskSummary.completed}</h2>
        <h2 className=' text-lg font-medium w-1/5 text-red-400'>{elem.taskSummary.failed}</h2>
      </div>
        })}
      </div>

    </div>
  )
}

export default AllTask