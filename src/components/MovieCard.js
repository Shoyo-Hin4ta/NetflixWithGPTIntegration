import React from 'react'
import { MOVIE_POSTER } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='mr-2'>
        <img alt = "poster"
        src = {MOVIE_POSTER+poster_path} className='rounded-lg m-2 min-w-32 min-h-40'/>
    </div>
  )
}

export default MovieCard