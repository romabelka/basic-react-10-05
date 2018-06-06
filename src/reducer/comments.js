import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentModel = new Record({
  id: null,
  user: null,
  text: null
})

const ReducerRecord = new Record({
  entities: arrToMap([], CommentModel),
  loading: false,
  error: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.set(
        'entities',
        state.get('entities').set(
          randomId,
          new CommentModel({
            ...payload.comment,
            id: randomId
          })
        )
      )

    case LOAD_COMMENTS + SUCCESS:
      return state
        .set(
          'entities',
          state.get('entities').merge(arrToMap(response, CommentModel))
        )
        .set('loading', false)

    case LOAD_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_COMMENTS + FAIL:
      return state.set('loading', false).set('error', action.error)

    default:
      return state
  }
}
