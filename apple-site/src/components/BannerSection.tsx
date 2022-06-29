import React from "react";

type BannerProps = {
  // style: React.CSSProperties;
  title: string,
  subTitle: string,
  linkText: string,
  text:string,
  img: string
};

function BannerSection({title,subTitle,linkText,text,img }: BannerProps) {
  return (
    <div>
      <div className=" ">
        <div className="text-white bg-black pt-12">
          <h2 className="text-[56px] font-semibold">{title}</h2>
          <h3 className="text-[28px]  font-normal">
            <span>{subTitle}</span>
          </h3>
          <div className="text-[21px] mt-3">
            <a className="text-[#2997ff] " href="">
              {linkText}
            </a>
            <a className="ml-9 " href="">
              {text}
            </a>
          </div>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default BannerSection;
