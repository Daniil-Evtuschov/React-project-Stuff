import CartCard from "../../components/cartCard/cartCard";
import styleCart from "./cart.module.css";

const Cart = () => {
  return (
    <div className={styleCart.wrap}>
        <span className={styleCart. cartTitle}>You Cart</span>
        <CartCard/>
        <div className={styleCart.cartDescription}>
            <div>
            <span className={styleCart.cartTotalPrice}>TOTAL PRICE: </span>
            <span className={styleCart.Price}>198$</span>
            </div>
            <button className={styleCart.cartButton}>Proceed to checkout</button>
        </div>
    </div>
  )
}

export default Cart