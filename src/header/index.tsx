import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import * as H from "history";
import "./header.css";

interface Props {
  styleMode: number;
  history: H.History;
}

function Header(props: Props): JSX.Element {
  // const timeRef = useRef<any>();
  // useEffect(() => {
  //   timeRef.current = setInterval(() => {
  //     console.log("123");
  //     props.history.push("/app");
  //   }, 2000);
  //   console.log(timeRef.current, "1 effect");
  //   return () => {
  //     console.log(timeRef.current, "2 effect");
  //     clearInterval(timeRef.current);
  //   };
  // }, [props.history]);
  // console.log(props);

  return (
    <header className="header">
      <div className="header-logo">
        {/* <span>万视</span>
        <span>|</span>
        <span>VANCENT</span> */}
      </div>
      <div className="header-menu">
        <ul className="ul-first">
          <li className="li-first">
            <span>首页</span>
            <span className="blue-line"></span>
          </li>
          <li className="li-first">
            <span>行业案例</span>
          </li>
          <li className="li-first">
            <span>产品服务</span>
            <ul className="ul-second">
              <li className="li-second">
                <span>技术服务</span>
              </li>
              <li className="li-second">
                <span>设计服务</span>
              </li>
            </ul>
          </li>
          <li className="li-first">
            <span>关于</span>
          </li>
          <li className="li-first">
            <span>联系</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
