import { useDispatch, useSelector } from "react-redux";
import { ProductCardInt } from "../../interfaces";
import styleSingleProducet from "./singleCard.module.css";
import { useEffect, useState } from "react";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { worthSeeingProductCards } from "../../store/actions/featchApi";
import { useParams } from "react-router-dom";
import { featchRelatedproducts, fetchOnIdSingleCard, singleProduct } from "../../store/actions/singleProduct";


const SingleCard = () => {
  const dispatch = useDispatch();
  const {category,id} = useParams()
  
  useEffect(()=>{dispatch(worthSeeingProductCards() as any)},[]);
  useEffect(()=>{dispatch(fetchOnIdSingleCard(id)as any)},[]);

  const singleProductCard =  useTypeSelector((state)=>state.Api.singleCard)   
  const otherProductsCards = useTypeSelector((state)=>state.Api.worthSeeingProductCards).slice(0,4)
  
  let newPrice = singleProductCard?.price || 0
    const sizes = [4,4.5,5]  
    let [curentSize, setCurentSize] :any= useState('');
  return (
    <div className={styleSingleProducet.wrap}>
        <div className={styleSingleProducet.wrapImg}>
            <img src={singleProductCard?.image} alt="" />
        </div>

        <div>
            <div className={styleSingleProducet.productInfoWrap}>
                <div className={styleSingleProducet.otherProducts}>
                {(otherProductsCards || []).map((item:ProductCardInt)=>
                        <div key={item.id} 
                        onClick={()=>{dispatch(singleProduct(item));dispatch(featchRelatedproducts('5',`/category/${item.category}`) as any)}} 
                        className={styleSingleProducet.otherImgWrap}>
                        <img src={item.image} alt="" />
                    </div>
                    )
                    }
                </div>
                <div className={styleSingleProducet.ProductInfo}>
                    <span className={styleSingleProducet.productName}>{singleProductCard?.title}</span>
                    <span className={styleSingleProducet.productPrice}>{ Math.floor(newPrice * (80/100))     + '$'}</span>
                    
                    <div className={styleSingleProducet.productParameters}>
                        <div className={styleSingleProducet.productSizeWrap}>
                            <span className={styleSingleProducet.productColor}>cont</span>
                            <span className={styleSingleProducet.productColor}>{singleProductCard?.rating.count}</span>
                        </div>
                        <span className={styleSingleProducet.productSizeText}>sizes:</span>
                        {sizes.map(element=>
                        <span 
                        onClick={()=>{setCurentSize(element)}} key={element}
                        className={`${styleSingleProducet.productSize} ${curentSize===element? styleSingleProducet.active:''}`}>
                            {element}
                        </span>)
                        
                        }
                    </div>

                    <div className={styleSingleProducet.productDescriptionWrap}>
                        <p className={styleSingleProducet.productDescription}>
                            {singleProductCard?.description}
                        </p>
                    </div>

                    <div className={styleSingleProducet.buttonWrap}>
                        <button className={styleSingleProducet.productButton} disabled={!curentSize}>Add to cart</button>
                        <button className={styleSingleProducet.productButton}>Add to favorites</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleCard