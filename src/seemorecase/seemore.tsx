import React from "react";
import * as H from "history";

interface Props extends React.Props<any> {
  content: string;
  history: H.History;
  url: string;
}

function Seemore(props: Props) {
  const { content, history, url } = props;
  return (
    <div className="section-seventh">
      <h5
        className="section-seventh-content"
        onClick={e => {
          history.push(url);
        }}
      >
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
