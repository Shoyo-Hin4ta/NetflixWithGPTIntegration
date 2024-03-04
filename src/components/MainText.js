import React from 'react'

const MainText = ({title, desc}) => {
  // console.log(title, desc);
  return (
    <div className='flex flex-col items-center w-1/3 mx-14  absolute bg-black bg-opacity-0 bottom-1/3'>

      <div>
        <h1 className='text-6xl mb-8 text-white'>{title}</h1>
        <p className='mb-8 text-white'> {desc} </p>
        <div className='flex md:'>
          <button className='p-1 mr-2 md:px-6 md:py-2 bg-white rounded-lg text-lg hover:opacity-80'> ▶️ Play</button>
          <button className='p-1 text-white md:px-6 md:py-2 bg-black opacity-90 rounded-lg text-lg hover:cursor-pointer'> More Info</button>
        </div>
      </div>
      
    </div>
  )
}

export default MainText