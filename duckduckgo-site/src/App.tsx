import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import PrivacyBlock from './components/PrivacyBlock';
import privacydata from "../src/constants";
import PersonalInfo from './components/PersonalInfo';
import Accordion from './components/Accordion';
import Question from './components/Question';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner heading="Trusted by tens of millions worldwide!" text="We don't store your personal info. We don't follow you around with ads. We don't track you. Ever." subText="Trusted by tens of millions worldwide!"/>
      <PrivacyBlock  text="Privacy Protection For Any Device" data={privacydata}/>
      <PersonalInfo title="We don’t store your personal information. Ever. "  subTitle="Our privacy policy is simple: we don’t collect or share any of your personal information."/>
      <Question />
    </div>
  );
}

export default App;
