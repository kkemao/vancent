import React from "react";

interface Props extends React.Props<any> {}

/**
 * 研发优势
 * @Props  无参数
 */

function Mso(props: Props) {
  return (
    <div className="mso-box">
      <div className="mso-box-item">
        <h5 className="mso-title1">移动解决方案</h5>
        <div className="mso-box-item mbib">
          <div className="mso-box-item">
            <img
              src={`${process.env.PUBLIC_URL}/移动研发应用.svg`}
              alt="icon"
            />
            <h5 className="mso-title2 mbn">移动应用开发</h5>
          </div>
          <div className="mso-box-item">
            <img src={`${process.env.PUBLIC_URL}/小程序.svg`} alt="icon" />
            <h5 className="mso-title2">微信小程序</h5>
          </div>
        </div>
      </div>
      <div className="mso-box-item">
        <h5 className="mso-title1">企业平台方案</h5>
        <div className="mso-box-item mbib borderlr">
          <div className="mso-box-item">
            <img
              src={`${process.env.PUBLIC_URL}/管理系统研发.svg`}
              alt="icon"
            />
            <h5 className="mso-title2 mbn">管理系统开发</h5>
          </div>
          <div className="mso-box-item">
            <img src={`${process.env.PUBLIC_URL}/数据可视化.svg`} alt="icon" />
            <h5 className="mso-title2">数据可视化</h5>
          </div>
        </div>
      </div>
      <div className="mso-box-item">
        <h5 className="mso-title1">企业应用</h5>
        <div className="mso-box-item mbib">
          <div className="mso-box-item">
            <img
              src={`${process.env.PUBLIC_URL}/人工智能应用.svg`}
              alt="icon"
            />
            <h5 className="mso-title2 mbn">人工智能应用</h5>
          </div>
          <div className="mso-box-item">
            <img
              src={`${process.env.PUBLIC_URL}/行业智能应用.svg`}
              alt="icon"
            />
            <h5 className="mso-title2">行业智能应用</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mso;
