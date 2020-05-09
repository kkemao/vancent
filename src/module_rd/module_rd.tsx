import React from "react";

interface Props extends React.Props<any> {}

/**
 * 研发优势
 * @Props  无参数
 */

function Mrd(props: Props) {
  return (
    <div className="mrd-box">
      <div className="mrd-title">研发优势</div>
      <div className="mrdb-b">
        <div className="mrdb-item">
          <img src={`${process.env.PUBLIC_URL}/rdicon1.png`} alt="icon" />
          <h5 className="mrd-content">先进技术架构</h5>
        </div>
        <div className="mrdb-item">
          <img src={`${process.env.PUBLIC_URL}/rdicon2.png`} alt="icon" />
          <h5 className="mrd-content">安全稳定</h5>
        </div>
        <div className="mrdb-item">
          <img src={`${process.env.PUBLIC_URL}/rdicon3.png`} alt="icon" />
          <h5 className="mrd-content">赠送免费维护</h5>
        </div>
        <div className="mrdb-item">
          <img src={`${process.env.PUBLIC_URL}/rdicon4.png`} alt="icon" />
          <h5 className="mrd-content">企业级应用经验</h5>
        </div>
      </div>
    </div>
  );
}

export default Mrd;
