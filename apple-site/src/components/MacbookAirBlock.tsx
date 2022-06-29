import React from 'react'
import whiteImg from "../Images/whiteImg.png";

type MacBookProps = {
    // style: React.CSSProperties,
    title:string,
    sub:string,
    text:string,
    linkText: string,
    buyText:string
}

function MacbookAirBlock({title,sub,text,linkText,buyText}:MacBookProps) {
  return (
    <div  className='bg-[#fbfbfd] overflow-hidden flex-col flex'>
        <div className='absolute top-[17rem] left-[44rem] text-center'>
           <h2 className='mt-[7px] text-4xl font-semibold text-[#1d1d1f]'>{title}</h2>
           <h3 className='mt-[12px] text-3xl font-normal'>
            <span>{sub}</span>
           </h3>
           <p className='text-[#86868b] mt-3 text-[21px]'>{text}</p>
           <div className='mt-2 text-[21px] font-normal'>
            <a className='text-[#06c]' href="">
                {linkText}
            </a>
            <a className='ml-[35px] text-[#06c]' href="">
                {buyText}
            </a>
           </div>
        </div>
        <div>
            {/* <figure style={style}></figure> */}
            <img className='h-[500px]' src={whiteImg} alt="" />
        </div>

    </div>
  )
}

export default MacbookAirBlock