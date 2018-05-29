import { ADD_COMMENT } from '../constants'
import generateId from 'uuid/v1'

export default (store) => (next) => (action) => {
  const { type, payload } = action

  if (type === ADD_COMMENT) {
    payload.comment = {
      ...payload.comment,
      id: generateId()
    }
  }

  next(action)
}
