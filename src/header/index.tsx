import React, { useState } from "react";
import * as H from "history";
import "./header.css";

interface Props extends React.Props<any> {
  styleMode: number;
  history: H.History;
  match?: any;
}
interface IMenu {
  id: number;
  url: string;
  name: string;
  hasChild: boolean;
  child?: IMenu[];
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
  const { history, match } = props;
  const menu = [
    {
      id: 1,
      url: "home",
      name: "首页",
      hasChild: false
    },
    {
      id: 2,
      url: "case",
      name: "行业案例",
      hasChild: false
    },
    {
      id: 3,
      url: "service",
      name: "产品服务",
      hasChild: true,
      child: [
        {
          id: 6,
          url: "technologyService",
          name: "技术服务",
          hasChild: false
        },
        {
          id: 7,
          url: "designService",
          name: "设计服务",
          hasChild: false
        }
      ]
    },
    {
      id: 4,
      url: "about",
      name: "关于",
      hasChild: false
    },
    {
      id: 5,
      url: "contact",
      name: "联系",
      hasChild: false
    }
  ];

  return (
    <div className="Header-container">
      <header className="header">
        <div className="header-logo">
          {/* <span>万视</span>
        <span>|</span>
        <span>VANCENT</span> */}
          <img src={`${process.env.PUBLIC_URL}/headerlogo.svg`} alt="logo" />
        </div>
        <div className="header-menu">
          <ul className="ul-first">
            {menu.map(item => {
              return (
                <li
                  className="li-first"
                  onClick={() => {
                    history.push(item.url);
                  }}
                  key={item.id}
                >
                  <span>{item.name}</span>
                  {match.path.indexOf(item.url) !== -1 ? (
                    <span className="blue-line"></span>
                  ) : (
                    ""
                  )}
                  {item.hasChild && (
                    <ul className="ul-second">
                      {item!.child!.map(_i => {
                        return (
                          <li
                            className="li-second"
                            onClick={e => {
                              e.stopPropagation();
                              history.push(_i.url);
                            }}
                            key={_i.id}
                          >
                            <span>{_i.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
