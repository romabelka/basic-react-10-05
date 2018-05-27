import {
  INCREMENT,
  DELETE_ARTICLE,
  FILTER_ARTICLE_BY_IDS,
  FILTER_ARTICLE_BY_PERIOD
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

export function changeSelectedArticle(selected) {
  return {
    type: FILTER_ARTICLE_BY_IDS,
    payload: { selected }
  }
}

export function changePeriodArticle({ from, to }) {
  console.log(from)
  return {
    type: FILTER_ARTICLE_BY_PERIOD,
    payload: { from, to }
  }
}
