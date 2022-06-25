import React from 'react'
import whatsappimg from "../images/whatsappimg.jpg";

function WhiteBlock() {
  return (
    <div  className='bg-white '>
        <div className='mx-auto max-w-[1440px] py-[96px] px-[88px]'>
         <div className='max-w-[95%] flex flex-row mx-auto'>
           <h2 className='text-center text-5xl mb-4 font-medium text-[#1c1e21]'>
           WhatsApp Business enables small to large businesses everywhere the power to 
           <u >turn customer connections</u>
           into loyalty that 
           <u>impacts their bottom line</u>
           </h2>
         </div>

        </div>
        <div className='h-[88px]'></div>
        <div className='max-w-[95%] flex flex-row mx-auto gap-8'>
           <div className='w-1/2 text-center flex items-center'>
            <img src={whatsappimg} alt="" />
           </div>
           <div className='w-1/2 text-left '>
            <div className='bg-transparent px-8'>
             <h2 className='text-[#43CD66] text-3xl mb-3'>______</h2>
             <div>
                <h2 className='text-5xl mb-4'>You’re in good company</h2>
                <p className='text-[#526571] font-normal text-lg'>Read more about how WhatsApp Business products are helping businesses build better relationships to accelerate their growth. </p>
             </div>
             
            </div>
           </div>
        </div>

    </div>
  )
}

export default WhiteBlock