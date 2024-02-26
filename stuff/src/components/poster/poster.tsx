import styleMainContent from "./poster.module.css";
import poser from "../../img/image 1.png";

const Poster = () => {
  return (
    <div className={styleMainContent.wrap}>
       <h2 className={styleMainContent.posetTitle}>BIG SALE 20%</h2>
       <div className={styleMainContent.posterDescriptionWrap}>
        <span className={styleMainContent.titleDescription}>the bestseller of 2022 </span>
        <span className={styleMainContent.description}>LENNON r2d2</span>
        <span className={styleMainContent.description}>with NVIDIA 5090 TI</span>
        <button className={styleMainContent.posterButton}>Shop Now</button>
      </div>

      <div className={styleMainContent.imgWrap}>
        <img src={poser} alt="" />
      </div>
    </div>
  )
}

export default Poster