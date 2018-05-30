import { CHANGE_COMMENT_USER, CHANGE_COMMENT_TEXT } from '../constants'

const defaultComment = {
  user: '',
  text: ''
}

export default (comment = defaultComment, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_COMMENT_USER:
      return { ...comment, user: payload.value }
    case CHANGE_COMMENT_TEXT:
      return { ...comment, text: payload.value }
    default:
      return comment
  }
}
