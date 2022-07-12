import React from 'react'
import footerImg from "../images/footerImg.png"

function Footer() {
  return (
    <div className='mx-auto flex lg:flex-row  flex-col w-full pt-[56px]'>
        <div className='bg-[#43CD66] w-full'>
            <div className='lg:p-14 p-9'>
                <div className='max-w-[1440px] lg:flex-row flex-col my-0 mx-auto flex justify-between lg:items-center items-start gap-8 lg:gap-0'>
                    <div className='lg:w-1/6 text-left  flex flex-wrap justify-start items-start'>
                     <img className= "w-[200px]" src={footerImg} alt="img" />
                    </div>
                    <div className='lg:w-2/3 text-center flex lg:flex-row flex-col justify-center'>
                      <div className='flex justify-evenly items-start lg:gap-8  gap-4 lg:flex-row flex-col'>
                          <a className='mr-4 text-base' href="">Trust & Safety</a>
                          <a className='mr-4 text-base' href="">Become a Partner</a>
                          <a className='mr-4 text-base' href="">Help</a>
                          <a className='mr-4 text-base' href="">Terms and Conditions</a>
                          <a className='mr-4 text-base' href="">Data Policy</a>
                      </div>
                    </div>
                    <div className='lg:w-1/6 text-center '>
                        <p className='text-[#222222] my-2 text-base font-normal text-right'>2022 © WhatsApp Business</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer