import React from 'react'
import { ReactComponent as ButtonImg } from "../Assets/buttonasset.svg";


type BannerProps = {
    heading:string,
    text:string,
    subText:string,
    buttonText:string,
    buttonTextTwo:string


}

function Banner(props :BannerProps)  {
  return (
    <div className='pt-16 pb-8 px-4 mx-auto'>
        <h1 className='max-w-5xl text-center mx-auto text-6xl font-extrabold tracking-tighter leading-[1.1] sm:text-7xl lg:text-8xl xl:text-8xl'>
        Monorepos that
        <br className='hidden lg:block'></br>
        <span className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 '>make ship happen.</span>
        </h1>
         <p className='mt-6 leading-5 font-medium texl-xl text-center mx-auto max-w-lg '>{props.subText}</p>
         <div className='max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8'>
            <div className='rounded-md  '>
                <a  className='flex items-center justify-center w-full px-8 py-3 text-base bg-white font-medium text-black no-underline  border border-transparent rounded-md  betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6' href="">{props.buttonText}</a>


            </div>
            <div className='relative mt-3 rounded-md sm:mt-0 sm:ml-3'>
                <button className='flex items-center justify-center w-full px-8 py-3 font-mono text-sm font-medium text-gray-600 bg-black border border-transparent border-gray-200 rounded-md bg-opacity-5 dark:bg-white dark:text-gray-300 dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-gray-900 md:py-3 md:text-base md:leading-6 md:px-10'>
                  {props.buttonTextTwo}
                 <ButtonImg className='ml-2 w-6 h-6 -mr-3 text-gray-400' />
                </button>

            </div>
         </div>
    </div>
  )
}

export default Banner