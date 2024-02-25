import headerStyle from "./Header.module.css";
import logo from "../../img/LOGO 1.svg";
import Avatar from "../../img/avatar.svg";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Routes } from "../../utils/routes";

const Header = () => {
  return (
    <form className={headerStyle.wrap}>

        <div className={headerStyle.logoWrap}>
            <img className={headerStyle.logo} src={logo} alt="" />
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
            autoComplete="off" 
            placeholder="Search for anything..." 
            type="search"
            name="search"
            onChange={()=>{}}
            value=''
            />
        </div>
        <div className={headerStyle.headerIcons}>
            <Link to = {Routes.cart}>
                <div>
                <span className={headerStyle.headerIcon}><FontAwesomeIcon icon={faHeart} /></span>
                <span className={headerStyle.count}>2</span>
                </div>
            </Link>
            
            <Link to = {Routes.home}>
                <span className={headerStyle.headerIcon}><FontAwesomeIcon icon={faBagShopping} /></span>
            </Link>  
        </div>
    </form>
  )
}

export default Header