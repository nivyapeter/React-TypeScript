import React from 'react'
import logo from '../Assets/logo.png';
import { ReactComponent as LogoText } from '../Assets/firefox-wordmark.svg';

function Search() {
  return (
    <div className='px-6 pt-[34px] pb-[38px]'>
      <div className='flex items-center justify-center mb-12'>
        <div className='w-[82px] h-[82px] inline-block'>
            <img src={logo} alt="logoimg" />
        </div>
        <div className='h-[82px] w-[134px] ml-4'>
           <LogoText />
        </div>
      </div>
      <div className='w-[720px] mx-auto'>
        <button className='bg-white shadow-3xl w-full rounded-lg'>
<div className='opacity-50 text-start text-base'>Search with Google or enter address</div>
<input className='text-transparent h-full absolute opacity-0' type="search" />
        </button>
      </div>
    </div>
  )
}

export default Search