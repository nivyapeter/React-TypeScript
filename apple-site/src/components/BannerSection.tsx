import React from 'react'


type BannerProps = {
    style:React.CSSProperties
}

function BannerSection({style}:BannerProps) {
  return (
    <div>
        <div className='pt-[47px] '>
           <h2 className='text-[56px] font-semibold'></h2>
           <h3 className='text-[28px]  font-normal'>
            <span>Supercharged by Apple M2 chip</span>
           </h3>
           <div className='text-[21px] mt-3'>
             <a className='#2997ff]' href="">Learn more</a>
             <a  className="ml-9 text-[#2997ff]"href="">Buy</a>
           </div>
        </div>
        <div className='' style={style}>

        </div>
    </div>
  )
}

export default BannerSection