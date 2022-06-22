import React from 'react'
import Button from './Button'
import duckimg from "../images/duckimg.svg";

type PersonalProp = {
    title: string,
    subTitle: string
}


function PersonalInfo({title,subTitle}:PersonalProp) {
  return (
    <div className="bg-[#E37151] h-auto text-center pt-8 hidden lg:block ">
        <div className="w-[80%] max-w-[700px] mx-auto text-[#ffff] ">
            <h1 className="mt-4 mb-4 text-[44px] leading-10 font-extrabold">{title}</h1>
            <p className="text-xl leading-7 py-1">{subTitle}</p>
            <div>
            <Button  text="Add DuckDuckGo to Chrome" link="https://duckduckgo.com/install?t=h_" class="bg-[#00000066] px-3 mt-5 mb-4 text-base m-auto  h-[43px] text-white flex justify-center whitespace-normal rounded-md items-center font-bold"/>
            </div>
        </div>
        <div className="static h-auto overflow-hidden bottom-0 left-0 right-0 w-full">
            <img className="max-w-[890px] top-[8px] h-auto m-auto bottom-auto left-auto right-auto" src={duckimg} alt="duck img" />
        </div>
    </div>
  )
}

export default PersonalInfo