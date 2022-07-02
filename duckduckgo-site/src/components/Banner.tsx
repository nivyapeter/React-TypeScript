import React from 'react'
import duckLogo from "../images/duckLogo.svg";
import Button from './Button';
import Search from './Search';
import {AiFillHeart} from "react-icons/ai";

type BannerProps = {
    heading: string,
    text:string,
    subText:string,

}

function Banner(props:BannerProps) {
  return (
    <div>
        <div className="flex items-center mt-3 mb-10 justify-center">
            <a href="">
                <img className="w-[200px] h-[162px] bg-no-repeat bg-center " src={duckLogo} alt="" />
            </a>
        </div>
        <Search />

        <div className="block lg:hidden">
            <div className="text-center text-[#9a9a9a] flex items-center flex-row justify-center pt-2">
                <p>Privacy, simplified. </p>
            <span className="flex items-center justify-center">
                <AiFillHeart className="fill-orange-400" />
                <a className="underline" href="">Help Spread DuckDuckGo!</a>
            </span>
            </div>
        </div>
        <div className=" hidden lg:flex mx-auto mt-7 m-12 max-w-[1140px] text-center justify-center px-10">
            <div>
                <h1 className="font-extrabold text-[#353748] pb-[5px] text-3xl text-center">{props.heading}</h1>
                <p className="text-base font-normal max-w-[530px] text-[#353748] mx-auto ">{props.text}</p>
                <Button  text="Add DuckDuckGo to Chrome" link="https://duckduckgo.com/install?t=h_" class="bg-[#678fff] px-3 mt-5 mb-4 text-base m-auto  h-[43px] text-white flex justify-center whitespace-normal rounded-md items-center font-bold"/>
                <span className="text-sm text-[#333] font-bold mt-3 mx-auto ">{props.subText}</span>
            </div>
        </div>

    </div>
  )
}

export default Banner