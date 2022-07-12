import React from 'react'
import grid1 from "../Images/grid1.jpg"

function GridSection() {
  return (
    <div className='z-40 h-[580px] flex flex-row items-center justify-between'>
        <div className='bg-[#161617] flex flex-col overflow-hidden'>
         <a className='text-[#2997ff] absolute top-0 left-0 w-full h-full' href=""></a>
         <div className='relative'>
           <h2 className='mt-[62px] text-[40px] font-semibold w-[88%] max-w-[430px] text-[#f5f5f7]'>iPad Air</h2>
            <h5 className='t-[2px] text-[21px] w-[88%] max-w-[430px] text-[#f5f5f7]'></h5>
            <div>
                <a className='text-center text-[#2997ff]' href=""></a>
                <a className='ml-[28px] text-center text-[#2997ff]' href=""></a>
            </div>
         </div>
         <div className='absolute'>
            <img src={grid1} alt="" />
         </div>
        </div>
        <div className='bg-[#161617] flex flex-col overflow-hidden'>
         <a className='text-[#2997ff] absolute top-0 left-0 w-full h-full' href=""></a>
         <div className='relative'>
           <h2 className='mt-[62px] text-[40px] font-semibold w-[88%] max-w-[430px] text-[#f5f5f7]'>iPad Air</h2>
            <h5 className='t-[2px] text-[21px] w-[88%] max-w-[430px] text-[#f5f5f7]'></h5>
            <div>
                <a className='text-center text-[#2997ff]' href=""></a>
                <a className='ml-[28px] text-center text-[#2997ff]' href=""></a>
            </div>
         </div>
         <div className='absolute'>
            <img src={grid1} alt="" />
         </div>
        </div>

    </div>
  )
}

export default GridSection