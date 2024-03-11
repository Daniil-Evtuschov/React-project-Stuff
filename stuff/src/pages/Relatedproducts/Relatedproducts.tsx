import { useEffect, useState } from "react";
import styleMainContent from "../../components/poster/poster.module.css";
import ProducetCard from "../../components/producetCard/producetCard";
import styleTrendingProduct from "../trendingProduct/trendingProduct.module.css";
import { useDispatch} from "react-redux";
import  {ProductCardInt} from "../../interfaces";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useParams } from "react-router-dom";
import { featchRelatedproducts } from "../../store/actions/singleProduct";


const Relatedproducts = () => {
  const dispatch = useDispatch()
  const {category,id} = useParams()
  useEffect(()=>{dispatch(featchRelatedproducts('5',`/category/${category}`) as any)},[]);

  const trendsProductcards =  useTypeSelector((state)=>state.SingleCard.relatedproducts)   
  const [length ,SetLength] = useState(true);

  useEffect(()=>{
    if (trendsProductcards.length===0) {
      handlefiveProductCard()
    }},[]);

    const handlefiveProductCard =()=>{
      let result = trendsProductcards.length+5;

      if (result!=undefined) {
      dispatch(featchRelatedproducts(result.toString(),`/category/${category}`) as any)          
      }
  }
    
  return (
    <div className={styleTrendingProduct.trendingProductWrap}>
        <h3 className={styleTrendingProduct.title}>Related products</h3>
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
        {length&&<button onClick={()=>{handlefiveProductCard()}} className={styleMainContent.posterButton}>See more</button>}
    </div>
  )
}

export default Relatedproducts