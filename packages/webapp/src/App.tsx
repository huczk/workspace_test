import { generateUniqueString } from "@scanye/shared";

import { CLIENT_NAME } from "clients";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>unique string1: {generateUniqueString()}</li>
          <li>unique string2: {generateUniqueString()}</li>
          <li>unique string3: {generateUniqueString()}</li>
        </ul>

        <div>{CLIENT_NAME}</div>
        <a>learn react</a>
      </header>
    </div>
  );
}

export default App;
