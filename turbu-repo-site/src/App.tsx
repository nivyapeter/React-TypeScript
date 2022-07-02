import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <div className="bg-[#282c34] text-white">
      <Header />
      <Banner  heading="Monorepos that" text="make ship happen." subText="Turborepo is a high-performance build system for JavaScript and TypeScript codebases." buttonText="Start Building " buttonTextTwo="npx create-turbo"/>
    </div>
  );
}

export default App;
