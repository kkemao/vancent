import React from "react";

interface item {
  imgName: string;
  content: string;
}
interface items {
  title: string;
  item: item[];
}
interface Props extends React.Props<any> {
  msoList: items[];
}

/**
 * 研发优势
 * @Props  Props
 */

function Mso(props: Props) {
  const { msoList } = props;
  return (
    <div className="mso-box">
      {msoList.map(_i => (
        <div className="mso-box-item msobi" key={_i.title}>
          <h5 className="mso-title">{_i.title}</h5>
          <div className="mso-box-item mbib">
            {_i.item.map(_ii => (
              <div className="mso-box-item" key={_ii.content}>
                <img
                  src={`${process.env.PUBLIC_URL}/${_ii.imgName}`}
                  alt="icon"
                />
                <h5 className="mso-content mbn">{_ii.content}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* <div className="mso-box-item msobi">
        <h5 className="mso-title">移动解决方案</h5>
        <div className="mso-box-item mbib">
          <div className="mso-box-item">
            <img
              src={`${process.env.PUBLIC_URL}/移动研发应用.svg`}
              alt="icon"
            />
            <h5 className="mso-content mbn">移动应用开发</h5>
          </div>
          <div className="mso-box-item">
            <img src={`${process.env.PUBLIC_URL}/小程序.svg`} alt="icon" />
            <h5 className="mso-content">微信小程序</h5>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Mso;
