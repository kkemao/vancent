import React from "react";

interface item {
  imgName: string;
  content: string;
  content2: string;
}
interface Props extends React.Props<any> {
  title: string;
  msoiList: item[];
}

/**
 * 研发优势
 * @Props  Props
 */

function Msoi(props: Props) {
  const { title, msoiList } = props;

  return (
    <div className="msoi-box">
      <div className="msoi-title">{title}</div>
      <div className="msoib-b">
        {msoiList.map(item => (
          <div className="msoi-box-item" key={item.content}>
            <img src={`${process.env.PUBLIC_URL}/${item.imgName}`} alt="icon" />
            <h5 className="msoi-content">{item.content}</h5>
            <h5 className="msoi-content2">{item.content2}</h5>
          </div>
        ))}
        {/* <div className="msoi-box-item">
          <img src={`${process.env.PUBLIC_URL}/移动开发.png`} alt="icon" />
          <h5 className="msoi-content">移动App、小程序</h5>
          <h5 className="msoi-content2">
            万视基于跨平台技术为客户提供一站式的移动端开发解决方案，覆盖消费、电商和其他娱乐领域
          </h5>
        </div> */}
      </div>
    </div>
  );
}

export default Msoi;
