import Footer from "../../pages/footer/footer"
import Header from "../../pages/header/Header"
import styleMainContentWrap from "../../pages/maincontentWrap/mainContentWrap.module.css";
import SiteBar from "../../components/siteBar/siteBar"
import Poster from "../../components/poster/poster"
import TrendingProduct from "../../pages/trendingProduct/trendingProduct"
import WorthseeingProducet from "../../pages/worthseeingProducet/worthseeingProducet"
import Banner from "../../pages/baner/baner"
import LessProduct from "../../pages/leessProduct copy/LessProduct"

const HomePage = () => {
  return (
    <div>
            <Header/>
            <div className={styleMainContentWrap.wrap}>
                <SiteBar/>
                <Poster/>
            </div>
            <TrendingProduct/>
            <WorthseeingProducet/>
            <Banner/>
            <LessProduct/>
            <Footer/>
    </div>
  )
}

export default HomePage