import styleCard from "./cartCard.module.css";
import logo from "../../img/image 4.png";

const CartCard = () => {
  return (
    <div className={styleCard.cardWrap}>
        <div className={styleCard.discriptionWrap}>
            <div className={styleCard.imgWrap}><img src={logo} alt="" /></div>
            <div className={styleCard.logoDescriptionWrap}>
                <span className={styleCard.description}>Nike ZoomX 2023</span>
                <span className={styleCard.description}>Sneakers</span>
            </div>
        </div>

        <span className={styleCard.price}>99$</span>

        <div className={styleCard.quantityWrap}>
            <span className={styleCard.countDegrease}><span></span></span>
            <span className={styleCard.count}>1</span>
            <span className={styleCard.countIngrease}>+</span>
        </div>

        <div>
            <span className={styleCard.sumOfPrice}>99$</span>
            <span className={styleCard.deleteProducet}>x</span>
        </div>
    </div>
  )
}

export default CartCard