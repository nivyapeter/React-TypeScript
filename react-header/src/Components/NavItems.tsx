import React from 'react'

type NavItemProps = {
    icon: any
}

function NavItems(props :NavItemProps) {
  return (
    <li className='nav-item'>
        <a href="#" className='icon-button'>
            {props.icon}
        </a>
    </li>
  )
}

export default NavItems