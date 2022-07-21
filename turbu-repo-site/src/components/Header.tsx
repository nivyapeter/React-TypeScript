import React from 'react'
import { ReactComponent as Logo } from "../Assets/Turbo.svg";
import { ReactComponent as Github } from "../Assets/Github.svg";
import { ReactComponent as Dicord} from "../Assets/Dicord.svg";
import { ReactComponent as Hamburger} from "../Assets/Hamburger.svg";

function Header() {
  return (
    <div className='fixed  z-40 bg-[#313131]  flex gap-2 max-w-[90rem] mx-auto items-center left-0 right-0 h-16 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] '>
      <div className='flex items-center mr-2 flex-auto'>
        <Logo />
        <div className='flex-1'></div>
        <div className='inline-flex'>
          <a className='nextra-nav-link no-underline whitespace-nowrap p-2 -ml-2 hidden md:inline-block text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200' href="">Docs</a>
          <a className='nextra-nav-link no-underline whitespace-nowrap p-2 -ml-2 hidden md:inline-block text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200' href="">Blog</a>
          <a className='nextra-nav-link no-underline whitespace-nowrap p-2 -ml-2 hidden md:inline-block text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200' href="">Enterprise</a>
        </div>
        <div className='hidden md:inline-block'>
          <div className='relative w-full nextra-search nextra-flexsearch md:w-64'>
            <div className='relative flex items-center'>
              <input className='block w-full px-3 py-2 leading-tight bg-[#F9FAFB1A] rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-gray-200 focus:bg-white hover:bg-opacity-5 transition-colors dark:focus:bg-dark dark:focus:ring-gray-100 dark:focus:ring-opacity-20' placeholder='Search documentation...'>

              </input>
              <div className='hidden bg-[#F9FAFB1A] sm:flex absolute inset-y-0 right-0 py-1.5 pr-1.5 select-none pointer-events-none'>
                <kbd className='inline-flex bg-[#F9FAFB1A] items-center px-1.5 font-mono text-sm font-medium bg-white dark:bg-dark dark:bg-opacity-50 text-gray-400 dark:text-gray-500 dark:border-gray-100 dark:border-opacity-20 border rounded'>/</kbd>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
        <a className='text-current p-2' href=""><Github /></a>
        <a  className='text-current p-2'   href=""><Dicord /></a>
        <a  className='nextra-menu-icon block md:hidden p-2'   href=""><Hamburger /></a>
        </div>
      </div>
    </div>
  )  ;
  }
export default Header