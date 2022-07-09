import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import LogoCard from './components/LogoCard';
import WhiteCard from './components/WhiteCard';

function App() {
  return (
    <div className='px-8 pt-[30px] pb-8'>
      <div className='max-w-[986px] mx-auto'>
        <Search />
        <LogoCard />
        <WhiteCard />
      </div>

      

    </div>
  );
}

export default App;
