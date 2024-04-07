import React from 'react'
import Header from './Header'
import Form from './Form'
import { BACKGROUND } from '../utils/constants'

const Login = () => {
  return (
    <div className='flex justify-center items-center w-full'>
        <Header />
        <Form />
        

        <div className='h-screen w-screen'>
            <img alt = "background"src={BACKGROUND} className='h-full w-full object-cover'/>
        </div>
    </div>

    
  )
}

export default Login