import React, { useState, useSyncExternalStore } from "react";
import { customerConnectionData } from "../type";

type whiteBlockProps ={
  data:customerConnectionData[]
}

function WhiteBlock({data}:whiteBlockProps) {


  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-[1440px] py-[96px] px-[88px]">
        <div className="max-w-[95%] flex flex-row mx-auto">
          <h2 className="text-center text-5xl mb-4 font-medium text-[#1c1e21]">
            WhatsApp Business enables small to large businesses everywhere the
            power to
            <u>turn customer connections</u>
            into loyalty that
            <u>impacts their bottom line</u>
          </h2>
        </div>
        <div className="h-[88px]"></div>
        <div className="max-w-[95%] flex flex-col mx-auto gap-8">
         {data.map((data)=> {
          return (
            <div className={`flex flex-row items-center ${data.reverse && "flex-row-reverse"}`}>
              <div className="w-1/2 text-center flex items-center">
                <img className="max-w-[95%] rounded-2xl" src={data.img} alt="" />
              </div>
              <div className="w-1/2 text-left ">
                    <h2 className="bg-transparent px-8 text-[#43CD66] text-3xl mb-3">______</h2>
                    <h2 className="text-5xl mb-4">{data.title}</h2>
                    <p className="text-[#526571] font-normal text-lg">
                    {data.subTitle}
                    </p>
                 
                  <a className="text-base  stroke-[#43cd66] pt-2 flex flex-row items-center" href="">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="_a83i _9u4c pr-2"><circle cx="16" cy="16" r="11.6528" stroke-width="0.694444"></circle><path d="M18.6809 16.4802L11.6797 16.4802V15.5202L18.6808 15.5202L15.1803 12.0196L15.8591 11.3408L20.5185 16.0002L15.8591 20.6596L15.1803 19.9808L18.6809 16.4802Z"></path></svg>
                    {data.arrowTitleOne}
                  </a>
                  <a className={`text-base pr-2 stroke-[#43cd66] flex flex-row items-center ${data.status? "block" : "hidden"}`} href="">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="_a83i _9u4c pr-2"><circle cx="16" cy="16" r="11.6528" stroke-width="0.694444"></circle><path d="M18.6809 16.4802L11.6797 16.4802V15.5202L18.6808 15.5202L15.1803 12.0196L15.8591 11.3408L20.5185 16.0002L15.8591 20.6596L15.1803 19.9808L18.6809 16.4802Z"></path></svg>
                    {data.arrowTitleTwo}
                  </a>
                  </div>
          </div>
          )
         })}
        </div>


      </div>
    </div>
  );
}

export default WhiteBlock;
