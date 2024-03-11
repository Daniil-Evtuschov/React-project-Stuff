import CartCard from "../../components/cartCard/cartCard";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { ProductCardInt } from "../../interfaces";
import styleCart from "./cart.module.css";

const Cart = () => {
  const cartItems =  useTypeSelector((state)=>state.SingleCard.cart);

  console.log('q',cartItems);
  
  return (
    <div className={styleCart.wrap}>
        <span className={styleCart. cartTitle}>You Cart</span>
        {(cartItems || []).map((item:ProductCardInt)=>
          <CartCard 
          key={item.id}
          img={item.image} 
          title={item.title} 
          category={item.category} 
          description={item.category}
          price={item.price} 
          count={0}/>
        )}
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