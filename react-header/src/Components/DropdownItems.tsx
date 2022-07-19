import React from 'react'
type DropdownItems = {
    leftIcon:any
    rightIcon:any
    children: string;

}


function DropdownItems(props:DropdownItems) {
    return (
        <a href="#" className='menu-Items'>
            <span className='icon-button'>{props.leftIcon}</span>
            {props.children}
            <span className='icon-right'>{props.rightIcon}</span>

        </a>
    );

 }

export default DropdownItems