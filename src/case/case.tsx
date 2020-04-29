import React from "react";

interface Props extends React.Props<any> {
  url: string;
}

function Case(props: Props) {
  const { url } = props;
  return (
    <div className="case-box">
      <img alt="" src={`${process.env.PUBLIC_URL}/${url}`} />
      <div className="case-shadow">
        <h5 className="shadow-title">一瓶美食社区App</h5>
        <h5 className="shadow-content">从0到1，重新定义年轻化的饮品美食社区</h5>
      </div>
    </div>
  );
}

export default Case;
