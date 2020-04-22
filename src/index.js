import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./UserContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import App1 from "./App1";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <UserProvider>
    <Router>
      <Route path="/" exact component={App}></Route>
      <Route path="/app" component={App1}></Route>
    </Router>
  </UserProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
