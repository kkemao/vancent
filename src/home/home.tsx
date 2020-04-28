import React from "react";
import Header from "../header";
import Banner from "../banner";
import * as H from "history";
import "./Home.css";
import { StyleMode } from "../constants/Header";
import Case from "../case/index";
import Footer from "../footer";
import FooterBottom from "../footerbottom";
import Seemore from "../seemorecase";

interface Props {
  history: H.History;
}
function Home(props: Props) {
  console.log(props);
  const caseImg = ["case1.png", "case2.png", "case3.png", "case4.png"];
  const teamLogo = [
    "teamlogo1.png",
    "teamlogo2.png",
    "teamlogo3.png",
    "teamlogo4.png",
    "teamlogo5.png",
    "teamlogo6.png"
  ];
  const badgesImg = ["tengxun.png", "huawei.png", "sanxing.png"];
  return (
    <div className="App-header">
      <div className="Header-container">
        <Header styleMode={StyleMode.BLACK} {...props} />
      </div>
      <div className="Main-container">
        <Banner />
      </div>
      {/* 章节二 万视，用心打造数字化产品和品牌 */}
      <div className="section-sec">
        <h5 className="section-sec-title">万视，用心打造数字化产品和品牌</h5>
        <h5 className="section-sec-content">
          <span>了解所有案例</span>
          <span
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/iconright.svg)`
            }}
            className="section-sec-content-icon"
          ></span>
        </h5>
      </div>
      {/* 章节三 案例列表 */}
      <div className="section-third">
        {caseImg.map(url => (
          <Case key={url} url={url} />
        ))}
      </div>

      {/* 章节四 深入赋能行业，与品牌共同成长 */}
      <div className="section-fourth">
        <h5 className="section-fourth-title">深入赋能行业，与品牌共同成长</h5>
        <h5 className="section-fourth-content">
          <span className="sfc-color">设计服务</span>
          <span
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/sjfw.svg)`
            }}
            className="section-fourth-content-icon icon-mr"
          ></span>
          <span>技术服务</span>
          <span
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/jsfw.svg)`
            }}
            className="section-fourth-content-icon"
          ></span>
        </h5>
      </div>
      <div className="section-fifth">
        {teamLogo.map(url => (
          <div
            className="sf-item"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${url})` }}
            key={url}
          ></div>
        ))}
      </div>
      <div className="section-sixth">
        {badgesImg.map(url => (
          <div
            className="ss-item"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${url})` }}
            key={url}
          ></div>
        ))}
      </div>
      <Seemore />
      <Footer />
      {/* 章节八 FooterBottom */}
      <FooterBottom />
    </div>
  );
}

export default Home;
