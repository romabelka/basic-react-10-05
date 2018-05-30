import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT:
      return {
        ...commentsState,
        [payload.id]: {
          id: payload.id,
          user: payload.author,
          text: payload.commentText
        }
      }

    default:
      return commentsState
  }
}
