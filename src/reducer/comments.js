import { Record } from 'immutable'
import { ADD_COMMENT, LOAD_ALL_COMMENTS, START } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'

const CommentModel = new Record({
  id: null,
  user: null,
  text: null
})
const CommentsReducerRecord = new Record({
  entities: arrToMap(normalizedComments, CommentModel),
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

    case LOAD_ALL_COMMENTS + START:
      return state.set('loading', true)

    default:
      return state
  }
}
