import React from 'react'
import { ReactComponent as Logo } from "../Assets/Turbo.svg";
import { ReactComponent as Github } from "../Assets/Github.svg";
import { ReactComponent as Dicord} from "../Assets/Dicord.svg";
import { ReactComponent as Hamburger} from "../Assets/Hamburger.svg";

function Header() {
  return (
    <div className='flex gap-2 max-w-[90rem] mx-auto items-center left-0 right-0 h-16 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] '>
      <div className='flex items-center mr-2  gap-8'>
        <Logo />
        <div></div>
        <div className='flex items-center gap-4'>
        <a className='text-current p-2' href=""><Github /></a>
        <a  className='text-current p-2'   href=""><Dicord /></a>
        <a  className='nextra-menu-icon block md:hidden p-2'   href=""><Hamburger /></a>
        </div>
      </div>
    </div>
  )
}

export default Header