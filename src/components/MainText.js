import React from 'react'

const MainText = ({title, desc}) => {
  // console.log(title, desc);
  return (
    <div className='flex flex-col items-center w-1/3 mx-14  absolute bg-black bg-opacity-0 bottom-1/3'>

      <div>
        <h1 className='text-6xl mb-8 text-white'>{title}</h1>
        <p className='mb-8 text-white'> {desc} </p>
        <div>
          <button className='mr-2 px-6 py-2 bg-white rounded-lg text-lg hover:opacity-80'> ▶️ Play</button>
          <button className='text-white px-6 py-2 bg-black opacity-90 rounded-lg text-lg hover:cursor-pointer'> More Info</button>
        </div>
      </div>
      
    </div>
  )
}

export default MainText