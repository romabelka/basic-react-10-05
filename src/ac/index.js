import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  CHANGE_COMMENT_USER,
  CHANGE_COMMENT_TEXT
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

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function changeCommentUser(value) {
  return {
    type: CHANGE_COMMENT_USER,
    payload: { value }
  }
}

export function changeCommentText(value) {
  return {
    type: CHANGE_COMMENT_TEXT,
    payload: { value }
  }
}
