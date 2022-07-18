import React from 'react'
import Navbar from './Components/Navbar'
import NavItems from './Components/NavItems'
import { ReactComponent as BellIcon} from "./Assets/Bell.svg"
import { ReactComponent as PlusIcon} from "./Assets/Plus.svg"
import { ReactComponent as MessengerIcon} from "./Assets/Messenger.svg"
import DropdownMenu from './Components/DropdownMenu'



function App() {
  return (
 <Navbar>
  <NavItems  icon={<PlusIcon />}/>
  <NavItems icon= {<BellIcon />} />
  <NavItems icon={<MessengerIcon />} />
  <NavItems>
    <DropdownMenu></DropdownMenu>
  </NavItems>
   
  
 </Navbar>
  )
}

export default App