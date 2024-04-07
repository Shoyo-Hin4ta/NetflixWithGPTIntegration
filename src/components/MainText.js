import React from 'react'

const MainText = ({title, desc}) => {
  // console.log(title, desc);
  return (
    <div className='ml-4 sm:ml-6 flex flex-col items-center sm:w-1/3 sm:mx-14  absolute bg-black bg-opacity-0 bottom-0 mb-10 sm:mb-0 sm:bottom-1/3  w-1/2 h-1/2  overflow-y-scroll z-10'>

      <div className='sm:visible'>
        <h1 className='sm:text-6xl sm:mb-8 mb-4 text-white text-xs font-extrabold'>{title}</h1>
        <p className='mb-8 sm:text-base text-white text-xs'> {desc} </p>
        <div className='flex '>
          <button className='p-1 mr-2 md:px-6 md:py-2 bg-white rounded-lg text-sm sm:text-lg hover:opacity-80'> ▶️ Play</button>
          <button className='p-1 text-white md:px-6 md:py-2 bg-black opacity-90 text-sm rounded-lg sm:text-lg hover:cursor-pointer'> More Info</button>
        </div>
      </div>
      
    </div>
  )
}

export default MainText