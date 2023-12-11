/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;*/

import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import Assignment3 from "./Labs/a3";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import JavaScript from "./Labs/a3/JavaScript";
import Project from "./Project";

function App() {
   return (
    <HashRouter>
      <div>
      <Routes>
          <Route path="/"         element={<Navigate to="/Project"/>}/>
          <Route path="/project/*"  element={<Project/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
      </div>
      </HashRouter>
   );
}
export default App;


