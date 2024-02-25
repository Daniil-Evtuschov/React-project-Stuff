import { configureStore } from "@reduxjs/toolkit";

interface reducerInt{
    categories:string
}

interface storeInt{
    reducer:reducerInt
}
export const store:any = configureStore({
    reducer:{
        categories:'cat'
    },
    devTools:true
})