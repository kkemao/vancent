import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import identity from "./App2";
import "./App.css";

function App() {
  const { username, handleChangeUsername } = useContext(UserContext);
  console.log(username, handleChangeUsername);
  const hello = identity(123);
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
          Learn React{hello}
        </a>
        <Link to="/app">App</Link>
        <div>user: {username}</div>
        <input onChange={e => handleChangeUsername(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
