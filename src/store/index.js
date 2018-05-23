import { createStore } from 'redux'
import reducer from '../reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools())

//dev only:
window.store = store

export default store
