import { globalReducer } from './helpers'
import { createContext } from 'react'

const initialState = {
    tg:window.Telegram.WebApp
}

const context = createContext()
export {
    globalReducer,
    initialState,
    context
}