import React, { useEffect } from 'react'
// import Header from './Header'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();

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

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        // Updating the store:
        dispatch(addUser({uid : uid, email : email, displayName : displayName}));
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
      });
  }, []);

  return (
    <div>
        <RouterProvider router={router}/>
    </div>
    
  )
}

export default Body