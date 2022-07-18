import React, { useState } from 'react'

type NavItemProps = {
    icon: any
    children: any
}


function NavItems(props :NavItemProps) {
  const [open,setOpen] = useState(false);
  return (
    <li className='nav-item'>
        <a href="#" className='icon-button' onClick={()=> setOpen(!open)}>
            {props.icon}
        </a>
        {open && props.children}
    </li>
  )
}

export default NavItems