import { Outlet } from "react-router-dom"
import Footer from "../../../pages/footer/footer"
import Header from "../../../pages/header/Header"
import SiteBar from "../../../components/siteBar/siteBar"
import Poster from "../../../components/poster/poster"
import TrendingProduct from "../../../pages/trendingProduct/trendingProduct"
import WorthseeingProducet from "../../../pages/worthseeingProducet/worthseeingProducet"
import Banner from "../../../pages/baner/baner"
import LessProduct from "../../../pages/leessProduct copy/LessProduct"
import Cart from "../../../pages/cart/cart";
import styleCart from "./cartRoute.module.css";

const CartRoute = () => {
  return (
    <div>
            <Header/>
            <div className={styleCart.wrap}>
                <SiteBar/>
                <Cart/>
            </div>
            <Footer/>
    </div>
  )
}

export default CartRoute