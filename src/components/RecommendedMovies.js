import React from 'react'
import { useSelector } from 'react-redux';
import useGetRecommendedMovies from '../hooks/useGetRecommendedMovies';
import RecommededMoviesCard from './RecommededMoviesCard';

const RecommendedMovies = () => {

  // useGetRecommendedMovies(moviesArr);

  const moviesArr = useSelector(store => store.gptPage.gptMovies);

  useGetRecommendedMovies(moviesArr);
  
  const recommendedMovies = useSelector(s => s.gptPage.recommendedMovies.flat(Infinity));


  return (
    <div className='border bg-black'>
      <div>
        <div className='text-center text-2xl mt-24 text-white'>Recommended Movies</div>
        <div className='flex flex-wrap m-4 justify-center mx-auto'>{
          recommendedMovies.map((movie)=> <>< RecommededMoviesCard key={movie.id} id= {movie.id} poster_path = {movie.poster_path} title = {movie.original_title} overview = {movie.overview}/></>)
        }
        </div>
      </div>
    </div>
  )
}

export default RecommendedMovies