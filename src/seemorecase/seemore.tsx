import React from "react";

interface Props extends React.Props<any> {
  content: string;
}

function Seemore(props: Props) {
  const { content } = props;
  return (
    <div className="section-seventh">
      <h5 className="section-seventh-content">
        <span>{content}</span>
        <span
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/arrow.svg)`
          }}
          className="section-seventh-content-icon"
        ></span>
      </h5>
    </div>
  );
}

export default Seemore;
