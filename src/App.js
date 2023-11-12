import logo from './logo.svg';
import './App.css';
import PLeft from './components/PLeft';
import './components/PLeft.css';
import PCenter from './components/PCenter';
import './components/PCenter.css';


import React from 'react';
import { Tooltip } from 'react-tooltip'
import { tooltips } from './components/tooltipTexts.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/* Edit <code>src/App.js</code> and save to reload.*/}
        <h1>OMMO Job Description</h1>

        <PLeft>Responsibilities</PLeft>

        <PLeft>Write and maintain <a data-tooltip-id="welldoc_tooltip" data-tooltip-content={tooltips.doc}>well documented</a>,
         high quality code for projects in various languages (modern C/C++, Python, C#)</PLeft>

        <Tooltip id="welldoc_tooltip"></Tooltip>

        <PLeft>Write and maintain well documented, high quality code for projects in various languages (modern C/C++, Python, C#)</PLeft>

        <p> <code>Unless I'm in a quick and dirty prototyping workflow where the speed at which we churn through bad ideas is most important, I go out of my way to document</code></p>
        <p> I run a tech blog as a hobby where I pump out two articles per week on average for the past 2 years and at this point, writing technical prose in text, code, video etc is just a breeze</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
