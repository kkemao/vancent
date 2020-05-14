import React from "react";
import * as H from "history";
import { withRouter } from "react-router-dom";

interface Props extends React.Props<any> {
  history: H.History;
}

function FooterBottom(props: Props) {
  const { history } = props;
  return (
    <div className="section-bottom">
      <div className="footb-item footb-content">
        <div className="footbc-item footbc-logo">
          <img
            src={`${process.env.PUBLIC_URL}/footerlogo.png`}
            alt="点击回到首页"
            onClick={e => history!.push("/home")}
          />
        </div>
        <div className="footbc-item footbc-item-c">
          <h5 className="footbc-title">
            <span>产品服务</span>
          </h5>
          <h5
            className="footbc-content curp"
            onClick={e => history.push("/service/design")}
          >
            <span>品牌/创意设计服务</span>
          </h5>
          <h5
            className="footbc-content curp"
            onClick={e => history.push("/service/technology")}
          >
            <span>智慧数字化/开发服务</span>
          </h5>
        </div>
        <div className="footbc-item footbc-item-c">
          <h5 className="footbc-title">
            <span>联系我们</span>
          </h5>
          <h5 className="footbc-content">
            <span>TEL：18824635828</span>
          </h5>
          <h5 className="footbc-content">
            Mail：vancent.info@gmail.<span>com</span>
          </h5>
          <h5 className="footbc-content">
            <span>地址：惠州市江北名流公馆1804</span>
          </h5>
        </div>
        <div className="footbc-item footbc-item-l">
          <h5 className="footbc-title">
            <span>万视</span>
          </h5>
          <h5
            className="footbc-content curp"
            onClick={e => history.push("/about")}
          >
            <span>关于我们</span>
          </h5>
          <h5 className="qrcode-box footbc-content curp pr cp">
            <span>公众号</span>
            <img
              src={`${process.env.PUBLIC_URL}/qrcode.png`}
              alt="二维码"
              className="qrcode-style"
            />
          </h5>
        </div>
      </div>
      <div className="footb-item item-other">
        版权所有 © 惠州市万视科技有限公司 2012-2019 沪ICP备14000593号-2
        沪公网安备31010502003345号{" "}
      </div>
    </div>
  );
}

export default withRouter(FooterBottom);
