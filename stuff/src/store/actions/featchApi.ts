import { Dispatch } from "@reduxjs/toolkit";
import { ProductCardInt, WorthSeeingProductCardInt } from "../../interfaces";

export const getTrendsProductCards = (trendsCards:ProductCardInt[])=>({
    type: 'SHOW_TRENDS_PRODUCT_CARDS',
    payload: trendsCards
})
  

export const featchTrendsProductCards = (fiveCards:string) => async (dispatch: Dispatch)=>{
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'}
}; 
    const response = await fetch(`https://fakestoreapi.com/products`,options);
          
    const data = await response.json();
    if (data.length>5) {
      data.splice(fiveCards)
    }
    dispatch(getTrendsProductCards(data))     
}



export const featchLessProductCards = (fiveCards:string) => async (dispatch: Dispatch)=>{
const options = {
  method: 'GET',
  headers: {accept: 'application/json'}
}; 
  const response = await fetch(`https://fakestoreapi.com/products`,options);        
  const data = await response.json();

  let newData = data.filter((item:ProductCardInt)=>item.price <= 100)
  if (newData.length>5) {
    newData.splice(fiveCards)
  }
  console.log(newData);
  
  dispatch(getLessCards(newData))     
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
    const response = await fetch(`https://fakestoreapi.com/products?limit=5`,options);
          
    const data = await response.json();
          
    dispatch(worthSeeingCards(data))     
}
  

export const worthSeeingCards = (worthSeeingCards:ProductCardInt[])=>({
    type: 'SHOW_WORTH_SEEING_PRODUCT_CARDS',
    payload: worthSeeingCards
})
  // export const buildurl=(url:any,params:any)=>{
  //   let urlWithParams = url;
  //   Object.entries(params).forEach(([key,value],i)=>{
  //     const sign = !i ?'?':'&';
  //     urlWithParams+=`${sign}${key}=${value}`
  //   })
  //   return urlWithParams;
  // } 

const filmIdFinder= async (searchFilmId:string)=>{
  const options = {
      method: 'GET',
      headers: {accept: 'application/json'}
    };
  const response = await fetch(`https://fakestoreapi.com/products/?title=shirt`,options);
  const data = await response.json();
  const dataMassiv:any[]=[] 
  dataMassiv.push(data)

  console.log(dataMassiv);
    
  return dataMassiv;
}
export default filmIdFinder

export const showFilmOnId=(post:ProductCardInt[])=>({
  type:'SEARCH_FILIM_ID',
  payload: post
})

export const searchFilmId = (id:string) => async(dispatch: Dispatch)=>{
  const data = await filmIdFinder(id);
  dispatch(showFilmOnId(data))
}
