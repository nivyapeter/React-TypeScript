import React from 'react'

function Search() {
  return (
    <div className="flex items-center justify-center m-auto">
      <div className="xl:w-[55rem] md:w-[33rem] ">
        <div className="flex md:pb-1 items-center border-2 border-gray focus-within:border-2  w-[48vw] bg-white m-auto max-w-[665px]">
          <div className="w-[96.6%]">
            <input
              type="search"
              className="  placeholder-gray-400 text-left   focus:outline-none font-medium relative flex-auto  min-w-0 block w-full py-[2px] px-3 md:py-1.5 text-base text-white  "
              placeholder="Search the web without being tracked"
            />
          </div>
          <div className="text-white font-bold pr-2 ">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="gray" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
          </div>
        </div>  
      </div>
    </div>
  )
}


export default Search