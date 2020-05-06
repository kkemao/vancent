import React from "react";

interface Props extends React.Props<any> {
  isReverse?: boolean;
  ienfir: string;
  iensec: string;
  ititle: string;
  icontent: string;
  imgName: string;
}

/**
 * 图文介绍模块
 * @Props
 * @isReverse?: boolean;
 * @ienfir: string;
 * @iensec: string;
 * @ititle: string;
 * @icontent: string;
 * @imgName: string;
 */

function Introduce(props: Props) {
  const { isReverse, ienfir, iensec, ititle, icontent, imgName } = props;
  return (
    <div className={`introduce-box ${isReverse ? "drreverse" : ""}`}>
      <div
        className="introduce-i introduce-img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${imgName})`
        }}
      ></div>
      <div className="introduce-i">
        <div className="introduce-line"></div>
        <div className="introduce-en">
          <span>{ienfir}</span>
          <span>{iensec}</span>
        </div>
        <div className="introduce-title">{ititle}</div>
        <div className="introduce-content">{icontent}</div>
      </div>
    </div>
  );
}

export default Introduce;
