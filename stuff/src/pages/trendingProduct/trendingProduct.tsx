import { useEffect } from "react";
import styleMainContent from "../../components/poster/poster.module.css";
import ProducetCard from "../../components/producetCard/producetCard";
import styleTrendingProduct from "./trendingProduct.module.css";
import { useDispatch} from "react-redux";
import { featchTrendsProductCards } from "../../store/actions/featchApi";
import  {ProductCardInt} from "../../interfaces";
import { useTypeSelector } from "../../hooks/useTypeSelector";


const TrendingProduct = () => {
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(featchTrendsProductCards('5') as any)},[]);

  const trendsProductcards =  useTypeSelector((state)=>state.Api.trendsProductCards)   

  useEffect(()=>{
    if (trendsProductcards.length===0) {
      handlefiveProductCard()
    }},[]);

    const handlefiveProductCard =()=>{
      let result = trendsProductcards.length+5

      localStorage.setItem('massLenght',result.toString())

      if (result!=undefined) {
         
      dispatch(featchTrendsProductCards(result.toString()) as any)          
      }
  }

  return (
    <div className={styleTrendingProduct.trendingProductWrap}>
        <h3 className={styleTrendingProduct.title}>Trending</h3>
        <div className={styleTrendingProduct.trendingProductCardWrap}>
              {(trendsProductcards || []).map((item:ProductCardInt)=>
                <ProducetCard
                description={item.description}
                id={item.id} 
                img={item.image} 
                title={item.title} 
                category={item.category} 
                price={item.price + '$'}
                newPrice={Math.floor(item.price* (80/100)) + '$'}
                key={item.id}
                allCardkeys={item}
                />
              )}
        </div>
        <button onClick={()=>{handlefiveProductCard()}} className={styleMainContent.posterButton}>See more</button>
    </div>
  )
}

export default TrendingProduct