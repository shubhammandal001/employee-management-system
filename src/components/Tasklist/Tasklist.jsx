import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function Tasklist({data}) {
    // console.log(data);
    
  return (
    <div id="tasklist" className='h-[48%] py-5 w-full mt-10 flex items-center justify-start gap-4 flex-nowrap overflow-x-auto '>
       {data.tasks.map((elem ,idx)=>{

        if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
           
            return <NewTask key={idx} data={elem}/>
        }
        if(elem.completeTask){
            return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
            return <FailedTask key={idx} data={elem}/>
        }
       })}

      
        
    </div>
       
  )
}

export default Tasklist