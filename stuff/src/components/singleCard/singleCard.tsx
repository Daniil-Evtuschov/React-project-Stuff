import { useDispatch, useSelector } from "react-redux";
import { InitialStateInt, ProductCardInt } from "../../interfaces";
import styleSingleProducet from "./singleCard.module.css";
import { useEffect } from "react";


const SingleCard = () => {
  const dispatch = useDispatch();
  const singleProduct =  useSelector((state:InitialStateInt)=>state.singleCard)   
  const otherProductsCards =  useSelector((state:InitialStateInt)=>state.worthSeeingProductCards).slice(0,4)   
  console.log(singleProduct);
    
  return (
    <div className={styleSingleProducet.wrap}>
        <div className={styleSingleProducet.wrapImg}>
            <img src={singleProduct?.img} alt="" />
        </div>

        <div>
            <div className={styleSingleProducet.productInfoWrap}>
                <div className={styleSingleProducet.otherProducts}>
                {otherProductsCards.map((item:ProductCardInt)=>
                        <div className={styleSingleProducet.otherImgWrap}>
                        <img src={item.category.image} alt="" />
                    </div>
                    )
                    }
                </div>
                <div className={styleSingleProducet.ProductInfo}>
                    <span className={styleSingleProducet.productName}>{singleProduct?.title}</span>
                    <span className={styleSingleProducet.productPrice}>{singleProduct?.newPrice}</span>

                    <div className={styleSingleProducet.productParameters}>
                        <div className={styleSingleProducet.productSizeWrap}>
                            <span className={styleSingleProducet.productColor}>color:</span>
                            <span className={styleSingleProducet.productColor}>red</span>
                        </div>
                        <span className={styleSingleProducet.productSize}>sizes:</span>
                        <span className={styleSingleProducet.productSize}>4.5</span>
                         <span className={styleSingleProducet.productSize}>6 </span>
                         <span className={styleSingleProducet.productSize}>5.5</span>
                    </div>

                    <div className={styleSingleProducet.productDescriptionWrap}>
                        <p className={styleSingleProducet.productDescription}>
                            {singleProduct?.description}
                        </p>
                    </div>

                    <div className={styleSingleProducet.buttonWrap}>
                        <button className={styleSingleProducet.productButton}>Add to cart</button>
                        <button className={styleSingleProducet.productButton}>Add to favorites</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleCard