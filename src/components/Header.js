import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const user = useSelector(store => store.user)

  const navigate = useNavigate();

  const [arrowClicked, setArrowClicked] = useState(false);

  const showSignOut = () => {
    setArrowClicked(!arrowClicked)
  }

  const handleSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
  }

  return (
    <div className='top-0 left-0 flex justify-between bg-gradient-to-b from-black items-center absolute w-full'>
      
      <img className= " w-48" alt = "header-logo" src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />

      {user &&  <div className='flex items-center'>
        <img className= "w-12"alt= "user-logo" src = "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7" />
        <span className = "mx-2" onClick={showSignOut}>⬇️</span>
        <div>
        <span className= 'text-white hover:cursor-pointer' onClick={handleSignOut}>Sign Out</span>
        </div>
      </div>}
      
    </div>
  )
}

export default Header