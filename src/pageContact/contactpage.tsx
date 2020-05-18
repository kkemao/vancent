import React from "react";
import Header from "../header";
import Banner from "../banner";
import * as H from "history";
import { StyleMode } from "../constants/Header";
import Footer from "../footer";
import FooterBottom from "../footerbottom";
import Exlogo from "../exlogo";
import Hwrap from "../Hwrap";

interface Props {
  history: H.History;
}
function ContactPage(props: Props) {

  return (
    <Hwrap>
      <Header styleMode={StyleMode.BLACK} {...props} />
      <Banner
        title="联系我们"
        content="可以提交您的需求或者业务问题，我们会及时回复"
        bannerImg="contactbanner.png"
        // imgMode="centerright"
      />
      <Exlogo />
      <Footer />
      {/* 章节八 FooterBottom */}
      <FooterBottom />
    </Hwrap>
  );
}

export default ContactPage;
