import { ActionsTypInt, InitialStateInt } from "../../interfaces"


const initialState:InitialStateInt = {
    trendsProductCards:[],
    otherProductCards:[],
    lessProductCards:[],
    worthSeeingProductCards:[],
}


export const apiReducer = (state: InitialStateInt = initialState, action: ActionsTypInt): InitialStateInt=>{
    switch (action.type) {
        case "SHOW_TRENDS_PRODUCT_CARDS":
            return{...state,trendsProductCards:action.payload}

        case "SHOW_LESS_PRODUCT_CARDS":
            return{...state,lessProductCards:action.payload}

        case "SHOW_WORTH_SEEING_PRODUCT_CARDS":
            return{...state,worthSeeingProductCards:action.payload}

        case "SHOW_SINGLE_PRODUCT_CARDS":
            return{...state,singleCard:action.payload}

        case "SHOW_OTHER_PRODUCT_CARDS":
            return{...state,otherProductCards:action.payload}
    default:
        return state
    }
}

export default apiReducer
