import React from "react";

interface Props extends React.Props<any> {}

/**
 * 研发优势
 * @Props  无参数
 */

function Msoi(props: Props) {
  return (
    <div className="msoi-box">
      <div className="msoi-title">行业解决方案</div>
      <div className="msoib-b">
        <div className="msoi-box-item">
          <img src={`${process.env.PUBLIC_URL}/智慧餐饮.png`} alt="icon" />
          <h5 className="msoi-content">智慧餐饮</h5>
          <h5 className="msoi-content2">
            基于无接触餐饮和快速线上营销引流，万视科技结合餐饮业务推出，餐饮点单数字化小程序解决方案
          </h5>
        </div>
        <div className="msoi-box-item">
          <img src={`${process.env.PUBLIC_URL}/智慧商场.png`} alt="icon" />
          <h5 className="msoi-content">智慧商场</h5>
          <h5 className="msoi-content2">
            主要面向大中型商业中心，赋能数字化商业，助力商业引流与运营管理，提高商场体验
          </h5>
        </div>
        <div className="msoi-box-item">
          <img src={`${process.env.PUBLIC_URL}/大数据可视化.png`} alt="icon" />
          <h5 className="msoi-content">大数据可视化</h5>
          <h5 className="msoi-content2">
            强大的实时渲染技术、数据建模能力，以易看易懂的真实感为本，以震撼逼真的视觉效果进行呈现
          </h5>
        </div>
        <div className="msoi-box-item">
          <img src={`${process.env.PUBLIC_URL}/品牌零售.png`} alt="icon" />
          <h5 className="msoi-content">品牌零售</h5>
          <h5 className="msoi-content2">
            为品牌以及线下零售商提供营销、电商以及其他的营销扩展等解决方案的定制研发
          </h5>
        </div>
        <div className="msoi-box-item">
          <img
            src={`${process.env.PUBLIC_URL}/企业级管理系统.png`}
            alt="icon"
          />
          <h5 className="msoi-content">企业级管理系统</h5>
          <h5 className="msoi-content2">
            万视为企业提高运营和管理效率，提供支持内部业务管理系统建设，涉及人力、物流、ERP等管理
          </h5>
        </div>
        <div className="msoi-box-item">
          <img src={`${process.env.PUBLIC_URL}/移动开发.png`} alt="icon" />
          <h5 className="msoi-content">移动App、小程序</h5>
          <h5 className="msoi-content2">
            万视基于跨平台技术为客户提供一站式的移动端开发解决方案，覆盖消费、电商和其他娱乐领域
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Msoi;
