import React from 'react'
import Navbar from './Components/Navbar'
import NavItems from './Components/NavItems'
import { ReactComponent as BellIcon} from "./Assets/Bell.svg"
import { ReactComponent as PlusIcon} from "./Assets/Plus.svg"
import { ReactComponent as MessengerIcon} from "./Assets/Messenger.svg"
import { ReactComponent as CaretIcon } from "./Assets/CaretIcon.svg"
import DropdownMenu from './Components/DropdownMenu'



function App() {
  return (
    <Navbar>
    <NavItem icon={<PlusIcon />} />
    <NavItem icon={<BellIcon />} />
    <NavItem icon={<MessengerIcon />} />

    <NavItem icon={<CaretIcon />}>
      <DropdownMenu></DropdownMenu>
    </NavItem>
  </Navbar>
  )
}

export default App