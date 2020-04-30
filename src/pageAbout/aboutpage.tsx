import React from "react";
import Header from "../header";
import Banner from "../banner";
import Seemore from "../seemorecase";
import * as H from "history";
import { StyleMode } from "../constants/Header";
import Footer from "../footer";
import FooterBottom from "../footerbottom";
import AboutusSec from "../aboutusSec";
import Vision from "../vision";
import Introduce from "../introduce";

interface Props {
  history: H.History;
}
function AboutPage(props: Props) {
  return (
    <div className="App-header">
      <Header styleMode={StyleMode.BLACK} {...props} />
      <Banner
        title="联系我们"
        content="可以提交您的需求或者业务问题，我们会及时回复"
        bannerImg="aboutus.png"
        imgMode="centerright"
      />
      <AboutusSec />
      <Vision />
      <Introduce
        imgName="teamch.png"
        ienfir="Vancent"
        iensec="Team"
        ititle="优秀的研发与设计师团队"
        icontent="VANCENT拥有一支来自互联网、智能化领域设计师、研发工程师、用户研究与技术专家组成的专业团队，建立了从商业策略到设计与技术实现的完整服务体系。"
        isReverse={false}
      />
      <Introduce
        imgName="jsch.png"
        ienfir="Technology"
        iensec="Design"
        ititle="技术驱动商业，科学结合艺术"
        icontent="真正解决合作伙伴与客户的实际问题。在理解用户，理解商业，理解行业，理解合作伙伴的基础上。以可落地的有效解决方案带来切实价值。"
        isReverse={true}
      />
      <Introduce
        imgName="jscxch.png"
        ienfir="Innovation"
        iensec=""
        ititle="打破陈规，预见未来"
        icontent="技术与设计创新没有穷尽，以开放积极的态度拥抱变化与不确定性。持续自我迭代，不断发现新趋势与新规律，并为合作伙伴带来新的价值。"
        isReverse={false}
      />
      <div style={{ marginBottom: "5%" }}></div>
      <Seemore content="直接联系我们" />
      <div style={{ marginBottom: "10px" }}></div>
      <Footer />
      {/* 章节八 FooterBottom */}
      <FooterBottom />
    </div>
  );
}

export default AboutPage;
