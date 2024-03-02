import { Dispatch } from "@reduxjs/toolkit";
import { ProductCardInt, WorthSeeingProductCardInt } from "../../interfaces";

export const getTrendsProductCards = (trendsCards:ProductCardInt[])=>({
    type: 'SHOW_TRENDS_PRODUCT_CARDS',
    payload: trendsCards
})
  

export const featchTrendsProductCards = () => async (dispatch: Dispatch)=>{
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'}
}; 
    const response = await fetch(`https://api.escuelajs.co/api/v1/products?limit=5&offset=1`,options);
          
    const data = await response.json();
    console.log('data 1',data);
      
    dispatch(getTrendsProductCards(data))     
}



export const featchLessProductCards = () => async (dispatch: Dispatch)=>{
const options = {
  method: 'GET',
  headers: {accept: 'application/json'}
}; 
  const response = await fetch(`https://api.escuelajs.co/api/v1/products?limit=5&offset=2`,options);
  // const response = await fetch(`https://api.escuelajs.co/api/v1/products/?price_min=5&price_max=100&offset=30&limit=5`,options);
        
  const data = await response.json();
  console.log('data 2',data);
  
  dispatch(getLessCards(data))     
}



export const getLessCards = (lessdsCards:ProductCardInt[])=>({
  type: 'SHOW_LESS_PRODUCT_CARDS',
  payload: lessdsCards
})


export const worthSeeingProductCards = () => async (dispatch: Dispatch)=>{
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'}
}; 
    const response = await fetch(`https://api.escuelajs.co/api/v1/products?limit=5&offset=3`,options);
          
    const data = await response.json();
    
    console.log('data3',data);
      
    dispatch(worthSeeingCards(data))     
}
  
  
  
  export const worthSeeingCards = (worthSeeingCards:ProductCardInt[])=>({
    type: 'SHOW_WORTH_SEEING_PRODUCT_CARDS',
    payload: worthSeeingCards
  })
  