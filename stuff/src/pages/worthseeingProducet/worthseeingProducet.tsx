import { useDispatch, useSelector } from "react-redux";
import styleTrendingProduct from "../trendingProduct/trendingProduct.module.css";
import styleWorthseeingProducet from "./worthseeingProducet.module.css";
import { InitialStateInt, ProducetCardInt, ProductCardInt, WorthSeeingProductCardInt } from "../../interfaces";
import { useEffect } from "react";
import { featchTrendsProductCards, worthSeeingProductCards } from "../../store/actions/featchApi";
import { singleProduct } from "../../store/actions/singleProduct";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { Link, useParams } from "react-router-dom";


const WorthseeingProducet = () => {
  const {category,id} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(worthSeeingProductCards() as any)},[]);
  const worthSeeingcards =  useTypeSelector((state)=>state.Api.worthSeeingProductCards) 

  const handlefiveProductCard =()=>{

    let validCatigoty = category
    if (validCatigoty===undefined) {
      
      validCatigoty=''
    }else{validCatigoty=`/category/${category}`}

    let result = worthSeeingcards.length+5;

    if (result!=undefined) {
    dispatch(worthSeeingProductCards(validCatigoty) as any)          
    }
}
  return (
    <div className={styleTrendingProduct.trendingProductWrap}>
        <h3 className={styleTrendingProduct.title}>Worth seeing</h3>
        <div className={styleTrendingProduct.trendingProductCardWrap}>
          {(worthSeeingcards || []).map((item:ProductCardInt)=>
            <Link to={`/SingleProductPage/${item.category}/${item.id}`}  key={item.id}>
              <div onClick={()=>{dispatch(singleProduct(item));handlefiveProductCard()}} className={styleWorthseeingProducet.cardWrap}>
                <div className={styleWorthseeingProducet.imgWrap}><img src={item.image} alt="" /></div>
                <span  className={styleWorthseeingProducet.productName}>{item.category}</span>
              </div>
            </Link>
          )}
        </div>
    </div>
  )
}

export default WorthseeingProducet
