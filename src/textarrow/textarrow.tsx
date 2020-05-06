import React from "react";

/**
 * 技术/设计服务->
 * @params 无参
 */

interface Props extends React.Props<any> {
  title: string;
  content?: string;
  img: string;
  color?: string;
}

function TextArrow(props: Props) {
  const { title, img, color = "" } = props;
  return (
    <div className="textarrow-box">
      <div className="textarrow-content">
        <span className={`${color}`}>{title}</span>
        <span
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/${img})`
          }}
          className="textarrow-content-icon"
        ></span>
      </div>
    </div>
  );
}

export default TextArrow;
