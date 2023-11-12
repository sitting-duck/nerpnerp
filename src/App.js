import logo from './logo.svg';
import './App.css';
import PLeft from './components/PLeft';
import './components/PLeft.css';
import PCenter from './components/PCenter';
import './components/PCenter.css';




import { tooltips } from './components/tooltipTexts.js';
import ToolTip from './components/ToolTip';
import './components/ToolTip.css';


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

        <ToolTip id="welldoc_tooltip"></ToolTip>

        <PLeft>Write and maintain well documented, high quality code for projects in various languages (modern C/C++, Python, C#)</PLeft>

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
