import { globalReducer } from './helpers'
import { createContext } from 'react'

const initialState = {
    tg:window.Telegram.WebApp,
    user:{
        firstname: '',
        lastnme: '',
        username: '',
        language: '',
        premium: false,
        photo: ''
    }
}

const context = createContext()
export {
    globalReducer,
    initialState,
    context
}