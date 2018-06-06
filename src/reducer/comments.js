import { Record } from 'immutable'
import {
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS,
  FAIL
} from '../constants'
import { arrToMap } from './utils'

const CommentModel = new Record({
  id: null,
  user: null,
  text: null
})
const CommentsReducerRecord = new Record({
  entities: arrToMap([], CommentModel),
  loading: false,
  loaded: false,
  error: null
})

export default (state = new CommentsReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentModel({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state
        .set('entities', arrToMap(response, CommentModel))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ARTICLE_COMMENTS + FAIL:
      return state.set('loading', false).set('error', action.error)

    default:
      return state
  }
}
