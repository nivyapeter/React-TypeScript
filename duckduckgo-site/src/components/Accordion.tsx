import React, { useState } from 'react'
import { Tracing } from 'trace_events';
import { Accordiondata } from '../types';

type AccordionProps = {
  question: string,
  answer:string

}
function Accordion({question,answer}:AccordionProps) {

    const [isActive, setIsActive] = useState(false);

  return (
  <div className="border-1 border-[#e5e5e5] pl-[50px] "  onClick={() => setIsActive(!isActive)}>
    <div>
          <div className="cursor-pointer py-6 relative text-left ">
              <button className="absolute top-[27px] left-[-50px] ">
               {!isActive ? <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10.5" r="10" transform="rotate(-180 10 10.5)" fill="#E5E5E5"></circle><path d="M9.94454 12.8483L13.5355 9.25736C13.7308 9.0621 14.0474 9.0621 14.2426 9.25736C14.4379 9.45262 14.4379 9.7692 14.2426 9.96447L10.3536 13.8536C10.2418 13.9653 10.0903 14.0131 9.94454 13.9969C9.79879 14.0131 9.64729 13.9653 9.53553 13.8536L5.64645 9.96447C5.45118 9.7692 5.45118 9.45262 5.64645 9.25736C5.84171 9.0621 6.15829 9.0621 6.35355 9.25736L9.94454 12.8483Z" fill="#353748"></path></svg> : "+"}

              </button>
              <h3 className="text-[21px] text-[#353748] font-semibold leading-6">{question}</h3>
          </div>
          {isActive && <div className="pb-[25px] text-[#353748] text-base text-left">
                <p className="py-1">{answer}</p>
                <a  className="text-[#678FFF]"href="">Learn More</a>

          </div>}
    
    </div>
    
  </div>
  )
}

export default Accordion
