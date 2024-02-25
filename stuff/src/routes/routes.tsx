import { Route, Routes } from "react-router-dom"
import Home from "../components/home/home"

const StuffRoutes = ()=>(
    <Routes>
        <Route index element = {<Home/>}/>
    </Routes>
    )


export default StuffRoutes