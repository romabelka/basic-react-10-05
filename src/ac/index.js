import { INCREMENT, DELETE_ARTICLE, SELECTED_ARTICLE, SELECTED_DATE_ARTICLE } from '../constants'

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

export function selectedArticle(selected) {
  return {
    type: SELECTED_ARTICLE,
    payload: { selected }
  }
}

export function selectedDateArticle(dateRange) {
  return {
    type: SELECTED_DATE_ARTICLE,
    payload: { dateRange }
  }
}
