import { ProductCardInt,ProducetCardInt } from "../../interfaces";

export const singleProduct = (product:ProductCardInt | ProducetCardInt)=>({
    type: 'SHOW_SINGLE_PRODUCT_CARDS',
    payload: product
})