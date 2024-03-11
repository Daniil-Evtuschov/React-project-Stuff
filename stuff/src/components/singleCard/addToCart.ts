import { ProductCardInt } from "../../interfaces";

export let cartMaisv:ProductCardInt[] = []

export function pushToCart(params:any) {
    // Создаем новый объект для добавления в массив
    const newItem = { ...params };
    localStorage.setItem('cart',JSON.stringify(params))
    let storageCart:any = localStorage.getItem('cart')
    cartMaisv = [...cartMaisv, newItem];

    storageCart.filter((item:ProductCardInt)=>{if (item.id===params.id) {console.log(1);}})

      console.log(cartMaisv);
      
  }