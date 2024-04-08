import React, { useState, useEffect } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { HEADER_IMG, SUPPORTED_LANGUAGES, USER_IMG } from '../utils/constants';
import { addOnClick } from '../utils/gptSlice';
import { setLanguage } from '../utils/langSlice';
import {  addisRecommendBtnClicked } from '../utils/gptSlice';

const Header = () => {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user)

  const navigate = useNavigate();

  const [arrowClicked, setArrowClicked] = useState(false);

  const showSignOut = () => {
    setArrowClicked(!arrowClicked)
  }
  const handleMoviesRecommendationButton = () => {
    dispatch(addOnClick());
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

  const movieRecommendationsBtnStatus = useSelector(store => store.gptPage.isMovieRecommendationClicked);

  const handleLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
  }

  const handleBackToBrowse = () => {
    dispatch(addisRecommendBtnClicked())
  }

  const recommendBtnStatus = useSelector(s => s.gptPage.isRecommendBtnClicked);
  return (
    <div className='top-0 left-0 flex justify-between bg-gradient-to-b  from-black items-center absolute w-screen z-50  h-[100px]'>
      
      <img className= "sm:w-48 w-32 mt-2 sm:mt-0" alt = "header-logo" src = {HEADER_IMG} />

      {user && 
      <div className='flex sm:items-center justify-center gap-1 items-center'>
        { movieRecommendationsBtnStatus && 

          
          <div className='opacity-85  sm:text-base text-xs rounded-md bg-white py-2 sm:px-4 sm:py-0  hover:cursor-pointer text-center'>
            { recommendBtnStatus ? <div onClick={handleBackToBrowse} className='sm:py-2'>Back to Recommendation Page</div>:
            <div className='flex py-2 bg-white items-center justify-center sm:p-2 rounded-md'>
              <label className= "text-xs sm:text-base" htmlFor="Languages">Lang:</label>
              <select onChange={handleLanguage} className='hover:cursor-pointer text-xs sm:text-base'>
                {SUPPORTED_LANGUAGES.map(lang => <option className= "ml-1 text-xs sm:text-base" key = {lang.identifier} value = {lang.identifier}>{lang.name}</option>)}
              </select>
            </div>
            }
          </div>
        }
        

        <button className='bg-white text-xs sm:text-base md:px-4 md:py-2 rounded-lg text-black sm:mr-20 mr-1 md:shadow-lg opacity-85 sm:p-2 p-2' onClick={handleMoviesRecommendationButton}> {movieRecommendationsBtnStatus ? "Back To Browse" : "Recommendations"} </button>
        <div className='flex items-center relative flex-col h-[50px] w-[100px] '>
          <div className='flex items-center'>
            <img className= "block w-12"alt= "user-logo" src = {USER_IMG} />
            <span className = "block sm:ml-2 ml-1 mt-5 hover:cursor-pointer" onClick={showSignOut}>⬇️</span>
          </div>
          <div>
            {arrowClicked && <p className= 'text-black hover:cursor-pointer mt-4 bg-white text-base p-1 px-2 rounded-lg' onClick={handleSignOut}>Sign Out</p>}
          </div>
        </div>
      </div>}
      
    </div>
  )
}

export default Header