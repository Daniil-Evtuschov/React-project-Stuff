import styleMainContent from "../../components/poster/poster.module.css";
import ProducetCard from "../../components/producetCard/producetCard";
import styleTrendingProduct from "./trendingProduct.module.css";

const TrendingProduct = () => {
  return (
    <div className={styleTrendingProduct.trendingProductWrap}>
        <h3 className={styleTrendingProduct.title}>Trending</h3>
        <div className={styleTrendingProduct.trendingProductCardWrap}>
            <div className={styleTrendingProduct.boreder}><ProducetCard/></div>
            <div className={styleTrendingProduct.boreder}><ProducetCard/></div>
            <div className={styleTrendingProduct.boreder}><ProducetCard/></div>
        </div>
        <button className={styleMainContent.posterButton}>See more</button>
    </div>
  )
}

export default TrendingProduct