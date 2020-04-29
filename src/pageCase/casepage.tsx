import React from "react";
import Header from "../header";
import Banner from "../banner";
import * as H from "history";
import { StyleMode } from "../constants/Header";
import Footer from "../footer";
import FooterBottom from "../footerbottom";
import CaseList from "../caselistbox";
import Seemore from "../seemorecase";

interface Props {
  history: H.History;
}
function Home(props: Props) {
  return (
    <div className="App-header">
      <Header styleMode={StyleMode.BLACK} {...props} />
      <Banner
        title="案例 | 赋能数字化与新消费"
        content="与超过30家合作伙伴一道，共同迎接数字化与品牌转型新机会"
        bannerImg="casebanner.png"
      />
      <CaseList />
      <Seemore content="去看看我们能提供哪些服务" />
      <Footer />
      {/* 章节八 FooterBottom */}
      <FooterBottom />
    </div>
  );
}

export default Home;
