import { combineReducers } from 'redux'
import counterReducer from './counter'
import { articles, filters } from './articles'

export default combineReducers({
  counter: counterReducer,
  articles,
  filters
})
