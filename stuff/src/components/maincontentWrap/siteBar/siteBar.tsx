import { NavLink } from "react-router-dom";
import styleSiteBar from "./siteBar.module.css";
const SiteBar = () => {
  return (
    <div className={styleSiteBar.siteBarWrap}>
      <div className={styleSiteBar.titleWrap}><h2 className={styleSiteBar.title}>CATEGORIES</h2></div>
      <nav>
        <ul className={styleSiteBar.menu}>
          <li>
            <NavLink to={`/categories/${1}`}>Link</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styleSiteBar.footer}> 
        <a href="#" target="blank" className={styleSiteBar.link}><p className={styleSiteBar.linkDescription}>Help</p></a>
        <a href="#" target="blank" className={styleSiteBar.link}><p className={styleSiteBar.linkDescription} style={{textDecoration:'underline'}}>Terms & Conditions</p></a>
      </div>
    </div>
  )
}

export default SiteBar