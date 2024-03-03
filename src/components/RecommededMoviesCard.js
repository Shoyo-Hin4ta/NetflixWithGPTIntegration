import React from 'react'
import { MOVIE_POSTER } from '../utils/constants'

const RecommededMoviesCard = ({poster_path, title, overview}) => {

    if (!poster_path) return;

  return (
    <div className=' h-[400px] w-[300px] m-2 p-2 bg-white text-black bg-opacity-90 flex flex-col items-center rounded-lg'>
        <div className=' mt-2'>
            <img className='h-[180px] w-[100px] inline' alt="poster" src={MOVIE_POSTER+poster_path} />
        </div>
        <div className='flex flex-col items-center  mt-4  overflow-scroll '>
            <label className=' text-lg font-bold mb-3'>{title}</label>
            {overview && (
                <>
                    <div className='text-sm mb-1 font-bold'>Overview</div>
                    <label className='text-sm'>{overview}</label>
                </>
            )}
        </div>
    </div>
  )
}

export default RecommededMoviesCard