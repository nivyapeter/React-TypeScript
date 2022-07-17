import React from 'react'
import Navbar from './Components/Navbar'
import NavItems from './Components/NavItems'
import { ReactComponent as BellIcon} from "./Assets/Bell.svg"
import { ReactComponent as PlusIcon} from "./Assets/Plus.svg"
import { ReactComponent as MessengerIcon} from "./Assets/Messenger.svg"



function App() {
  return (
 <Navbar>
  <NavItems  icon={<PlusIcon />}/>
  <NavItems icon= {<BellIcon />} />
  <NavItems icon={<MessengerIcon />} />
   
  
 </Navbar>
  )
}

export default App