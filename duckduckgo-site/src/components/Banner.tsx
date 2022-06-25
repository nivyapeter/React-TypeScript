import React from 'react'
import duckLogo from "../images/duckLogo.svg";
import Search from './Search';

function Banner() {
  return (
    <div>
        <div className="flex items-center mt-3 mb-10 justify-center">
            <a href="">
                <img className="w-[200px] h-[162px] bg-no-repeat bg-center " src={duckLogo} alt="" />
            </a>
        </div>
        <Search />
    </div>
  )
}

export default Banner