import React from 'react';
import NavBar from './components/NavBar';
import navBarItems from './constants';



function App() {
  return (
    <div className="min-w-[796px] w-[85%] m-auto bg-[#f6f6ef]">
      <NavBar  data={navBarItems}/>
    </div>
  );
}

export default App;
