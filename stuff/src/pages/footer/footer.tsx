import logo from "../../img/LOGO 1.svg";
import headerStyle from "../header/Header.module.css";
import styleFooter from "./footer.module.css";
import {ReactComponent as Instagram} from "../../img/instagram.svg";
import {ReactComponent as Youtube} from "../../img/youtube.svg";
import {ReactComponent as Facebook} from "../../img/facebook.svg";

const Footer = () => {
  return (
    <footer className={styleFooter.footerWrap}>
        <div className={headerStyle.logoWrap}>
            <img className={headerStyle.logo} src={logo} alt="" />
        </div>
        <div className={styleFooter.socialWrap}>
            <span className={styleFooter.icon}><Youtube height='30' width='30' className={styleFooter.footerIcons}/></span>
            <span className={styleFooter.icon}><Facebook className={styleFooter.footerIcons}/></span>
            <span className={styleFooter.icon}><Instagram className={styleFooter.footerIcons}/></span>
        </div>
    </footer>

  )
}

export default Footer