import { store } from "../..";
import { ProductCardInt } from "../../interfaces";

export const getTrendsProductCards = (trendsCards:ProductCardInt[])=>({
    type: 'SHOW_TRENDS_PRODUCT_CARDS',
    payload: trendsCards
})
  

export const featchTrendsProductCards = () => async (dispatch: typeof store.dispatch)=>{
  const options = {
    method: 'GET',
    headers: {accept: 'application/json'}
}; 
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/?price_min=90&price_max=1000&offset=&limit=5`,options);
          
    const data = await response.json();
  
    console.log('я ответ с сервера',data);
    
    dispatch(getTrendsProductCards(data))     
}


export const getLessCards = (lessdsCards:ProductCardInt[])=>({
  type: 'SHOW_LESS_PRODUCT_CARDS',
  payload: lessdsCards
})


export const featchLessProductCards = () => async (dispatch: typeof store.dispatch)=>{
const options = {
  method: 'GET',
  headers: {accept: 'application/json'}
}; 
  const response = await fetch(`https://api.escuelajs.co/api/v1/products?limit=5&offset=5`,options);
  // const response = await fetch(`https://api.escuelajs.co/api/v1/products/?price_min=5&price_max=100&offset=30&limit=5`,options);
        
  const data = await response.json();

  console.log('я ответ с сервера1',data);
  
  dispatch(getLessCards(data))     
}


