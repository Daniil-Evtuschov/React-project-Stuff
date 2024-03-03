import { match } from "node:assert";
import poser from "../../img/image 1.png";
import styleProducetCard from "./producetCard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../store/actions/singleProduct";
import { ProducetCardInt } from "../../interfaces";

const ProducetCard = (props:ProducetCardInt) => {
    const dispatch = useDispatch()
    let peoplePurchased = Math.floor(Math.random()*1000)*1
  return (
    <div onClick={()=>{dispatch(singleProduct(props.allCardkeys))}} className={styleProducetCard.CardWrap} key={props.id}>
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
  )
}

export default ProducetCard