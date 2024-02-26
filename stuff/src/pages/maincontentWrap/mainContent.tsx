import MainContent from "../../components/poster/poster";
import SiteBar from "../../components/siteBar/siteBar";
import styleMainContentWrap from "./mainContentWrap.module.css";

const MainContentWrap = () => {
  return (
    <div className={styleMainContentWrap.wrap}>
      <SiteBar/>
      <MainContent/>
    </div>
  )
}

export default MainContentWrap