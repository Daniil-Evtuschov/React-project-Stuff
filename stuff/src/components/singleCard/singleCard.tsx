import { useDispatch, useSelector } from "react-redux";
import { InitialStateInt, ProductCardInt } from "../../interfaces";
import styleSingleProducet from "./singleCard.module.css";
import { singleProduct } from "../../store/actions/singleProduct";
import { useState } from "react";
import { useTypeSelector } from "../../hooks/useTypeSelector";


const SingleCard = () => {
  const dispatch = useDispatch();
  const singleProductCard =  useTypeSelector((state)=>state.Api.singleCard)   
  const otherProductsCards = useTypeSelector((state)=>state.Api.worthSeeingProductCards)
  let newPrice = singleProductCard?.price 
    const sizes = [4,4.5,5]  
    let [curentSize, setCurentSize] :any= useState()
  return (
    <div className={styleSingleProducet.wrap}>
        <div className={styleSingleProducet.wrapImg}>
            <img src={singleProductCard?.category.image} alt="" />
        </div>

        <div>
            <div className={styleSingleProducet.productInfoWrap}>
                <div className={styleSingleProducet.otherProducts}>
                {(otherProductsCards || []).map((item:ProductCardInt)=>
                        <div key={item.id} onClick={()=>{dispatch(singleProduct(item))}} className={styleSingleProducet.otherImgWrap}>
                        <img src={item.category.image} alt="" />
                    </div>
                    )
                    }
                </div>
                <div className={styleSingleProducet.ProductInfo}>
                    <span className={styleSingleProducet.productName}>{singleProductCard?.title}</span>
                    <span className={styleSingleProducet.productPrice}>{Math.floor(newPrice || 0* (80/100)) + '$'}</span>
                    
                    <div className={styleSingleProducet.productParameters}>
                        <div className={styleSingleProducet.productSizeWrap}>
                            <span className={styleSingleProducet.productColor}>color:</span>
                            <span className={styleSingleProducet.productColor}>red</span>
                        </div>
                        <span className={styleSingleProducet.productSizeText}>sizes:</span>
                        {sizes.map(item=>
                        <span 
                        onClick={()=>{setCurentSize(item)}} key={item}
                        className={`${styleSingleProducet.productSize} ${curentSize===item? styleSingleProducet.active:''}`}>
                            {item}
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