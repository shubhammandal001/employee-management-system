import React from 'react'
import Header from '../others/Header'
import TasklistNumber from '../others/TasklistNumber'
import Tasklist from '../Tasklist/Tasklist'

function EmployeeDashboard({data}) {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TasklistNumber data={data}/>
        <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard