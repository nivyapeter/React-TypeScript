import React from 'react'
import { ReactComponent as CogIcon} from "./Assets/cog.svg"
import { ReactComponent as ChevronIcon} from "./Assets/chevron.svg"

type DropdownItems = {
    leftIcon:any
    rightIcon:any
    children:any
}

function DropdownMenu() {
 function DropdownItems(props:DropdownItems) {
    return (
        <a href="#" className='menu-Items'>
            <span className='icon-button'>{props.leftIcon}</span>
            {props.children}
            <span className='icon-right'>{props.rightIcon}</span>

        </a>
    );

 }
 return (

<div>
    <DropdownItems>My profile</DropdownItems>
    <DropdownItems>
        leftIcon={<CogIcon />}
        rightIcon={<ChevronIcon />}
        children={<h2>haii</h2>}
    </DropdownItems>
</div>
 )
}

export default DropdownMenu