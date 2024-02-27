import { match } from "node:assert";
import poser from "../../img/image 1.png";
import styleProducetCard from "./producetCard.module.css";

interface ProducetCardInt{
    id:number
    img:string;
    title:string;
    description:string;
    price:number | string;
    newPrice:number | string;
}

const ProducetCard = (props:ProducetCardInt) => {
  let peoplePurchased = Math.floor(Math.random()*1000)*1
  return (
    <div className={styleProducetCard.CardWrap} key={props.id}>
        <div className={styleProducetCard.imgWrap}><img className={styleProducetCard.img} src={props.img} alt="" /></div>
        
        <div  className={styleProducetCard.cardDecription}>
            <span className={styleProducetCard.cardTitle}>{props.title}</span>
            <span className={styleProducetCard.productModel}>{props.description}</span>

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