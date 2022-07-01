import React from 'react'

function SuccessStoryBanner() {
  return (
    <div className='bg-[#103928] overflow-x-hidden'>
        <div className='mx-auto max-w-[1440px] lg:py-[96px]  py-[56px] lg:px-[88px] 2xl:px-[58px] px-[20px]'>
            <div className='max-w-[95%] flex flex-row mx-auto items-center justify-between 2xl:max-w-none'>
                <div className='lg:w-[58.33%] w-4/5 text-left justify-start flex-col flex-wrap'>
                    <div className='bg-transparent'>
                       <h1 className='text-[#43CD66] lg:text-[56px] text-[40px] mb-4'>Success Stories</h1>
                       <p className='text-[#fff] text-lg font-norma l'>See how companies of all sizes, from various industries are finding success with WhatsApp Business products.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SuccessStoryBanner