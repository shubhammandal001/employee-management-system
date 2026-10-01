import React, { useContext, useState } from 'react'
import { Authcontext } from '../../context/AuthProvider'
import { setLocalStorage } from '../../utils/LocalStorage'

const CreateTask = () => {

    const[userData, setuserData] = useContext(Authcontext)

    const [taskTitle, settaskTitle] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [taskAssignTo, settaskAssignTo] = useState('')
    const [taskCategory, settaskCategory] = useState('')
    const [description, setdescription] = useState('')

    const[newTask,setnewTask] = useState({})

    const  submitHandler = (e)=> {
        e.preventDefault()
       // console.log("submited");
       setnewTask({taskTitle,taskDate,taskCategory,description,active:false,newTask:true, failed:false,completed:false})

       const data = userData.employee

       data.forEach(function(elem) {
        if (taskAssignTo == elem.firstName){
            elem.tasks.push(newTask)
            elem.taskSummary.newTask = elem.taskSummary.newTask + 1
        }
       })
       setuserData({employee:data})
       localStorage.setItem("employee",JSON.stringify(data))

       console.log(data);
       

        settaskTitle('')
        settaskCategory('')
        settaskAssignTo('')
        settaskDate('')
        setdescription('')
        
    }

   

  return (
    
     <div className='p-5 bg-[1c1c1c] border-[1px] border-emerald-500 rounded mt-5'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex items-start justify-between  w-full flex-wrap'>

                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-400 mb-0.5'>Task Title</h3>
                    <input onChange={(e)=>{
                        settaskTitle(e.target.value)
                    }} value={taskTitle} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  mb-4 border-gray-500' type="text" placeholder='Enter Task Title'/>
               
                    <h3 className='text-sm text-gray-400 mb-0.5'>Date</h3>
                    <input onChange={(e)=>{
                        settaskDate(e.target.value)
                    }} value={taskDate} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  mb-4 border-gray-500' type="date"/>
                    
                    <h3 className='text-sm text-gray-400 mb-0.5'>Assign To</h3>
                    <input onChange={(e)=>{
                        settaskAssignTo(e.target.value)
                    }} value={taskAssignTo} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-500' type="text" placeholder='Enter Employee Name'/>
                    
                    <h3 className='text-sm text-gray-400 mb-0.5'>Category</h3>
                    <input  onChange={(e)=>{
                        settaskCategory(e.target.value)
                    }} value={taskCategory} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  mb-4 border-gray-500' type="text" placeholder='Enter Task Category'/><br/>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-400 mb-0.5'>Task Description</h3>
                    <textarea onChange={(e)=>{
                        setdescription(e.target.value)
                    }} value={description} className='text-sm h-44 w-full py-1 px-2 rounded outline-none bg-transparent border-[1px]  mb-4 border-gray-500 ' rows="5" name="" id="" placeholder='Enter Task Description'></textarea>
                    <button className='bg-emerald-500 hover:bg-emerald-700 text-amber-50 text-lg font-bold px-4 py-1 w-full rounded mt-2'>Create Task</button>
                </div>

               
            </form>
        </div>

  )
}

export default CreateTask