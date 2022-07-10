import React from "react";
import amazon from "../Assets/amazon.jpg";
import react from "../Assets/react.png";
import entomo from "../Assets/entomo.png";
import youtube from "../Assets/youtube.png";
import facebook from "../Assets/facebook.png";
import wikipedia from "../Assets/wikipedia.jpeg";
import reddit from "../Assets/reddit.jpeg";

function LogoCard() {
  return (
    <div>
      <div className="py-[10px] px-[25px] mb-5">
        <ul className="flex flex-row">
          <li className="w-[120px] pt-5 px-4 pb-1 rounded-lg">
            <div>
              <a href="">
                <div className="relative rounded-lg  bg-white shadow-2xl flex center mx-auto h-[80px] w-[80px] items-center text-3xl justify-center">
                  <div className="rounded-md w-[48px] h-[48px] overflow-hidden flex items-center justify-center">
                    <div
                      className="h-full w-full absolute rounded-md"
                      style={{
                        backgroundImage: `url(${amazon})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      {/* <img src={amazon} alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="pt-[8px] text-centerrelative">
                  <span>
                 Amazone
                    <span className="text-[0.9em] whitespace-nowrap block overflow-hidden text-ellipsis">
                      Sponsored
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </li>
          <li className="w-[120px] pt-5 px-4 pb-1 rounded-lg">
            <div>
              <a href="">
                <div className="relative rounded-lg  bg-white shadow-2xl flex center mx-auto h-[80px] w-[80px] items-center text-3xl justify-center">
                  <div className="rounded-md w-[48px] h-[48px] overflow-hidden flex items-center justify-center">
                    <div
                      className="h-full w-full absolute rounded-md"
                      style={{
                        backgroundImage: `url(${react})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      {/* <img src={amazon} alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="pt-[8px] text-centerrelative">
                  <span>
                  localhost
                    <span className="text-[0.9em] whitespace-nowrap block overflow-hidden text-ellipsis">
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </li>
          <li className="w-[120px] pt-5 px-4 pb-1 rounded-lg">
            <div>
              <a href="">
                <div className="relative rounded-lg  bg-white shadow-2xl flex center mx-auto h-[80px] w-[80px] items-center text-3xl justify-center">
                  <div className="rounded-md w-[48px] h-[48px] overflow-hidden flex items-center justify-center">
                    <div
                      className="h-full w-full absolute rounded-md"
                      style={{
                        backgroundImage: `url(${react})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      {/* <img src={amazon} alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="pt-[8px] text-centerrelative">
                  <span className="truncate ">
                  lorien-stud
                    <span className="text-[0.9em] whitespace-nowrap block overflow-hidden text-ellipsis">
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </li>
          <li className="w-[120px] pt-5 px-4 pb-1 rounded-lg">
            <div>
              <a href="">
                <div className="relative rounded-lg  bg-white shadow-2xl flex center mx-auto h-[80px] w-[80px] items-center text-3xl justify-center">
                  <div className="rounded-md w-[48px] h-[48px] overflow-hidden flex items-center justify-center">
                    <div
                      className="h-full w-full absolute rounded-md"
                      style={{
                        backgroundImage: `url(${entomo})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      {/* <img src={amazon} alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="pt-[8px] text-centerrelative">
                  <span>
                    Entomo
                    <span className="text-[0.9em] whitespace-nowrap block overflow-hidden text-ellipsis">
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </li>
          <li className="w-[120px] pt-5 px-4 pb-1 rounded-lg">
            <div>
              <a href="">
                <div className="relative rounded-lg  bg-white shadow-2xl flex center mx-auto h-[80px] w-[80px] items-center text-3xl justify-center">
                  <div className="rounded-md w-[48px] h-[48px] overflow-hidden flex items-center justify-center">
                    <div
                      className="h-full w-full absolute rounded-md"
                      style={{
                        backgroundImage: `url(${youtube})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      {/* <img src={amazon} alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="pt-[8px] text-centerrelative">
                  <span>
                  YouTube
                    <span className="text-[0.9em] whitespace-nowrap block overflow-hidden text-ellipsis">

                    </span>
                  </span>
                </div>
              </a>
            </div>
          </li>
          <li className="w-[120px] pt-5 px-4 pb-1 rounded-lg">
            <div>
              <a href="">
                <div className="relative rounded-lg  bg-white shadow-2xl flex center mx-auto h-[80px] w-[80px] items-center text-3xl justify-center">
                  <div className="rounded-md w-[48px] h-[48px] overflow-hidden flex items-center justify-center">
                  <div
                      className="h-full w-full absolute rounded-md"
                      style={{
                        backgroundImage: `url(${facebook})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      {/* <img src={amazon} alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="pt-[8px] text-centerrelative">
                  <span>
                  Facebook
                    <span className="text-[0.9em] whitespace-nowrap block overflow-hidden text-ellipsis">
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </li>
          <li className="w-[120px] pt-5 px-4 pb-1 rounded-lg">
            <div>
              <a href="">
                <div className="relative rounded-lg  bg-white shadow-2xl flex center mx-auto h-[80px] w-[80px] items-center text-3xl justify-center">
                  <div className="rounded-md w-[48px] h-[48px] overflow-hidden flex items-center justify-center">
                  <div
                      className="h-full w-full absolute rounded-md"
                      style={{
                        backgroundImage: `url(${wikipedia})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      {/* <img src={amazon} alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="pt-[8px] text-centerrelative">
                  <span>
                  Wikipedia
                    <span className="text-[0.9em] whitespace-nowrap block overflow-hidden text-ellipsis">
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </li>
          <li className="w-[120px] pt-5 px-4 pb-1 rounded-lg">
            <div>
              <a href="">
                <div className="relative rounded-lg  bg-white shadow-2xl flex center mx-auto h-[80px] w-[80px] items-center text-3xl justify-center">
                  <div className="rounded-md w-[48px] h-[48px] overflow-hidden flex items-center justify-center">
                  <div
                      className="h-full w-full absolute rounded-md"
                      style={{
                        backgroundImage: `url(${reddit})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      {/* <img src={amazon} alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="pt-[8px] text-centerrelative">
                  <span>
                  Reddit
                    <span className="text-[0.9em] whitespace-nowrap block overflow-hidden text-ellipsis">

                    </span>
                  </span>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LogoCard;
