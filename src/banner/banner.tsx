import React from "react";
import { Button } from "antd";

interface Props extends React.Props<any> {
  title: string;
  content: string;
  bannerImg: string;
}

function Banner(props: Props) {
  const { title, content, bannerImg } = props;
  return (
    <div className="Main-container">
      <div
        className="Banner-container"
        style={{
          color: "#333",
          backgroundImage: `url(${process.env.PUBLIC_URL}/${bannerImg})`
        }}
      >
        <div className="banner-box">
          <h5 className="banner-title">{title}</h5>
          <h5 className="banner-content">{content}</h5>
          <Button
            type="primary"
            shape="round"
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
    </div>
  );
}

export default Banner;
