import React from "react";

function AboutusSec() {
  return (
    <div className="aboutus-box">
      <div
        className="aboutus-logo"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/aboutuslogo.png)`
        }}
      ></div>
      <div className="aboutus-title">我们是智慧数字化与创意设计的专家</div>
      <div className="aboutus-content">
        我们帮助企业迎接智慧数字化时代，为企业制定技术与设计策略，并创造高质量的智慧数字平台和精彩的设计体验，用技术和设计帮助企业在商业上成功
      </div>
    </div>
  );
}

export default AboutusSec;
