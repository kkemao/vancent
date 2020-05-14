import React from "react";
import Header from "../header";
import Banner from "../banner";
import * as H from "history";
import { StyleMode } from "../constants/Header";
import Cases from "../case/cases";
import Footer from "../footer";
import FooterBottom from "../footerbottom";
import Seemore from "../seemorecase";

interface Props {
  history: H.History;
}
function Home(props: Props) {
  const { history } = props;
  const teamLogo = [
    "teamlogo1.png",
    "teamlogo2.png",
    "teamlogo3.png",
    "teamlogo4.png",
    "teamlogo5.png",
    "teamlogo6.png"
  ];
  const badgesImg = [
    { imgName: "tengxun.png", text1: "腾讯T派", text2: "全国优秀团队" },
    { imgName: "huawei.png", text1: "华为主题", text2: "设计优秀奖" },
    { imgName: "sanxing.png", text1: "三星移动", text2: "创意设计优秀奖" }
  ];
  return (
    <div className="App-header">
      <Header styleMode={StyleMode.BLACK} {...props} />
      <Banner
        title="让创意再次伟大"
        content="让数字化和创意受益于每一个人和组织"
        bannerImg="homebanner.png"
      />
      {/* 章节二 万视，用心打造数字化产品和品牌 */}
      <div className="section-sec">
        <h5 className="section-sec-title">万视，用心打造数字化产品和品牌</h5>
        <h5
          className="section-sec-content"
          onClick={e => history.push("/case")}
        >
          <span>了解所有案例</span>
          <span
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/iconright.svg)`
            }}
            className="section-sec-content-icon"
          ></span>
        </h5>
      </div>
      <Cases />

      {/* 章节四 深入赋能行业，与品牌共同成长 */}
      <div className="section-fourth">
        <h5 className="section-fourth-title">深入赋能行业，与品牌共同成长</h5>
        <h5 className="section-fourth-content">
          <span
            className="sfc-color"
            onClick={e => history.push("/service/design")}
          >
            设计服务
          </span>
          <span
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/sjfw.svg)`
            }}
            className="section-fourth-content-icon icon-mr"
            onClick={e => history.push("/service/design")}
          ></span>
          <span onClick={e => history.push("/service/technology")}>
            技术服务
          </span>
          <span
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/jsfw.svg)`
            }}
            className="section-fourth-content-icon"
            onClick={e => history.push("/service/technology")}
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
        {badgesImg.map(item => (
          <div
            className="ss-item"
            // style={{
            //   backgroundImage: `url(${process.env.PUBLIC_URL}/${item.imgName})`
            // }}
            key={item.imgName}
          >
            <div className="ss-item-div">
              <img alt="" src={`${process.env.PUBLIC_URL}/${item.imgName}`} />
              <span className="ss-item-txt txt1">{item.text1}</span>
              <span className="ss-item-txt">{item.text2}</span>
            </div>
          </div>
        ))}
      </div>
      <Seemore content="查看我们更多案例" url="/case" history={history} />
      <div style={{ marginBottom: "10px" }}></div>
      <Footer />
      {/* 章节八 FooterBottom */}
      <FooterBottom />
    </div>
  );
}

export default Home;
