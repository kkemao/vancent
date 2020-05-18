import React from "react";
import Header from "../header";
import Banner from "../banner";
import * as H from "history";
import { StyleMode } from "../constants/Header";
import Footer from "../footer";
import FooterBottom from "../footerbottom";
import TextArrow from "../textarrow";
import Seemore from "../seemorecase";
import Mrd from "../module_rd";
import Mso from "../module_solutions";
import Msoi from "../module_solutions_industry";
import Hwrap from "../Hwrap";

interface Props {
  history: H.History;
}

function TechnologyService(props: Props) {
  const { history } = props;
  const msoList = [
    {
      title: "移动解决方案",
      item: [
        {
          imgName: "移动研发应用.svg",
          content: "移动应用开发"
        },
        {
          imgName: "小程序.svg",
          content: "微信小程序"
        }
      ]
    },
    {
      title: "企业平台方案",
      item: [
        {
          imgName: "管理系统研发.svg",
          content: "管理系统开发"
        },
        {
          imgName: "数据可视化.svg",
          content: "数据可视化"
        }
      ]
    },
    {
      title: "企业应用",
      item: [
        {
          imgName: "人工智能应用.svg",
          content: "人工智能应用"
        },
        {
          imgName: "行业智能应用.svg",
          content: "行业智能应用"
        }
      ]
    }
  ];
  const msoiList = [
    {
      imgName: "智慧餐饮.png",
      content: "智慧餐饮",
      content2:
        "基于无接触餐饮和快速线上营销引流，万视科技结合餐饮业务推出，餐饮点单数字化小程序解决方案"
    },
    {
      imgName: "智慧商场.png",
      content: "智慧商场",
      content2:
        "主要面向大中型商业中心，赋能数字化商业，助力商业引流与运营管理，提高商场体验"
    },
    {
      imgName: "大数据可视化.png",
      content: "大数据可视化",
      content2:
        "强大的实时渲染技术、数据建模能力，以易看易懂的真实感为本，以震撼逼真的视觉效果进行呈现"
    },
    {
      imgName: "品牌零售.png",
      content: "品牌零售",
      content2:
        "为品牌以及线下零售商提供营销、电商以及其他的营销扩展等解决方案的定制研发"
    },
    {
      imgName: "企业级管理系统.png",
      content: "企业级管理系统",
      content2:
        "万视为企业提高运营和管理效率，提供支持内部业务管理系统建设，涉及人力、物流、ERP等管理"
    },
    {
      imgName: "移动开发.png",
      content: "移动App、小程序",
      content2:
        "万视基于跨平台技术为客户提供一站式的移动端开发解决方案，覆盖消费、电商和其他娱乐领域"
    }
  ];

  return (
    <Hwrap>
      <Header styleMode={StyleMode.BLACK} {...props} />
      <Banner
        title="技术研发服务"
        content="Technology Development Services"
        bannerImg="jsyfbanner.png"
      />
      <Mrd />
      <Mso msoList={msoList} />
      <Msoi title="行业解决方案" msoiList={msoiList} />
      <TextArrow
        img={"sjfw.svg"}
        title="设计服务"
        color="sfc-color"
        url="/service/design"
        history={history}
      />
      <Seemore content="查看我们更多案例" url="/case" history={history} />
      <div style={{ marginBottom: "10px" }}></div>
      <Footer />
      {/* 章节八 FooterBottom */}
      <FooterBottom />
    </Hwrap>
  );
}

export default TechnologyService;
