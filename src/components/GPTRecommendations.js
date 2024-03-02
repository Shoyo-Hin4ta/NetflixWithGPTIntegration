import React from 'react'
import { BACKGROUND } from '../utils/constants';

const GPTRecommendations = () => {
  return (

      <>

      <div className='h-full flex items-center justify-center'>
          <img alt="background" src={BACKGROUND} />
          <div className='absolute w-3/5 top-2/5'>
      
              <form className='bg-red-600 p-4 m-2 flex justify-between'>
                <input placeholder='What are we feeling today ?' className='p-2 w-10/12 text-2xl mr-2 rounded-md' /> 
                <button className='p-2 text-2xl text-white bg-black w-2/12 rounded-md'>Recommend</button>
              </form>

            
          </div>
      </div>

      </>
    
  )
}

export default GPTRecommendations;