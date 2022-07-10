import React from 'react'
import { buildItems } from '../type'


type BuildProps ={
   data: buildItems []
}

function Build({data}:BuildProps) {
  
  return (
   <div className='px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24'>
    <h2 className='text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl lg:text-center dark:text-white'>Build like the best</h2>
    <p className='mx-auto mt-4 text-lg font-medium text-gray-400 lg:max-w-3xl lg:text-xl lg:text-center'>Turborepo reimagines build system techniques used by Facebook and Google to remove maintenance burden and overhead.</p>
    <div className='grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12'>
     {data.map((data)=> {
       console.log(data.image);
     return (
        <div className='bg-[#F9FAFB1A] p-10  shadow-lg rounded-xl dark:bg-opacity-5 '>
         <img className='h-8 w-8 rounded-full p-1.5 dark:text-white bg-white bg-opacity-5 text-white' src={data.image} alt="" />
          <h2 className='text-lg font-medium dark:text-white'>{data.title}</h2>
          <p className='mt-2 text-base font-medium text-gray-500 dark:text-gray-400'>{data.subTitle}</p>
       </div>

       )
    })}

    </div>
   </div>
  )
}

export default Build