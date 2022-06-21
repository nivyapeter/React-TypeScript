import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";


type HeadeProps = {
    icon?:any,
    source?: any,
}

function Header(props:HeadeProps) {
  return (
    <div className="max-w-[1400px] px-6 mx-auto h-auto text-[#222]">
        <div className="mt-5 flex items-center justify-end static">
        <div className="text-[#aaa] ml-6 whitespace-nowrap z-auto leading-normal">
            <span className="text-2xl cursor-pointer"></span>
            <span className="ml-[5px] cursor-pointer">
                <BiChevronDown />
            </span>
        </div>
            <a className="static mr-[-8px] p-2 ml-5 float-right z-10" href="">
                <GiHamburgerMenu />
            </a>
        </div>

    </div>
  )
}

export default Header