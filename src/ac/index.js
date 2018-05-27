import {
  INCREMENT,
  DELETE_ARTICLE,
  SET_FILTER_ARTICLES,
  SET_FILTER_DATES
} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function setFilterArticles(selected) {
  return {
    type: SET_FILTER_ARTICLES,
    payload: selected
  }
}

export function setFilterDates(range) {
  return {
    type: SET_FILTER_DATES,
    payload: range
  }
}
