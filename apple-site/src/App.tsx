import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import applebg from "./Images/applebg.jpg";

function App() {
  return (
    <div className="App">
      <div>
      <Header />
      </div>
      <div className='bg-white h-[10vh]'>
        <span className='py-5 text-sm text-black'>
                           Get 5% instant Cashback up to ₹6000 with qualifying HDFC Bank credit cards on orders over ₹54900.</span>
      </div>
      <BannerSection style={{  backgroundImage: `url(${applebg})` }}/>
    </div>
  );
}

export default App;
