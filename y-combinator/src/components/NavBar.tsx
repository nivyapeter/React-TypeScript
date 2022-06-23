import React from 'react'
import y18 from "../images/y18.gif";
import { Navdata } from '../types';

type NavBarProps ={
    data: Navdata[]
}

function NavBar({data}:NavBarProps) {
  return (
    <div className='bg-[#ff6600] text-[#828282] text-[10px] '>
        <div className='p-[2px] '>
            <div className='flex fex-row items-center justify-between text-sm'>
                <div className='flex items-center justify-start text-sm'>
                <div className='w-[18px] pr-1'>
                    <img className='border-1 border-white' src={y18} alt="" />
                </div>
                <div className=''>
                     <span className='text-[#222222] leading-3'>
                        {data.map((data)=> {
                             return (
                                <a className='px-1' href="">
                                    {data.name} {data.icon}
                                </a>
                            )
                        })}
                     </span>
                </div>
                </div>
                <div className='text-right pr-1'>
                    <a href="">Log in</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar