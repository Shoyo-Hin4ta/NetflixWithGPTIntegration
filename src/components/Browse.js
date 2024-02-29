import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {

  //creating a custom hook which updates our store.

  useNowPlayingMovies();


  
  const dispatch = useDispatch();

  const getPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
     getPlayingMovies()
  },[]);

  return (
    
    <div>
      <Header />

    </div>
  )
}

export default Browse