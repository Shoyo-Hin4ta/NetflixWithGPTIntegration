import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondContainer = () => {

    const moviesList = useSelector(store => store.movies.nowPlayingMovies);

    if (!moviesList) return;

    return (
        <div className='-mt-52 z-20 absolute '>
            <MovieList title = {"Now Playing"} nowPlaying = {moviesList}/>
        </div>
    )
}

export default SecondContainer