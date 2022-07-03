import React from 'react'

type BuildProps ={
    title :string,
    subTitle:string

}

function Build(props:BuildProps) {
  return (
    <div className='relative from-gray-50 to-gray-100 '>
        <div className='px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24'>
            <h2 className='text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl lg:text-center dark:text-white'>{props.title}</h2>
            <p className='mx-auto mt-4 text-lg font-medium text-gray-400 lg:max-w-3xl lg:text-xl lg:text-center'>{props.subTitle}</p>
        </div>

    </div>
  )
}

export default Build