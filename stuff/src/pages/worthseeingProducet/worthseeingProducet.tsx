import ProducetCard from "../../components/producetCard/producetCard"
import styleTrendingProduct from "../trendingProduct/trendingProduct.module.css";
import stuleWorthseeingProducet from "./worthseeingProducet.module.css";

const WorthseeingProducet = () => {
  return (
    <div className={styleTrendingProduct.trendingProductWrap}>
        <h3 className={styleTrendingProduct.title}>Worth seeing</h3>
        <div className={styleTrendingProduct.trendingProductCardWrap}>
            <ProducetCard/>
            <ProducetCard/>
            <ProducetCard/>
        </div>
    </div>
  )
}

export default WorthseeingProducet