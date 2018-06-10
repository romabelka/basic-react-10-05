import {
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS,
  FAIL,
  LOAD_COMMENTS_PAGE
} from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const CommentsPageRecord = Record({
  loading: false,
  loaded: false,
  comments: []
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  pages: new OrderedMap({})
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    case LOAD_COMMENTS_PAGE + START:
      return state.setIn(
        ['pages', payload.page],
        new CommentsPageRecord({
          loading: true
        })
      )

    case LOAD_COMMENTS_PAGE + FAIL:
      return state.setIn(
        ['pages', payload.page],
        new CommentsPageRecord({
          loading: false
        })
      )

    case LOAD_COMMENTS_PAGE + SUCCESS:
      const { comments } = payload
      return state.mergeIn('entities', arrToMap(comments, CommentRecord)).setIn(
        ['pages', payload.page],
        new CommentsPageRecord({
          loading: false,
          loaded: true,
          comments: Object.keys(comments)
        })
      )

    default:
      return state
  }
}
