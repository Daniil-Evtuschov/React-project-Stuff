import styleCard from "./cartCard.module.css";
import logo from "../../img/image 4.png";
import { ReactComponent as Xmark } from "../../img/392517_close_delete_remove_icon 1.svg";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <span className={styleCard.countDegrease}><FontAwesomeIcon icon={faMinus} /></span>
            <span className={styleCard.count}>1</span>
            <span className={styleCard.countIngrease}><FontAwesomeIcon icon={faPlus} /></span>
        </div>

        <div className={styleCard.sumOfPriceWrap} >
            <span className={styleCard.sumOfPrice}>99$</span>
            <span>{<Xmark className={styleCard.deleteProducet}/>}</span>
        </div>
    </div>
  )
}

export default CartCard