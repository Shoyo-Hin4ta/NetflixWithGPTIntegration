import React, { useState, useEffect } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { HEADER_IMG, USER_IMG } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user)

  const navigate = useNavigate();

  const [arrowClicked, setArrowClicked] = useState(false);

  const showSignOut = () => {
    setArrowClicked(!arrowClicked)
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        // Updating the store:
        dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
      });

      return () => unsubscribe();
      
  }, []);

  const handleSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        navigate("/error");
      });
  }


  return (
    <div className='top-0 left-0 flex justify-between bg-gradient-to-b from-black items-center absolute w-full z-50'>
      
      <img className= " w-48" alt = "header-logo" src = {HEADER_IMG} />

      {user &&  <div className='flex items-center'>
        <img className= "w-12"alt= "user-logo" src = {USER_IMG} />
        <span className = "mx-2" onClick={showSignOut}>⬇️</span>
        <div>
        <span className= 'text-white hover:cursor-pointer' onClick={handleSignOut}>Sign Out</span>
        </div>
      </div>}
      
    </div>
  )
}

export default Header