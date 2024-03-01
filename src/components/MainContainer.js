import React from 'react'
import VideoContainer from './VideoContainer'
import MainText from './MainText'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const moviesArr = useSelector(store => store.movies.nowPlayingMovies);

    if (!moviesArr) return;

    console.log(moviesArr[0]);
    const { original_title, overview, id} = moviesArr[0];


  return (

    <div className='relative'>
        <VideoContainer id = {id}/>
        <MainText title = {original_title} desc = {overview} />
    </div>
    
  )
}

export default MainContainer