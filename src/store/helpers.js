function globalReducer(state, payload){
    switch(payload.type){
        // case "changeMessage":
            // return {...state, message:payload.message}
        default:
            return state
    }
}

export{
    globalReducer
}