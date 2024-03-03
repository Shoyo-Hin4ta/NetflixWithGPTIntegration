import React from 'react'
import { useSelector } from 'react-redux';
import useGetRecommendedMovies from '../hooks/useGetRecommendedMovies';

const RecommendedMovies = () => {

  // useGetRecommendedMovies(moviesArr);

  const moviesArr = useSelector(store => store.gptPage.gptMovies);

  useGetRecommendedMovies(moviesArr);
  

  return (
    <div className='z-50 text-xl'>{moviesArr}</div>
  )
}

export default RecommendedMovies