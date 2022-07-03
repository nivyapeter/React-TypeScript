import React from 'react'
import Accordion from './Accordion'
const accordionData = [{
  question:"How can I help You?",
  answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit  Mollitia venia"
},
{
  question:"How can I help You?",
  answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit  Mollitia venia"
},
{
  question:"How can I help You?",
  answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit  Mollitia venia"
},
{
  question:"How can I help You?",
  answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit  Mollitia venia"
},
]

function Question() {
  return (
    <div className="max-w-[780px] mx-auto mt-[100px] mb-10 hidden lg:block ">
        <h2 className="my-12 p-0 text-center text-3xl font-extrabold text-[#353748]"></h2>
        <div className="px-5">
        
           <Accordion  data = {accordionData}/>
      
        </div>
    </div>
  )
}

export default Question
