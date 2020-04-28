import React from "react";
import "./footerbottom.css";

function FooterBottom() {
  return (
    <div className="section-bottom">
      <div className="footb-item footb-content">
        <div className="footbc-item footbc-logo">
          <img src={`${process.env.PUBLIC_URL}/footerlogo.png`} alt="logo" />
        </div>
        <div className="footbc-item footbc-item-c">
          <h5 className="footbc-title">产品服务</h5>
          <h5 className="footbc-content">品牌/创意设计服务</h5>
          <h5 className="footbc-content">智慧数字化/开发服务</h5>
        </div>
        <div className="footbc-item footbc-item-c">
          <h5 className="footbc-title">联系我们</h5>
          <h5 className="footbc-content">TEL：18824635828</h5>
          <h5 className="footbc-content">Mail：vancent.info@gmail.com</h5>
          <h5 className="footbc-content">地址：惠州市江北名流公馆1804</h5>
        </div>
        <div className="footbc-item footbc-item-l">
          <h5 className="footbc-title">万视</h5>
          <h5 className="footbc-content">关于我们</h5>
          <h5 className="footbc-content">公众号</h5>
        </div>
      </div>
      <div className="footb-item item-other">
        版权所有 © 惠州市万视科技有限公司 2012-2019 沪ICP备14000593号-2
        沪公网安备31010502003345号{" "}
      </div>
    </div>
  );
}

export default FooterBottom;
