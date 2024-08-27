function globalReducer(state, payload){
    switch(payload.type){
        case "setUser":
            return {...state, user:payload.user}
        default:
            return state
    }
}

export{
    globalReducer
}