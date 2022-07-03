import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Teams from './components/Teams';
import Build from './components/Build';

function App() {
  return (
    <div className="bg-[#282c34] text-white">
      <Header />
      <Banner  heading="Monorepos that" text="make ship happen." subText="Turborepo is a high-performance build system for JavaScript and TypeScript codebases." buttonText="Start Building " buttonTextTwo="npx create-turbo"/>
     <Teams />
     <Build  title="Build like the best" subTitle='Turborepo reimagines build system techniques used by Facebook and Google to remove maintenance burden and overhead.'/>
    </div>
  );
}

export default App;
