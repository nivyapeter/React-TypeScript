import React from 'react'

function Card() {
  return (
    <div className='grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12'>
      <div className='p-10 bg-white shadow-lg rounded-xl dark:bg-opacity-5 '>
        <div></div>
        <div className='mt-4'>
            <h2 className='text-lg font-medium dark:text-white'></h2>
            <p className='mt-2 text-base font-medium text-gray-500 dark:text-gray-400'></p>
        </div>
      </div>
    </div>
  )
}

export default Card