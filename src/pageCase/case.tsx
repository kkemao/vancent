import React from "react";
import Header from "../header";
import Banner from "../banner";
import * as H from "history";
import "./Case.css";
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
      <Header styleMode={StyleMode.BLACK} {...props} />
      <Banner
        title="案例 | 赋能数字化与新消费"
        content="与超过30家合作伙伴一道，共同迎接数字化与品牌转型新机会"
        bannerImg="casebanner.png"
      />
      {/* 案例列表 */}
      <div className="section-third">
        {caseImg.map(url => (
          <Case key={url} url={url} />
        ))}
      </div>

      <Seemore content="去看看我们能提供哪些服务" />
      <Footer />
      {/* 章节八 FooterBottom */}
      <FooterBottom />
    </div>
  );
}

export default Home;
