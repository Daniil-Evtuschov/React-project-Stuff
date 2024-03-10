const apiSearchFilms= async (searchText:string)=>{

    const response = await fetch(`https://fakestoreapi.com/products/${searchText}`);
    const data = await response.json();
      console.log(data);
      
    return data;
}

export default apiSearchFilms