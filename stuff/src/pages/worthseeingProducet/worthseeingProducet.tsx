import { useDispatch, useSelector } from "react-redux";
import styleTrendingProduct from "../trendingProduct/trendingProduct.module.css";
import styleWorthseeingProducet from "./worthseeingProducet.module.css";
import { InitialStateInt, ProducetCardInt, ProductCardInt, WorthSeeingProductCardInt } from "../../interfaces";
import { useEffect } from "react";
import { worthSeeingProductCards } from "../../store/actions/featchApi";
import { singleProduct } from "../../store/actions/singleProduct";


const WorthseeingProducet = () => {
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(worthSeeingProductCards() as any)},[]);
  const worthSeeingcards = useSelector((state:InitialStateInt)=>state.worthSeeingProductCards)   
  console.log(worthSeeingcards);

  return (
    <div className={styleTrendingProduct.trendingProductWrap}>
        <h3 className={styleTrendingProduct.title}>Worth seeing</h3>
        <div className={styleTrendingProduct.trendingProductCardWrap}>
          {worthSeeingcards.map((item:ProductCardInt)=>
            <div onClick={()=>{dispatch(singleProduct(item))}} key={item.id} className={styleWorthseeingProducet.cardWrap}>
              <div className={styleWorthseeingProducet.imgWrap}><img src={item.category.image} alt="" /></div>
              <span  className={styleWorthseeingProducet.productName}>{item.category.name}</span>
            </div>
          )}
        </div>
    </div>
  )
}

export default WorthseeingProducet


// export interface ProducetCardInt{
//   id:number
//   img:string;
//   title:string;
//   name:string;
//   price:number | string;
//   newPrice:number | string;
//   description:string
// }