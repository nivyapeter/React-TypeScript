import { title } from "process";
import React from "react";
import grayarrow from "../images/grayarrow.gif";
import { Newsdata } from "../types";

type NewsBlockProps = {
  data: Newsdata[];
};

function NewsBlock({ data }: NewsBlockProps) {
  return (
    <div className="flex flex-row">
        <div>
            
      <div className="flex flex-row items-baseline ">
        <span className="text-[#828282] m-1">
          <span></span>
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
            ,m,nksdcsjksj kjckdshcksncskk ksndkc
          </a>
          <a
            className="text-[10px] text-[#828282] font-sans hover:underline"
            href="/"
          >
            ( xbxmbcxmbc)
          </a>
        </div>
        <div className="text-xs text-[#828282]">
          <span className="pr-1">54 points by</span>
          <a href="/">mnbdjqhdj</a>
          <a className="p-1" href="/">
            6 hours ago
          </a>
          <span className="p-1">|</span>
          <span className="p-1">hide</span>

          <span>|75 comments</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default NewsBlock;
