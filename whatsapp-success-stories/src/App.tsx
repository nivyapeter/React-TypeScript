import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SuccessStoryBanner from './components/SuccessStoryBanner';
import WhiteBlock from './components/WhiteBlock';
import customerConnection from "./constants";
import GreenBlock from './components/GreenBlock';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SuccessStoryBanner />
      <WhiteBlock  data={customerConnection}/>
      <GreenBlock />
      <Footer />
    </div>
  );
}

export default App;
