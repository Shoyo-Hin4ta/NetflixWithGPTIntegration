import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, nowPlaying}) => {

    // console.log(nowPlaying[0].poster_path);

    return (
        <div className='mx-14 my-10'>

            <h1 className='text-3xl mb-3'>{title}</h1>

            <div className='flex overflow-x-scroll'>
                {nowPlaying.map((movie) => <MovieCard key = {movie.id} poster_path = {movie.poster_path}/>)}
            </div>

        </div>
  )
}

export default MovieList