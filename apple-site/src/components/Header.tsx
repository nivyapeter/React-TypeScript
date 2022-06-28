import React from 'react'
import AiFillApple from "react-icons/ai";

function Header() {
  return (
    <div className='bg-[#000000]'> 
    <div className='mx-auto max-w-[980px] px-[22px] text-[#f5f5f7] text-xs '>
        <ul className='flex mx-[-8px] h-[44px] items-center justify-between'>
            <li>
                <a className='px-2 text-[#f5f5f7] opacity-80' href="">
                   {/* <DiApple/> */}
                </a>
            </li>
            <li>
                <a href="">Store</a>
            </li>
            <li>
                <a href="">Mac</a>
            </li>
            <li>
                <a href="">iPad</a>
            </li>
            <li>
                <a href="">iPhone</a>
            </li>
            <li>
                <a href="">Watch</a>
            </li>
            <li>
                <a href="">AirPods</a>
            </li>
            <li>
                <a href="">TV & Home</a>
            </li>
            <li>
                <a href="">Only on AppleAccessories</a>
            </li>
            <li>
                <a href="">Accessories</a>
            </li>
            <li>
                <a href="">Support</a>
            </li>
            <li>
                <a href="">
                    <span></span>
                </a>
            </li>
            <li>
                <div>
                    <a href="">
                        <span></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Header