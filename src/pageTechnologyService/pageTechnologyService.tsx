import React from "react";
import Header from "../header";
import Banner from "../banner";
import * as H from "history";
import { StyleMode } from "../constants/Header";
import Footer from "../footer";
import FooterBottom from "../footerbottom";
import TextArrow from "../textarrow";
import Seemore from "../seemorecase";
import Mrd from "../module_rd";
import Mso from "../module_solutions";
import Msoi from "../module_solutions_industry";

interface Props {
  history: H.History;
}
function TechnologyService(props: Props) {
  return (
    <div className="App-header">
      <Header styleMode={StyleMode.BLACK} {...props} />
      <Banner
        title="技术研发服务"
        content="Technology Development Services"
        bannerImg="jsyfbanner.png"
      />
      <Mrd />
      <Mso />
      <Msoi />
      <TextArrow img={"jsfw.svg"} title="技术服务" />
      <Seemore content="查看我们更多案例" />
      <div style={{ marginBottom: "10px" }}></div>
      <Footer />
      {/* 章节八 FooterBottom */}
      <FooterBottom />
    </div>
  );
}

export default TechnologyService;
