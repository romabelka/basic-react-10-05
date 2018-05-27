import { INCREMENT, DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'

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

export function filterSelectedArticles(selectedArticles) {
  return {
    type: FILTER_ARTICLES,
    payload: { selectedArticles }
  }
}
