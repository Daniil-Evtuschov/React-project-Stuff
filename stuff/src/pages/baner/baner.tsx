import stylebanner from './baner.module.css'
import styleMainContent from "../../components/poster/poster.module.css";
import bannerLogo from "../../img/Rectangle 14.png";
import boots from "../../img/image 4.png";
import deck from "../../img/image 3.png";

const Banner = () => {
  return (
    <div className={stylebanner.bannerWrap}>
        <div className={stylebanner.bunerTitleWrap}>

            <div className={stylebanner.titleWrap}>
                <span className={stylebanner.title}>NEW YEAR</span>
                <span className={stylebanner.title}>SALE</span>
                <button className={styleMainContent.posterButton}>See more</button>
            </div>

            <div  className={stylebanner.firstFoto}><img src={boots} alt="" /></div>
            <div className={stylebanner.secondFoto}><img src={deck} alt="" /></div>
        </div>

        <div className={stylebanner.bannerLogoWrap}><img src={bannerLogo} alt="" /></div>

        <div className={stylebanner.logoDescriptionWrap}>
            <span className={stylebanner.logoDescription}>save up to</span><span className={stylebanner.logoDescription}> 50%</span><span className={stylebanner.logoDescription}> off</span> 
        </div>

    </div>
  )
}

export default Banner