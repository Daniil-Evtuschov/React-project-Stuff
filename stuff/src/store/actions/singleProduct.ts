import { Dispatch } from "@reduxjs/toolkit";
import { ProductCardInt,ProducetCardInt } from "../../interfaces";
import { useParams } from "react-router-dom";

export const singleProduct = (product:ProductCardInt | undefined)=>({
    type: 'SHOW_SINGLE_PRODUCT_CARD',
    payload: product
})

export const fetchOnIdSingleCard = (id: string | undefined) => async (dispatch: Dispatch)=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json'}
  }; 
      const response = await fetch(`https://fakestoreapi.com/products/${id}`,options);
            
      const data = await response.json();
            
      dispatch(singleProduct(data))     
  }

  export const getRelatedproducts = (trendsCards:ProductCardInt[])=>({
    type: 'SHOW_RELATED_PRODUCT_CARDS',
    payload: trendsCards
})
  

export const featchRelatedproducts = (fiveCards:string,catigory?:RequestInfo | URL) => async (dispatch: Dispatch)=>{
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'}
}; 
    const response = await fetch(`https://fakestoreapi.com/products${catigory}`,options);
          
    const data = await response.json();
    if (data.length>5) {
      data.splice(fiveCards)
    }    
    dispatch(getRelatedproducts(data))     
}

