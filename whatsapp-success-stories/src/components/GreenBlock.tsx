import React from 'react'

function GreenBlock() {
  return (
    <div className='mx-auto max-w-[1440px] lg:py-[96px] lg:px-[88px] px-[29px] '>
        <div className='lg:max-w-[95%] lg:py-20 lg:px-14  py-[32px] px-[56px] bg-[#103928] rounded-2xl '>
          <h2 className='text-[#43CD66] lg:text-4xl text-[36px] mb-3 pt-4 pb-2 '>Take the next step</h2>
          <p className='text-[#FFFFFF] lg:text-lg text-[18px] px-4 pb-2 my-4'>See how you can succeed with WhatsApp Business products.</p>
          <div className='flex flex-row justify-center items-center my-5'>
              <a className='bg-[#43cd66] text-[#103928] whitespace-nowrap py-4 px-16 m-0 text-base h-[min-content] rounded-3xl items-center' href="">Learn more</a>
            </div>
        </div>
    </div>
  )
}

export default GreenBlock