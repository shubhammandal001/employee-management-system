import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashborad from './components/Dashboard/AdminDashborad'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { Authcontext } from './context/AuthProvider'

const App = () => {

  
  const [User, setUser] = useState(null)
  const [loggedinUserData, setloggedinUserData] = useState(null)

  const [userData,setuserData] = useContext(Authcontext)  // saara daata agya hai local storage se use cotext ke help se jo ki auth provider de rha h (context api)
  //console.log(authData.employee);

  useEffect(() => {
    const loggedinUserData = localStorage.getItem('loggedinUser')
    
    if(loggedinUserData){
       const userData = JSON.parse(loggedinUserData)
       setUser(userData.role)
       setloggedinUserData(userData.data)
       
    }
    
  
  }, [])
  


  const handleLogin = (email,password) =>{
    
   if(email=='admin@me.com' && password=='123'){
       setUser('admin')
       localStorage.setItem('loggedinUser',JSON.stringify({role:'admin'}))

   }else if(userData){
        console.log(userData);
        
        const employee = userData.employee.find((e)=>email == e.email && password == e.password)
        if(employee){
           setUser('employee')
           setloggedinUserData(employee)
           localStorage.setItem('loggedinUser',JSON.stringify({role:'employee',data:employee}))
        }
       
      
    }else{

       alert("Invalid crediantials !")

    }
  }

  
  

  return (
    <>
    {!User ? < Login handleLogin={handleLogin} /> : ""}
    {User == 'admin' ? <AdminDashborad changeUser={setUser} /> : (User=='employee'? <EmployeeDashboard changeUser={setUser} data = {loggedinUserData}/> : null)}
    </>
  )
}

export default App