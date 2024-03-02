import { NavLink } from "react-router-dom";
import styleSiteBar from "./siteBar.module.css";
const SiteBar = () => {
  return (
    <div className={styleSiteBar.siteBarWrap}>
      <div className={styleSiteBar.titleWrap}><h2 className={styleSiteBar.title}>CATEGORIES</h2></div>
      <nav>
        <ul className={styleSiteBar.menu}>
          <li>Computers</li>
          <li>Clothes</li>
          <li>Shoes</li>
          <li>Furniture</li>
          <li>Cosmetics</li>
          <li>Travel</li>
          <li>Automotive</li>
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