import React from "react";
import { Button } from "antd";
import "./banner.css";

function Banner() {
  return (
    <div
      className="Banner-container"
      style={{
        color: "#333",
        backgroundImage: `url(${process.env.PUBLIC_URL}/homebanner.png)`
      }}
    >
      <div className="banner-box">
        <h5 className="banner-title">让创意再次伟大</h5>
        <h5 className="banner-content">让数字化和创意受益于每一个人和组织</h5>
        <Button
          type="primary"
          shape="round"
          background="#0071FF"
          // icon={<DownloadOutlined />}
          size={"large"}
          className="button-style"
        >
          合作咨询
        </Button>
      </div>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/mouse.svg)`
        }}
        className="banner-mouse"
      ></div>
    </div>
  );
}

export default Banner;
