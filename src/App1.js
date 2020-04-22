import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import "./App.css";

function App1() {
  const { username, handleChangeUsername } = useContext(UserContext);
  useEffect(() => {
    return () => {
      handleChangeUsername("zengkefan");
    };
  });
  return (
    <div className="App">
      <li>
        <Link to="/">Home, {username}</Link>
      </li>
      <iframe title="testIframe" src="/test.html"></iframe>
    </div>
  );
}

export default App1;
