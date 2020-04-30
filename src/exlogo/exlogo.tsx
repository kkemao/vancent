import React from "react";

function Exlogo() {
  return (
    <div className="exlogo-box">
      <div
        className="exlogo-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/exlogo.png)`
        }}
      >
        <h5 className="exlogo-f">沟通、合作、共赢</h5>
        <h5 className="exlogo-f" style={{ marginTop: "6%" }}>
          <span className="exlogo-s">商务 marketing@vancent.com</span>
          <span className="exlogo-s">媒体 press@vancent.com</span>
          <span className="exlogo-s">电话 18824635828 (Mr.Cai)</span>
        </h5>
      </div>
    </div>
  );
}

export default Exlogo;
