import React from "react";
import Header from "../header";
import * as H from "history";
import "./Home.css";
import { StyleMode } from "../constants/Header";

interface Props {
  history: H.History;
}
function Home(props: Props) {
  console.log(props);
  return (
    <div className="App-header">
      <div className="Header-container">
        <Header styleMode={StyleMode.BLACK} history={props.history} />
      </div>
    </div>
  );
}

export default Home;
