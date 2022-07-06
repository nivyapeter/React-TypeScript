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
         <p className='mt-6 leading-5 font-medium texl-xl text-center mx-auto max-w-lg'>{props.subText}</p>
         <div className='mt-5 mx-auto max-w-xl'>
            <div className='rounded-md '>
                <a  className='text-black bg-white font-medium text-base border-transparentborder justify-center items-center w-full flex px-8 py-3' href="">{props.buttonText}</a>


            </div>
            <div className='rounded-md relative mt-3'>
                <button className='text-gray-300 border-gray-700 bg-opacity-5 bg-white font-medium text-sm  border justify-center items-center w-full flex '>
                  {props.buttonTextTwo}
                 <ButtonImg className='ml-2 w-6 h-6 -mr-3 text-gray-400' />
                </button>

            </div>
         </div>
    </div>
  )
}

export default Banner