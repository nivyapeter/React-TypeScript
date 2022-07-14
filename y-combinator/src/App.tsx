import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NewsBlock from './components/NewsBlock';
import {navBarItems,  newsData } from './constants';



function App() {
  return (
    <div className="lg:min-w-[796px] lg:w-[85%] m-auto mt-2 bg-[#f6f6ef]">
      <NavBar  data={navBarItems}/>
      <NewsBlock  data={newsData}/>
      <Footer />
    </div>

  );
}

export default App;
