import React from 'react'
import uiversity from "../Images/uiversity.jpg";

function UniversityBlock() {
  return (
    <div className='relative'>
        <div className='relative bg-[#fbfbfd] '>
          <a  className="absolute top-0 left-0 w-full h-screen" href=""></a>
          <div className=' text-center pt-[47px] z-40 absolute top-0 left-0 w-full'>
            <h2 className='font-bold italic text-[56px]'>
            Get 

            <span className='text-[#ca2166]'>
            supercharged
            </span>

            for university.
            </h2>
            <h3 className='text-[21px] mt-[6px]'> Save on Mac or iPad. Plus get AirPods on us.
            <sup>
                <a href="">1</a>
                </sup></h3>
                <div>
                    <a className='text-[#0066cc]' href="">Shop Now</a>
                </div>
          </div>
          <div className=' top-0 left-0'>
            <img className='h-[527px]' src={uiversity} alt="" />
          </div>
        </div>

    </div>
  )
}

export default UniversityBlock