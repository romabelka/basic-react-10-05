import {
  INCREMENT,
  DELETE_ARTICLE,
  FILTER_ARTICLES_BY_TITLE,
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

export function updateFilteredByTitleArticlesIds(ids, filterIsApplied) {
  return {
    type: FILTER_ARTICLES_BY_TITLE,
    payload: { ids, filterIsApplied }
  }
}

export function updateFilteredByDateArticlesIds(ids, filterIsApplied) {
  return {
    type: FILTER_ARTICLES_BY_DATE,
    payload: { ids, filterIsApplied }
  }
}
