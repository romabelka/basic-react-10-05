import {
  INCREMENT,
  DELETE_ARTICLE,
  SHOW_ARTICLES,
  SHOW_ARTICLES_BY_DATE
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

export function showArticles(arr) {
  return {
    type: SHOW_ARTICLES,
    payload: arr
  }
}

export function showArticlesByDate(obj) {
  return {
    type: SHOW_ARTICLES_BY_DATE,
    payload: obj
  }
}
