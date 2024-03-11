import { Route, Routes } from "react-router-dom"
import Banner from "../pages/baner/baner"
import SingleCard from "../components/singleCard/singleCard"
import Poster from "../components/poster/poster"
import HomePage from "./Routs/layout"
import SingleProductPage from "./Routs/Singleproduct"
import SiteBar from "../components/siteBar/siteBar"
import CartRoute from "./Routs/cartRoute/cartRoute"

const StuffRoutes = ()=>(
    <Routes>
        <Route path="/" element={<HomePage/>}>
            <Route path=":category" element={<SiteBar/>}/>
        </Route>
        <Route path="/SingleProductPage/:category/:id" element={<SingleProductPage/>}>
            <Route path=":category" element={<SiteBar/>}/>
        </Route>
        <Route path="/Cart" element={<CartRoute/>}/>
    </Routes>
    )


export default StuffRoutes