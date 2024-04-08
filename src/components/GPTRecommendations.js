import React, { useState } from 'react'
import { BACKGROUND } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import RecommendedMovies from './RecommendedMovies';
import { useRef } from 'react';
import openai from '../utils/gptAPI';
import { addMovies, addisRecommendBtnClicked } from '../utils/gptSlice';

const GPTRecommendations = () => {

  const userText = useRef(null);
  const dispatch = useDispatch();
  const language = useSelector(store  => store.language.lang)
  // console.log(language);

  const recommendBtnStatus = useSelector(store => store.gptPage.isRecommendBtnClicked);

  const handleRecommend = async() => {

      if (recommendBtnStatus === true) return;

      const query  = "Act as a movie recommendation system, based on this user query "+ userText.current.value + " give me 5 movies suggestions. The output should be just,(bascially movie names seperated by commas dont give me number like 1. movie name just movie names seperated by commas) like this movie1, movie2, movie3, movie4, movie5"

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });

      // console.log(gptResults.choices[0].message.content.split(","));
      // return gptResults;

      dispatch(addMovies(gptResults.choices[0]?.message?.content?.split(",")))

      dispatch(addisRecommendBtnClicked());

  }



  

  return (

      <>
      {recommendBtnStatus ? <RecommendedMovies/> 
      :
      <div className='h-screen flex items-center justify-center'>
          <img className="h-full w-screen" alt="background" src={BACKGROUND} />
          <div className='absolute sm:w-3/5 sm:top-2/5 w-full'>
      
              <form onSubmit={(e)=> e.preventDefault()} className='bg-red-600 hidden sm:visible p-4 m-2 sm:flex sm:justify-between'>
                <input ref={userText} placeholder={lang[language]['searchPlaceHolder']} className='p-2 w-10/12 text-2xl mr-2 rounded-md' /> 
                <button onClick={handleRecommend}  className='p-2 text-2xl text-white bg-black w-2/12 rounded-md'>{lang[language]['recommend']}</button>
              </form>

              <form onSubmit={(e)=> e.preventDefault()} className='bg-red-600 p-4 m-2 flex flex-col items-center sm:hidden'>
                <input ref={userText} placeholder={lang[language]['searchPlaceHolder']} className='p-2 w-full text-base mr-2 rounded-md' /> 
                <button onClick={handleRecommend}  className='p-2  text-base text-white  bg-black w-6/12 rounded-md mt-2'>{lang[language]['recommend']}</button>
              </form>
          </div>
      </div>
      }
      </>
    
  )
}

export default GPTRecommendations;