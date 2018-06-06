import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ALL_COMMENTS,
  LOAD_ARTICLE,
  SUCCESS,
  FAIL,
  START
} from '../constants'
import { fetchData } from './service'

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

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}
/*
export function loadAllComments(id) {
  console.log('=====', id);
  return {
    type: LOAD_ALL_COMMENTS,
    payload: { id },
    callAPI: `/api/comment?article=${id}`
  }
}*/

/*
export function loadArticle(id) {
  return {
    type: LOAD_ARTICLE,
    payload: { id },
    callAPI: `/api/article/${id}`
  }
}
*/

export function loadAllComments(id) {
  console.log('=====', id)
  return (dispatch) => {
    dispatch({
      type: LOAD_ALL_COMMENTS + START,
      payload: { id }
    })

    fetchData(`/api/comment?article=${id}`)
      .then((response) =>
        dispatch({
          type: LOAD_ALL_COMMENTS + SUCCESS,
          payload: { id },
          response
        })
      )
      .catch((error) =>
        dispatch({
          type: LOAD_ALL_COMMENTS + FAIL,
          payload: { id },
          error
        })
      )
  }
}

export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    })

    fetchData(`article/${id}`)
      .then((response) =>
        dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: { id },
          response
        })
      )
      .catch((error) =>
        dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: { id },
          error
        })
      )
  }
}
