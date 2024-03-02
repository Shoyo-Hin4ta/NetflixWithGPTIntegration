import React from 'react'
import Header from './Header'
import Form from './Form'
import { BACKGROUND } from '../utils/constants'

const Login = () => {
  return (
    <div className='flex justify-center items-center'>
        <Header />
        <Form />
        

        <div className='h-full'>
            <img alt = "background"src={BACKGROUND}/>
        </div>
    </div>

    
  )
}

export default Login