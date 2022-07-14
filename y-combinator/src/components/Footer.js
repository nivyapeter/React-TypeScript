import React from 'react'

function Footer() {
  return (
    <>
			<div className="w-full">
				<div className="w-[100%] lg:w-[85%] 2xlw-[100%] m-auto  bg-[#f6f6ef]">
					<div className="flex flex-row justify-center border-t-[1px] border-[#ff6600] list-none p-4 text-[10px] whitespace-nowrap">
						<li className="text-[#828282] text-[10px]">Guidelines |</li>
						<li className="px-[2px]">FAQ |</li>
						<li className="px-[2px]">Lists |</li>
						<li className="px-[2px]">API |</li>
						<li className="px-[2px]">Security |</li>
						<li className="px-[2px]">Legal |</li>
						<li className="px-[2px]">Apply to YC |</li>
						<li className="px-[2px]">Contact</li>
					</div>
					<div className="flex sm:flex-row justify-center items-center flex-col p-2">
						<span className="text-[13px] text-[#828282]">Search:</span>
						<input
							className="ml-1 border-2 border-black p-[1px] sm:w-[20%] w-[75%]"
							type="text"
							placeholder=""
						></input>
					</div>
				</div>
			</div>
		</>
  )
}

export default Footer