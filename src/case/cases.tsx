import React from "react";
import Case from "./index";

interface Props extends React.Props<any> {
  url?: string;
}

function Cases(props: Props) {
  const caseImg = ["case1.png", "case2.png", "case3.png", "case4.png"];
  return (
    <div className="section-third">
      {caseImg.map(url => (
        <Case key={url} url={url} />
      ))}
    </div>
  );
}

export default Cases;
