import { useEffect } from "react";
import styleMainContent from "../../components/poster/poster.module.css";
import ProducetCard from "../../components/producetCard/producetCard";
import styleTrendingProduct from "../trendingProduct/trendingProduct.module.css";
import { useDispatch, useSelector} from "react-redux";
import { featchLessProductCards } from "../../store/actions/featchApi";
import { InitialStateInt } from "../../interfaces";
import  {ProductCardInt} from "../../interfaces";
import { useTypeSelector } from "../../hooks/useTypeSelector";

const LessProduct = () => {
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(featchLessProductCards() as any)},[]);
  const lessCards =  useTypeSelector((state)=>state.Api.lessProductCards)   

  return (
    <div className={styleTrendingProduct.trendingProductWrap}>
        <h3 className={styleTrendingProduct.title}>Less than 100$</h3>
        <div className={styleTrendingProduct.trendingProductCardWrap}>
              {(lessCards || []).map((item:ProductCardInt)=>
                <ProducetCard
                description={item.description}
                id={item.id} 
                img={item.category.image} 
                title={item.title} 
                name={item.category.name} 
                price={item.price + '$'}
                newPrice={Math.floor(item.price* (80/100)) + '$'}
                key={item.id}
                allCardkeys={item}
                />
              )}
        </div>
        <button className={styleMainContent.posterButton}>See more</button>
    </div>
  )
}

export default LessProduct