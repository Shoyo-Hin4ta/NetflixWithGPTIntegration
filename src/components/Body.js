import React from 'react'
// import Header from './Header'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'

const Body = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Login />,
      // children : [
      //   {
      //     path : "/browse",
      //     element : <Browse />
      //   }, 
      // ]
    },
    {
      path : "/browse",
      element : <Browse />
    }
  ])

  return (
    <div>
        <RouterProvider router={router}/>
    </div>
    
  )
}

export default Body