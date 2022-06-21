import React from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <>
    <div className="App">
      <Button text="Submit" class=" rounded bg-blue-500 p-3 mt-3"/>
    </div>
    <Card  heading="PREMIUM BEACH RESORT" text="How about staying in a room which overlooks the sea? Set in inspiring environs, every room…	" linkText="more" subText="Book Online" />
    </>
  )

}

export default App;
