import { ProductCardInt,ProducetCardInt } from "../../interfaces";

export const singleProduct = (product:ProductCardInt | undefined)=>({
    type: 'SHOW_SINGLE_PRODUCT_CARDS',
    payload: product
})