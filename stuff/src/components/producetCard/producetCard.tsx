import { match } from "node:assert";
import poser from "../../img/image 1.png";
import styleProducetCard from "./producetCard.module.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { featchRelatedproducts, singleProduct } from "../../store/actions/singleProduct";
import { ProducetCardInt } from "../../interfaces";
import { useState } from "react";
import { featchTrendsProductCards } from "../../store/actions/featchApi";

const ProducetCard = (props:ProducetCardInt) => {
  
  const dispatch = useDispatch()
    let peoplePurchased = Math.floor(Math.random()*1000)*1
  return (
    <Link to={`/SingleProductPage/${props.category}/${props.id}`}>
        <div onClick={()=>{dispatch(singleProduct(props.allCardkeys));dispatch(featchRelatedproducts('5',`/category/${props.category}`) as any)}} className={styleProducetCard.CardWrap} key={props.id}>
            <div className={styleProducetCard.imgWrap}><img className={styleProducetCard.img} src={props.img} alt="" /></div>
            
            <div  className={styleProducetCard.cardDecription}>
                <span className={styleProducetCard.cardTitle}>{props.title}</span>
                <span className={styleProducetCard.productModel}>{props.category}</span>

                <div className={styleProducetCard.cardInfo}>
                    <div className={styleProducetCard.cardPticeWrap}>
                        <span className={styleProducetCard.Price}>{props.newPrice}</span>
                        <span className={styleProducetCard.oldPrice}>{props.price}</span>
                    </div>
                    <div>
                        <span className={styleProducetCard.purchased}>{peoplePurchased} peoplePurchased</span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ProducetCard