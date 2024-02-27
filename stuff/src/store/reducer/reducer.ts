import { ActionsTypInt, InitialStateInt } from "../../interfaces"

const initialState:InitialStateInt = {
    trendsProductCards:[],
    lessProductCards:[]
}

const reducer = (state = initialState, action:ActionsTypInt | any)=>{
    switch (action.type) {
        case "SHOW_TRENDS_PRODUCT_CARDS":
            return{...state,trendsProductCards:action.payload}

        case "SHOW_LESS_PRODUCT_CARDS":
            return{...state,lessProductCards:action.payload}
    default:
        return state
    }
}

export default reducer
