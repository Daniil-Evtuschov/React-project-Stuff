import { useDispatch, useSelector } from "react-redux";
import styleTrendingProduct from "../trendingProduct/trendingProduct.module.css";
import styleWorthseeingProducet from "./worthseeingProducet.module.css";
import { InitialStateInt, ProductCardInt } from "../../interfaces";
import { useEffect } from "react";
import { featchLessProductCards } from "../../store/actions/featchApi";


const WorthseeingProducet = () => {
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(featchLessProductCards() as any)},[]);

  const lessProductcards =  useSelector((state:InitialStateInt)=>state.trendsProductCards) 

  return (
    <div className={styleTrendingProduct.trendingProductWrap}>
        <h3 className={styleTrendingProduct.title}>Worth seeing</h3>
        <div className={styleTrendingProduct.trendingProductCardWrap}>
          {lessProductcards.map((item:ProductCardInt)=>
          <div key={item.id} className={styleWorthseeingProducet.cardWrap}>
            <div className={styleWorthseeingProducet.imgWrap}><img src={item.category.image} alt="" /></div>
            <span  className={styleWorthseeingProducet.productName}>{item.title}</span>
          </div>
          )}
        </div>
    </div>
  )
}

export default WorthseeingProducet


