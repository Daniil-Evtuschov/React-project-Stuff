import poser from "../../img/image 1.png";
import styleProducetCard from "./producetCard.module.css";

const ProducetCard = () => {
  return (
    <div className={styleProducetCard.CardWrap}>
        <div className={styleProducetCard.imgWrap}><img className={styleProducetCard.img} src={poser} alt="" /></div>
        
        <div  className={styleProducetCard.cardDecription}>
            <span className={styleProducetCard.cardTitle}>Nike ZoomX 2023</span>
            <span className={styleProducetCard.productModel}>Sneakers</span>

            <div className={styleProducetCard.cardInfo}>
                <div className={styleProducetCard.cardPticeWrap}>
                    <span className={styleProducetCard.Price}>99$</span>
                    <span className={styleProducetCard.oldPrice}>79$</span>
                </div>
                <div>
                    <span className={styleProducetCard.purchased}>19 people purchased</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProducetCard