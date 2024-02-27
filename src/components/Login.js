import React from 'react'
import Header from './Header'
import Form from './Form'

const Login = () => {
  return (
    <div className='border border-green-400 flex justify-center items-center'>
        <Header />
        <Form />
        

        <div className='h-full'>
            <img alt = "background"src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/61f2fefd-808e-4590-91ee-899afbd70bd7/US-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        </div>
    </div>

    
  )
}

export default Login