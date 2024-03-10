import headerStyle from "./Header.module.css";
import Avatar from "../../img/avatar.svg";
import {ReactComponent as Cart} from "../../img/Vector.svg";
import {ReactComponent as Favorite} from "../../img/17079954331574330926 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { KeyboardEvent, useEffect, useState } from "react";
import Input from "../../components/input/input";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import apiSearchFilms from "./searchinput";

const Header = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState<string>('')
    const searchResult = useTypeSelector((state)=>state.Api.searchProductCard) 
        const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            //@ts-ignore
            dispatch(apiSearchFilms(searchValue))  
        }
      };
      
  return (
    <form className={headerStyle.wrap}>
    <Link  to = {'/'}>
        <div className={headerStyle.logoWrap}>
            <h1 className={headerStyle.mainTitle}>$TUFF</h1>
        </div>
    </Link>
            <div className={headerStyle.userWrap}>
                <div className={headerStyle.userImgWrap}>
                    <img className={headerStyle.userImg} src={Avatar} alt="" />
                </div>
                <span className={headerStyle.userName}>guest</span>
            </div>
        <div className={headerStyle.inputWrap}>
            <span className={headerStyle.searchLoop}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            <Input onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => handleKeyPress(event)} value={searchValue} onChange={setSearchValue} placeHolder={'Search for anything...'}/>
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