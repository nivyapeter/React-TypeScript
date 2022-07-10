import React from 'react'
import scalingImg from "../Assets/scalingImg.webp"
import scalingtext from "../Assets/scalingtext.png";

function ScalingBlock() {
  return (
    <>
    <div className='px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:pt-24 lg:px-8'>
        <h2 className='max-w-4xl mx-auto pb-6 text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl leading-[1.25!important] md:text-center dark:text-white'>Scaling your monorepo shouldn't be so difficult</h2>
        <div className='max-w-2xl mx-auto lg:mt-2 dark:text-gray-400'>
            <p className='mb-6 text-lg leading-normal text-current lg:text-xl'>Monorepos are incredible for productivity, especially on the frontend, but the tooling can be a nightmare. There's a lot of stuff to do (and things to mess up). Nothing “just works.” It's become completely normal to waste entire days or weeks on plumbing—tweaking configs, writing one-off scripts, and stitching stuff together.</p>
            <p className='mb-6 text-lg leading-normal text-current lg:text-xl'>We need something else.</p>
            <p className='mb-6 text-lg leading-normal text-current lg:text-xl'>A fresh take on the whole setup. Designed to glue everything together. A toolchain that works for you and not against you. With sensible defaults, but even better escape hatches. Built with the same techniques used by the big guys, but in a way that doesn't require PhD to learn or a staff to maintain.</p>
            <p className='mb-6 text-lg leading-normal text-current lg:text-xl '>
                <b className='relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500'>With Turborepo, we're doing just that.</b>
                We're abstracting the complex configuration needed for most monorepos into a single cohesive build system—giving you a world class development experience without the maintenance burden.
            </p>
        </div>


    <div className='flex items-center max-w-2xl py-4 mx-auto space-x-4'>
        <div className='mt-4 flex'>
            <span className='lg:w-[16vw] xl:w-[10vw] box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%'>
                <span className='box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%'>
                <img className='w-[21vw] rounded-full'  src={scalingImg} alt="scalingImage" />
                </span>
            </span>
            <div className='flex flex-col h-full space-y-3'>
                <div className='-mb-4 dark:hidden'>
                    <span className='box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%'>
                    <img className='w-[45vw] ml-8 lg:w-[24vw] xl:w-[15vw]' src={scalingtext} alt="" />
                    </span>
                    <div className='flex items-center justify-center w-[64vw] lg:justify-start'>
                        <a className='font-bold text-gray-400 no-underline' href="">Jared Palmer</a>
                        <div className='ml-2 text-gray-500'>Founder of Turborepo</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ScalingBlock