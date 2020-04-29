import React from "react";
import { Button } from "antd";

function Footer() {
  return (
    <div className="section-eighth">
      <h5 className="section-eighth-title">合作咨询</h5>
      <h5 className="section-eighth-content">
        <span>如需了解详情，您可留言咨询，我们将为您提供更多服务信息</span>
      </h5>
      <Button
        type="primary"
        shape="round"
        // icon={<DownloadOutlined />}
        size={"large"}
        className="button-style mtp"
      >
        合作咨询
      </Button>
    </div>
  );
}

export default Footer;
