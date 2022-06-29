import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import applebg from "./Images/applebg.jpg";
import MacbookAirBlock from './components/MacbookAirBlock';
import whiteImg from "./Images/whiteImg.png";

function App() {
  return (
    <div className="App">
      <div>
      <Header />
      </div>
      <div className='bg-white py-3 '>
        <span className='text-sm text-black'>
                           Get 5% instant Cashback up to ₹6000 with qualifying HDFC Bank credit cards on orders over ₹54900.</span>
      </div>
      <BannerSection img={applebg}  title="MacBook Pro 13" subTitle="Supercharged by Apple M2 chip" linkText="Learn more" text="Buy"/>
      <MacbookAirBlock  style={{  backgroundImage: `url(${whiteImg})`, height:"600px", }} title="MacBook Air" sub="Supercharged by M2"  text="Available in July" linkText="Learn more" buyText="View pricing"/>
    </div>
  );
}

export default App;
