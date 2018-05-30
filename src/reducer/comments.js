import {} from '../constants'
import { normalizedComments } from '../fixtures'

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
    case 'SUBMIT_COMMENT':
      const comment = { [payload.comment.id]: payload.comment }
      return { ...commentsState, ...comment }

    default:
      return commentsState
  }
}
