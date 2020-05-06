import React from "react";
import Header from "../header";
import Banner from "../banner";
import * as H from "history";
import { StyleMode } from "../constants/Header";
import Footer from "../footer";
import FooterBottom from "../footerbottom";
import TextArrow from "../textarrow";
import Seemore from "../seemorecase";

interface Props {
  history: H.History;
}
function DesignService(props: Props) {
  return (
    <div className="App-header">
      <Header styleMode={StyleMode.BLACK} {...props} />
      <Banner
        title="创意设计/营销服务"
        content="Creative Design / Marketing Services"
        bannerImg="sjfwbanner1.png"
      />
      <TextArrow img={"sjfw.svg"} title="设计服务" color="sfc-color" />
      <Seemore content="查看我们更多案例" />
      <div style={{ marginBottom: "10px" }}></div>
      <Footer />
      {/* 章节八 FooterBottom */}
      <FooterBottom />
    </div>
  );
}

export default DesignService;
