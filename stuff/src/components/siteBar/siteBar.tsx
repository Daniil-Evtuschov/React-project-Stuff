import { Link, NavLink, useParams } from "react-router-dom";
import styleSiteBar from "./siteBar.module.css";
import { useState } from "react";
import { featchLessProductCards, featchTrendsProductCards} from "../../store/actions/featchApi";
import { useDispatch, useSelector } from "react-redux";
import { featchRelatedproducts } from "../../store/actions/singleProduct";
const SiteBar = () => {
  const categories:string[] = ['electronics','jewelery',"men's clothing","women's clothing"] 
  const dispatch = useDispatch()
  const {category,id} = useParams()
  let [curentCategories, setCurentCategories]:any = useState('');   
  // const {list} = useSelector(({categories}:any)=>categories)  
  
  return (
    <div className={styleSiteBar.siteBarWrap}>
      <div className={styleSiteBar.titleWrap}><h2 className={styleSiteBar.title}>CATEGORIES</h2></div>
      <nav>
        <ul className={styleSiteBar.menu}>
          {categories.map((item:string,i)=><li 
          onClick={()=>{
            setCurentCategories(item);
            dispatch(featchTrendsProductCards('5',`/category/${item}`) as any);
            dispatch(featchLessProductCards('5',`/category/${item}`) as any);
            dispatch(featchRelatedproducts('5',`/category/${item}`) as any);
          }} 
          key={i}
          className={`${styleSiteBar.menyItem} ${curentCategories===item? styleSiteBar.active:''}`}>
          <NavLink to={`${item}`}>{item}</NavLink></li>)}
        </ul>
      </nav>
      <div className={styleSiteBar.footer}> 
        <p className={styleSiteBar.linkDescription}>Help</p>
        <p className={styleSiteBar.linkDescription} style={{textDecoration:'underline'}}>Terms & Conditions</p>
      </div>
    </div>
  )
}

export default SiteBar