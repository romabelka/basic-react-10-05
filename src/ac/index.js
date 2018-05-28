import {
  INCREMENT,
  DELETE_ARTICLE,
  FILTER_ARTICLES_BY_COMMENTS_COUNT,
  FILTER_ARTICLES_BY_DATE
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

export function filterArticlesByCommentsCount(countOptions) {
  return {
    type: FILTER_ARTICLES_BY_COMMENTS_COUNT,
    payload: { countOptions }
  }
}

export function filterArticlesByDate(range) {
  return {
    type: FILTER_ARTICLES_BY_DATE,
    payload: range
  }
}
