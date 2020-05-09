import React from "react";
import Header from "../header";
import Banner from "../banner";
import * as H from "history";
import { StyleMode } from "../constants/Header";
import Footer from "../footer";
import FooterBottom from "../footerbottom";
import TextArrow from "../textarrow";
import Seemore from "../seemorecase";
import Mso from "../module_solutions";
import icon1 from "./asset/沟通理解icon.svg";
import icon2 from "./asset/研究分析icon.svg";
import icon3 from "./asset/创意策略.svg";
import icon4 from "./asset/设计实施icon.svg";
import icon5 from "./asset/设计规范.svg";
import icon6 from "./asset/落地执行.svg";

interface Props {
  history: H.History;
}
function DesignService(props: Props) {
  const msoList = [
    {
      title: "品牌",
      item: [
        {
          imgName: "营销策划-icon.png",
          content: "营销策划"
        },
        {
          imgName: "perspective.svg",
          content: "品牌设计"
        }
      ]
    },
    {
      title: "UI/UX",
      item: [
        {
          imgName: "architecture1.svg",
          content: "企业数字化设计"
        },
        {
          imgName: "party.svg",
          content: "字化互动设计"
        }
      ]
    },
    {
      title: "线下创意",
      item: [
        {
          imgName: "shop.svg",
          content: "活动空间设计"
        },
        {
          imgName: "graphic-design.svg",
          content: "动态图形设计"
        }
      ]
    }
  ];
  return (
    <div className="App-header">
      <Header styleMode={StyleMode.BLACK} {...props} />
      <Banner
        title="创意设计/营销服务"
        content="Creative Design / Marketing Services"
        bannerImg="sjfwbanner1.png"
      />
      <div
        className="designbanner-box"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/设计服务banner-2.png)`
        }}
      >
        <span className="span-title">数字</span>
        <span className="span-dot"></span>
        <span className="span-title">设计</span>
        <span className="span-dot"></span>
        <span className="span-title">传播</span>
      </div>
      <Mso msoList={msoList} />
      <div className="roadline-module">
        <h5 className="roadline-title">过程完美，结果自然更加精彩</h5>
        <div
          className="roadline-box"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/设计服务流程曲线.svg)`
          }}
        >
          <div>
            <span
              className="roadline-dot"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/1.png)`
              }}
            ></span>
            <span
              className="roadline-dot"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/2.png)`
              }}
            ></span>
            <span
              className="roadline-dot"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/3.png)`
              }}
            ></span>
            <span
              className="roadline-dot"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/4.png)`
              }}
            ></span>
            <span
              className="roadline-dot"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/5.png)`
              }}
            ></span>
            <span
              className="roadline-dot"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/6.png)`
              }}
            ></span>
          </div>
          <div>
            <div className="roadline-box-icon">
              <img src={icon1} />
              <h5>沟通理解</h5>
            </div>
            <div className="roadline-box-icon">
              <img src={icon2} />
              <h5>研究/分析</h5>
            </div>
            <div className="roadline-box-icon">
              <img src={icon3} />
              <h5>创意策略</h5>
            </div>
            <div className="roadline-box-icon">
              <img src={icon4} />
              <h5>设计实施</h5>
            </div>
            <div className="roadline-box-icon">
              <img src={icon5} />
              <h5>设计规范</h5>
            </div>
            <div className="roadline-box-icon">
              <img src={icon6} />
              <h5>落地执行</h5>
            </div>
          </div>
        </div>
      </div>
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
