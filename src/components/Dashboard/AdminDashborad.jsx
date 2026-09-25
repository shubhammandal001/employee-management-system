import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

function AdminDashborad() {
  return (
    <div className='w-full h-screen p-7'>
        <Header/>
        <CreateTask/>
        <AllTask/>

    </div>
  )
}

export default AdminDashborad