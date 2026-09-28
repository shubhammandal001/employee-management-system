import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const Authcontext = createContext()

const AuthProvider = ({children}) => {
 // localStorage.clear()

  const [userData, setuserData] = useState(null)

  useEffect(() => {
     setLocalStorage()
     const {employee,admin} = getLocalStorage() // destructre kar liya jo getlocalstorage se arha hai usko
  setuserData({employee,admin})
  }, [])
  

  // const data = getLocalStorage()
  // console.log(data.employee);
  

  return (
    <div>
      <Authcontext.Provider value = {userData}>
        {children}
      </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider