import { ActionsTypInt, InitialStateInt } from "../../interfaces"


const initialState:InitialStateInt = {
    trendsProductCards:[],
    otherProductCards:[],
    lessProductCards:[],
    worthSeeingProductCards:[],
    searchProductCard:[],
    relatedproducts:[],
    cart:[]
}




export const singleCardReducer = (state: InitialStateInt = initialState, action: ActionsTypInt): InitialStateInt=>{
    switch (action.type) {
        case "SHOW_WORTH_SEEING_PRODUCT_CARDS":
            return{...state,worthSeeingProductCards:action.payload}

        case "SHOW_SINGLE_PRODUCT_CARD":
            return{...state,singleCard:action.payload}

        case "SHOW_RELATED_PRODUCT_CARDS":
            return{...state,relatedproducts:action.payload}

        case "ADD_TO_CART":
            return{...state,cart:action.payload}
    default:
        return state
    }
}

export default singleCardReducer
