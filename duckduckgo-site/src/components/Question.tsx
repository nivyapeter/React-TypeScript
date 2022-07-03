import React from 'react'
import Accordion from './Accordion'
const accordionData = [{
  question:"where is the entomo application available, and is it reliable??",
  answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit  Mollitia venia"
},
{
  question:"where is the entomo application available, and is it reliable??",
  answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit  Mollitia venia"
},
{
  question:"where is the entomo application available, and is it reliable??",
  answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit  Mollitia venia"
},
{
  question:"where is the entomo application available, and is it reliable??",
  answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit  Mollitia venia"
},
]

function Question() {
  return (
    <div className="max-w-[780px] mx-auto mt-[100px] mb-10 hidden lg:block ">
        <h2 className="my-12 p-0 text-center text-3xl font-extrabold text-[#353748]"></h2>
        <div className="px-5">
        {accordionData.map(({ question, answer }) => (
          <Accordion question={question} answer={answer} />
        ))}
      
        </div>
    </div>
  )
}

export default Question
