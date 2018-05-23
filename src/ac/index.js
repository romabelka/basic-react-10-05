import {
  INCREMENT,
  DELETE_ARTICLE,
  UPDATE_FILTER_IDS,
  UPDATE_FILTER_DATE_RANGE
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

export function updateFilterIds(ids) {
  return {
    type: UPDATE_FILTER_IDS,
    payload: { ids }
  }
}

export function updateFilterDateRange({ from, to }) {
  return {
    type: UPDATE_FILTER_DATE_RANGE,
    payload: { from, to }
  }
}
