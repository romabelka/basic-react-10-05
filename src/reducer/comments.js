import { Record } from 'immutable'
import { ADD_COMMENT } from '../constants'
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
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentModel({
          ...payload.comment,
          id: randomId
        })
      )

    default:
      return state
  }
}
