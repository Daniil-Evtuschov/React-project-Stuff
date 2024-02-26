interface InitialStateInt {
    filmsCard: []
}

export interface ActionsTypInt{

  }

const initialState:InitialStateInt = {
    filmsCard:[],
}

const reducer = (state = initialState, action:ActionsTypInt | any)=>{
    switch (action.type) {
   
    default:
        return state
    }
}

export default reducer
