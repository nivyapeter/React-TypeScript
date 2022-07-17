import React from 'react'


type NavbarProps = {
    children:any
}

function Navbar(props:NavbarProps) {
  return (
  <nav className='navbar'>
    <ul className='navbar-nav'>
        {props.children}
    </ul>
  </nav>
  )
}

export default Navbar