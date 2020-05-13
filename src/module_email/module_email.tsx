import React, { useContext } from "react";
import { Button } from "antd";
import { UserContext } from "../UserContext";

function Email() {
  const { handleChangeIsShowEmailBox } = useContext(UserContext);
  return (
    <div className="email-container">
      <div className="email-box">
        <h5 className="email-tool">
          <span className="email-title">合作咨询</span>
          <span
            className="email-tool-svg"
            title="点击关闭"
            onClick={e => handleChangeIsShowEmailBox(false)}
          >
            {/* <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="close"
              width="2.15em"
              height="2.15em"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="3em"
              aria-hidden="true"
            >
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg> */}
            <img src={`${process.env.PUBLIC_URL}/关闭.svg`} alt="点击关闭" />
          </span>
        </h5>
        <div className="email-content-div">
          <h5 className="email-item">
            <span className="email-item-txt">公司名称</span>
            <input />
          </h5>
          <h5 className="email-item-half">
            <span className="email-item-txt">您的名字</span>
            <input />
          </h5>
          <h5 className="email-item-half">
            <span className="email-item-txt">联系电话</span>
            <input />
          </h5>
          <h5 className="email-item">
            <span className="email-item-txt">您希望了解或者解决的问题</span>
            <textarea />
          </h5>
        </div>
        {/* <Button
          type="primary"
          // shape="round"
          // icon={<DownloadOutlined />}
          size={"large"}
          className="button-style2 mtp"
        >
          提交
        </Button> */}
        <span className="button-style2 curp">提交</span>
      </div>
    </div>
  );
}

export default Email;
