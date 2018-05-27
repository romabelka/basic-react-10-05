import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectArticles from './select'

export default combineReducers({
  counter: counterReducer,
  selectArticles,
  articles
})
