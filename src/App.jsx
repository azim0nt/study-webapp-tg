import { context, globalReducer, initialState } from './store'
import { useReducer } from 'react'

function App() {

  const [state, dispatch] = useReducer(globalReducer, initialState)
  const contextPayload = {
    store: state,
    setStore: dispatch
  }
  return (
    <>
      <context.Provider value={contextPayload}>
        <div>

        </div>
      </context.Provider>
    </>
  )
}

export default App
