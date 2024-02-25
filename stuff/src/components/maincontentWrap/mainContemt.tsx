import MainContent from "./mainContent/mainContent";
import SiteBar from "./siteBar/siteBar";
import styleMainContentWrap from "./mainContentWrap.module.css";

const MainContentWrap = () => {
  return (
    <div>
      <SiteBar/>
      <MainContent/>
    </div>
  )
}

export default MainContentWrap