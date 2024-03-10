import { useEffect } from "react";
import styleMainContent from "../../components/poster/poster.module.css";
import ProducetCard from "../../components/producetCard/producetCard";
import styleTrendingProduct from "../trendingProduct/trendingProduct.module.css";
import { useDispatch} from "react-redux";
import { featchLessProductCards } from "../../store/actions/featchApi";
import  {ProductCardInt} from "../../interfaces";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useParams } from "react-router-dom";

const LessProduct = () => {
  const dispatch = useDispatch()
  const lessCards =  useTypeSelector((state)=>state.Api.lessProductCards)   

  useEffect(()=>{
    if (lessCards.length===0) {
      handlefiveProductCard()
    }},[]);
    const {category,id} = useParams()

    const handlefiveProductCard =()=>{
      let result = lessCards.length+5
      console.log('category',category);
      
      let validCatigoty = category
      if (validCatigoty===undefined) {
        validCatigoty=''
      }else{validCatigoty=`/category/${category}`}

      if (result!=undefined) {
         
      dispatch(featchLessProductCards(result.toString(),validCatigoty) as any)          
      }
  }

  return (
    <div className={styleTrendingProduct.trendingProductWrap}>
        <h3 className={styleTrendingProduct.title}>Less than 100$</h3>
        <div className={styleTrendingProduct.trendingProductCardWrap}>
              {(lessCards || []).map((item:ProductCardInt)=>
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

export default LessProduct