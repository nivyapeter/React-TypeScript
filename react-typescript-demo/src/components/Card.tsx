import React from 'react'
import budget12 from "../image/budget12.jpg";
import img2 from "../image/img2.png";

type Cards = {
    text:string,
    heading:string,
    linkText:string,
    subText:string,
    class?:string
}

function Card(props:Cards) {
  return (
    <div className="px-[15px] max-w-[1360px] ">
        <div className="bg-[#fff] mb-[1.5em] shadow-2xl rounded-lg p-[15px] w-[20vw] m-auto">
            <div>
                <a href="">
                    <img src={budget12} alt="image" />
                </a>
            </div>
            <div className="px-[15px] pb-[15px] text-center ">
                <a href="">
                    <img className="w-3/5 max-w-full m-auto mt-4" src={img2} alt="image" />
                </a>
                <h2 className="uppercase text-[#db831e] text-center mb-2">{props.heading}</h2>
                <p>
                    <span>{props.text}</span>
                    <a className="text-[#db831e] " href="">{props.linkText}</a>
                </p>
            </div>
            <div>
                <h2 className="text-center font-bold ">
                    <a className="uppercase text-[#db831e] text-center mb-4 underline w-[20vw] m-auto" href="">{props.subText}</a>
                </h2>
            </div>
        </div>

    </div>
  )
}

export default Card