import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondContainer = () => {

    const nowPlayingMoviesList = useSelector(store => store.movies.nowPlayingMovies);
    
    const popularMovies = useSelector(store=>store.movies.popularMovies);
    
    const topMovies = useSelector(store=>store.movies.topRatedMovies);


    if (!nowPlayingMoviesList || !popularMovies || !topMovies) return;

    return (
        <div className='-mt-12 md:-mt-64 relative bg-black opacity-95 w-screen'>
            <MovieList title = {"Now Playing"} nowPlaying = {nowPlayingMoviesList}/>
            <MovieList title = {"Popular Movies"} nowPlaying = {popularMovies}/>
            <MovieList title = {"Top Rated Movies"} nowPlaying = {topMovies}/>
            <MovieList title = {"Now Playing"} nowPlaying = {nowPlayingMoviesList}/>
            <MovieList title = {"Popular Movies"} nowPlaying = {popularMovies}/>
            <MovieList title = {"Top Rated Movies"} nowPlaying = {topMovies}/>
        </div>
    )
}

export default SecondContainer