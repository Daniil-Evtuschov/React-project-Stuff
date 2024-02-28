import { useState } from "react";
import MainContent from "../../components/poster/poster";
import SingleCard from "../../components/singleCard/singleCard";
import SiteBar from "../../components/siteBar/siteBar";
import styleMainContentWrap from "./mainContentWrap.module.css";

const MainContentWrap = () => {
  return (
    <div className={styleMainContentWrap.wrap}>
      <SiteBar/>
      {/* <MainContent/> */}
      <SingleCard/>
    </div>
  )
}

export default MainContentWrap