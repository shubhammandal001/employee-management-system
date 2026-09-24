import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {

        e.preventDefault()

        console.log('Form submitted ')
        console.log('Email:', email)
        console.log('Password:', password)

        setEmail('')
        setPassword('')
    }

  return (

    <div className='flex justify-center h-screen w-screen items-center'>
        <div className='border-2 border-emerald-500 rounded-xl p-20'>

        <form 
        onSubmit={(e)=>{submitHandler(e)}}
        className='flex flex-col  items-center justify-center'>
            <input
            required className='border-2 border-emerald-500 rounded-full py-4 px-5 text-xl outline-none bg-transparent placeholder:text-grey-400' type="email" placeholder='Enter your email' 
            value={email}
            onChange={(e) => {
             setEmail(e.target.value)}}
            />

            <input 
            required 
            className='border-2 border-emerald-500 rounded-full py-4 px-5 text-xl mt-2 outline-none bg-transparent placeholder:text-grey-400' 
            type="password" 
            placeholder='Enter your password'
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)  
            }}
            /> 

            <button className='bg-emerald-500 mt-5 text-white py-2 px-4 rounded-full hover:bg-emerald-600'>Login</button>
        </form>

        </div>
    </div>
  )
}

export default Login