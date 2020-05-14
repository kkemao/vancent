import React, { useState } from "react";
import Cases from "../case/cases";

function CaseList() {
  const [index, setIndex] = useState(0);
  const tabList = [
    "全部",
    "科技智能",
    "品牌营销",
    "餐饮零售",
    "金融电商",
    "产品孵化"
  ];

  return (
    <>
      <div className="case-list-container">
        <div className="case-list-card">
          {tabList.map((item, i) => {
            return (
              <span
                className={`case-list-item cp ${i === index ? "active" : ""}`}
                onClick={() => {
                  setIndex(i);
                }}
                key={i}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <Cases />
    </>
  );
}

export default CaseList;
