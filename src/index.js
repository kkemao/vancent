import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./UserContext";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./index.css";
import "antd/dist/antd.css";
import Home from "./pageHome";
import Case from "./pageCase";
import ContactPage from "./pageContact";
import AboutPage from "./pageAbout";
import TechnologyService from "./pageTechnologyService";
import DesignService from "./pageDesignService";
import App1 from "./App1";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <UserProvider>
    <Router>
      <Route path="/" exact render={() => <Redirect to="/home" push />}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/case" exact component={Case}></Route>
      <Route path="/contact" exact component={ContactPage}></Route>
      <Route path="/about" exact component={AboutPage}></Route>
      <Route
        path="/service/technology"
        exact
        component={TechnologyService}
      ></Route>
      <Route path="/service/design" exact component={DesignService}></Route>
      <Route path="/app" component={App1}></Route>
      {/* <Redirect from="/" to="/home" /> */}
      {/* <Route component={App1} /> */}
    </Router>
  </UserProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
