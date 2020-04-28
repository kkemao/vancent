import React from "react";
import "./seemore.css";

function Seemore() {
  return (
    <div className="section-seventh">
      <h5 className="section-seventh-content">
        <span>查看我们更多案例</span>
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
