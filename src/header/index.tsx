import React, { useState } from "react";
import * as H from "history";
import "./header.css";

interface Props extends React.Props<any> {
  styleMode: number;
  history: H.History;
}

function Header(props: Props): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(1);
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
  console.log(props, process, process.env.PUBLIC_URL);

  return (
    <header className="header">
      <div className="header-logo">
        {/* <span>万视</span>
        <span>|</span>
        <span>VANCENT</span> */}
        <img src={`${process.env.PUBLIC_URL}/headerlogo.svg`} alt="logo" />
      </div>
      <div className="header-menu">
        <ul className="ul-first">
          <li
            className="li-first"
            onClick={() => {
              setCurrentIndex(1);
            }}
          >
            <span>首页</span>
            {currentIndex === 1 ? <span className="blue-line"></span> : ""}
          </li>
          <li
            className="li-first"
            onClick={() => {
              setCurrentIndex(2);
            }}
          >
            <span>行业案例</span>
            {currentIndex === 2 ? <span className="blue-line"></span> : ""}
          </li>
          <li
            className="li-first"
            onClick={() => {
              setCurrentIndex(3);
            }}
          >
            <span>产品服务</span>
            {currentIndex === 3 ? <span className="blue-line"></span> : ""}
            <ul className="ul-second">
              <li className="li-second">
                <span>技术服务</span>
              </li>
              <li className="li-second">
                <span>设计服务</span>
              </li>
            </ul>
          </li>
          <li
            className="li-first"
            onClick={() => {
              setCurrentIndex(4);
            }}
          >
            <span>关于</span>
            {currentIndex === 4 ? <span className="blue-line"></span> : ""}
          </li>
          <li
            className="li-first"
            onClick={() => {
              setCurrentIndex(5);
            }}
          >
            <span>联系</span>
            {currentIndex === 5 ? <span className="blue-line"></span> : ""}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
