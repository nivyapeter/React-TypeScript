import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SuccessStoryBanner from './components/SuccessStoryBanner';
import WhiteBlock from './components/WhiteBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <SuccessStoryBanner />
      <WhiteBlock />
    </div>
  );
}

export default App;
