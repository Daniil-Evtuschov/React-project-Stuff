import headerStyle from "./Header.module.css";
import Avatar from "../../img/avatar.svg";
import {ReactComponent as Cart} from "../../img/Vector.svg";
import {ReactComponent as Favorite} from "../../img/17079954331574330926 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <form className={headerStyle.wrap}>

        <div className={headerStyle.logoWrap}>
            <h1 className={headerStyle.mainTitle}>$TUFF</h1>
        </div>
            <div className={headerStyle.userWrap}>
                <div className={headerStyle.userImgWrap}>
                    <img className={headerStyle.userImg} src={Avatar} alt="" />
                </div>
                <span className={headerStyle.userName}>guest</span>
            </div>
        <div className={headerStyle.inputWrap}>
            <span className={headerStyle.searchLoop}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            <input className={headerStyle.searchInput} 
            placeholder="Search for anything..." 
            onChange={()=>{}}
            />
        </div>
        <div className={headerStyle.headerIcons}>
            <Link to = {''}>
                <div>
                <span className={headerStyle.headerIcon}><Favorite className={headerStyle.favorite}/></span>
                <span className={headerStyle.count}>2</span>
                </div>
            </Link>
            
            <Link to = {''}>
                <span className={headerStyle.headerIcon}><Cart className={headerStyle.cart}/></span>
            </Link>  
        </div>
    </form>
  )
}

export default Header