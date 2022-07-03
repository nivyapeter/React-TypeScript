import React from 'react'
import { Privacydata } from '../types'

type PrivacyProps = {
    text:string,
    data:Privacydata[],
}

function PrivacyBlock({text,data}:PrivacyProps) {
  return (
    <div>
        <div className="hidden md:block text-base font-bold text-[#353748] ">{text}</div>
        <div className="flex min-h-[322px] justify-center mt-7 ma-auto px-10">
          <div className="lg:flex justify-center max-w-[1140px] min-h-[322px] w-full z-30 relative hidden ">
           {data.map((data)=> {
            return (
              <div className="w-[322px] min-h-[322px] flex flex-col items-center mx-3 p-6 bg-[#fff] rounded-2xl">
              <img className='w-auto mt-5 mr-5 mb-8 ml-8 min-h-[72px] max-h-[72px]' src={data.image} alt="image" />
              <p className="mb-1 font-extrabold text-xl">{data.title}</p>
              <div className="text-base leading-6 font-normal text-[#353748]">
              {data.subTitle}
                <a className="text-[#678FFF] font-semibold " href="">{data.linkText}</a>
              </div>
            </div>
            )
           })}
           
          </div>
          <div className=" lg:-translate-y-20 absolute w-[100vw] bottom-[-2px] lg:bottom-[-32px] xl:bottom-[-462px] 2xl:bottom-[-149px] text-[#E37151] -z-1 hidden lg:block">
          <svg className="content-info__curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1438 134"><path d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z" fill="currentColor"></path></svg>
          </div>
        </div>
          
    </div>
  )
}

export default PrivacyBlock