import { Dispatch } from "@reduxjs/toolkit";
import { ProductCardInt} from "../../interfaces";
import apiSearchFilms from "../../pages/header/searchinput";


export const getTrendsProductCards = (trendsCards:ProductCardInt[])=>({
    type: 'SHOW_TRENDS_PRODUCT_CARDS',
    payload: trendsCards
})
  

export const featchTrendsProductCards = (fiveCards:string,catigory?:string|null) => async (dispatch: Dispatch)=>{

  const options = {
    method: 'GET',
    headers: {accept: 'application/json'}
}; 
    const response = await fetch(`https://fakestoreapi.com/products${catigory!=null?catigory:''}`,options);
          
    const data = await response.json();
    if (data.length>5) {
      data.splice(fiveCards)
    }
    
    dispatch(getTrendsProductCards(data))     
}

export const featchLessProductCards = (fiveCards:string,catigory?:string|null) => async (dispatch: Dispatch)=>{
const options = {
  method: 'GET',
  headers: {accept: 'application/json'}
}; 
  const response = await fetch(`https://fakestoreapi.com/products${catigory!=null?catigory:''}`,options);        
  const data = await response.json();

  let newData = data.filter((item:ProductCardInt)=>item.price <= 100)
  if (newData.length>5) {
    newData.splice(fiveCards)
  }
  
  dispatch(getLessCards(newData))     
}


export const getLessCards = (lessdsCards:ProductCardInt[])=>({
  type: 'SHOW_LESS_PRODUCT_CARDS',
  payload: lessdsCards
})


export const worthSeeingProductCards = (catigory?:string|null) => async (dispatch: Dispatch)=>{
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



export const showSearchPost=(post:ProductCardInt[])=>({
  type:'SEARCH_POST',
  payload: post
})

export const searchPosts = (searchText:string) => async(dispatch: Dispatch)=>{
  const data = await apiSearchFilms(searchText);
  dispatch(showSearchPost(data))
}
