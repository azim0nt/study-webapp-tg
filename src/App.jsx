import { context, globalReducer, initialState } from './store'
import { useReducer } from 'react'
import Test from './components/Test'
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
      <Test/>
        </div>
      </context.Provider>
    </>
  )
}

export default App
