import React from 'react'
import { BACKGROUND } from '../utils/constants';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import RecommendedMovies from './RecommendedMovies';

const GPTRecommendations = () => {


  const language = useSelector(store  => store.language.lang)
  // console.log(language);

  return (

      <>

      <div className='h-full flex items-center justify-center'>
          <img alt="background" src={BACKGROUND} />
          <div className='absolute w-3/5 top-2/5'>
      
              <form className='bg-red-600 p-4 m-2 flex justify-between'>
                <input placeholder={lang[language]['searchPlaceHolder']} className='p-2 w-10/12 text-2xl mr-2 rounded-md' /> 
                <button className='p-2 text-2xl text-white bg-black w-2/12 rounded-md'>{lang[language]['recommend']}</button>
              </form>
          </div>
          <RecommendedMovies/>
      </div>

      </>
    
  )
}

export default GPTRecommendations;