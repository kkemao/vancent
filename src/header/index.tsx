import React from "react";
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
  const { history, match } = props;
  const menu = [
    {
      id: 1,
      url: "/home",
      name: "首页",
      hasChild: false
    },
    {
      id: 2,
      url: "/case",
      name: "行业案例",
      hasChild: false
    },
    {
      id: 3,
      url: "/service",
      name: "产品服务",
      hasChild: true,
      child: [
        {
          id: 6,
          url: "/service/technology",
          name: "技术服务",
          hasChild: false
        },
        {
          id: 7,
          url: "/service/design",
          name: "设计服务",
          hasChild: false
        }
      ]
    },
    {
      id: 4,
      url: "/about",
      name: "关于",
      hasChild: false
    },
    {
      id: 5,
      url: "/contact",
      name: "联系",
      hasChild: false
    }
  ];

  return (
    <div className="Header-container">
      <header className="header">
        <div className="header-logo curp" onClick={e => history.push("/home")}>
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
                  className={`li-first ${
                    match.path.indexOf(item.url) !== -1 ? "active" : ""
                  }`}
                  onClick={() => {
                    !item.hasChild && history.push(item.url);
                  }}
                  key={item.id}
                >
                  <span className="li-first-span">
                    {item.hasChild && (
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        width="0.75em"
                        height="0.75em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                      </svg>
                    )}
                    {item.name}
                  </span>
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
                            className={`li-second ${
                              match.path.indexOf(_i.url) !== -1 ? "active" : ""
                            }`}
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
