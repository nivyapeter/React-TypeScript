import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NewsBlock from './components/NewsBlock';
import {navBarItems,  newsData } from './constants';



function App() {
  return (
    <div className="min-w-[796px] w-[85%] m-auto bg-[#f6f6ef]">
      <NavBar  data={navBarItems}/>
      <NewsBlock  data={newsData}/>
      <Footer />
    </div>

  );
}

export default App;
