import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import defaultArticles from './default-articles'

export default combineReducers({
  counter: counterReducer,
  articles,
  defaultArticles
})
