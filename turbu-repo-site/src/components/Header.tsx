import React from 'react'
import { ReactComponent as Logo } from "../Assets/Turbo.svg";
import { ReactComponent as Github } from "../Assets/Github.svg";
import { ReactComponent as Dicord} from "../Assets/Dicord.svg";
import { ReactComponent as Hamburger} from "../Assets/Hamburger.svg";

function Header() {
  return (
    <div className='px-6 flex items-center max-w-[90rem] h-[4rem] mx-auto gap-2 '>
      <div className='flex items-center mr-2  gap-8'>
        <Logo />
        <div className='flex items-center gap-4'>
        <a className='p-2' href=""><Github /></a>
        <a  className='p-2'   href=""><Dicord /></a>
        <a  className='p-2'   href=""><Hamburger /></a>
        </div>
      </div>
    </div>
  )
}

export default Header