import React from 'react'
import { buildItems } from '../type'


type BuildProps ={
   data: buildItems []
}

function Build({data}:BuildProps) {
  
  return (
    <div className='relative from-gray-50 to-gray-100 '>
      {data.map((data)=> {
        console.log(data.image);
        return (
          <div className='px-4 py-16  sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 shadow-2xl mx-4'>
            <img className='text-gray-400' src={data.image} alt="" />
            <h2 className='text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl lg:text-center dark:text-white'>{data.title}</h2>
            <p className='mx-auto mt-4 text-lg font-medium text-gray-400 lg:max-w-3xl lg:text-xl lg:text-center'>{data.subTitle}</p>
        </div>

        )
      })}
        
    </div>
  )
}

export default Build