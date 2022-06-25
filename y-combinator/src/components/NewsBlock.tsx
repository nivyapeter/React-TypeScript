import { title } from "process";
import React from "react";
import grayarrow from "../images/grayarrow.gif";
import { Newsdata } from "../types";

type NewsBlockProps = {
  data: Newsdata[];
};

function NewsBlock({ data }: NewsBlockProps) {
  return (
    <div className="flex flex-col">
      {data.map((data)=> {
        return (
          <div className="flex flex-row">
            
      <div className="flex flex-row items-baseline ">
        <span className="text-[#828282] m-1">
          <span>{data.id}</span>
        </span>
        <img
          src="https://news.ycombinator.com/grayarrow2x.gif"
          alt=""
          className="text-[#828282] w-[10px] h-[10px] cursor-pointer"
        />
      </div>
      <div className="flex flex-col m-1">
        <div>
          <a className="text-[14px] font-sans" href="/">
          {data.title}
          </a>
          <a
            className="text-[10px] text-[#828282] font-sans hover:underline"
            href="/"
          >
            {data.website}
          </a>
        </div>
        <div className="text-xs text-[#828282]">
          <span className="pr-1">{data.points} points by</span>
          <a href="/">paulbaumgart</a>
          <a className="p-1" href="/">
            {data.time} hours ago
          </a>
          <span className="p-1">|</span>
          <span className="p-1">hide</span>

          <span>|{data.comments} comments</span>
        </div>
      </div>
      </div>

        )
      })}
       
    </div>
  );
}

export default NewsBlock;
