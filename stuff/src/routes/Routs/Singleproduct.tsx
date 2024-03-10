import Header from "../../pages/header/Header"
import SiteBar from "../../components/siteBar/siteBar"
import styleMainContentWrap from "../../pages/maincontentWrap/mainContentWrap.module.css";
import SingleCard from "../../components/singleCard/singleCard"
import TrendingProduct from "../../pages/trendingProduct/trendingProduct";
import Relatedproducts from "../../pages/Relatedproducts/Relatedproducts";

const SingleProductPage = () => {
  return (
    <div>
            <Header/>
            <div className={styleMainContentWrap.wrap}>
                <SiteBar/>
                <SingleCard/>
            </div>
            <Relatedproducts/>
    </div>
  )
}

export default SingleProductPage