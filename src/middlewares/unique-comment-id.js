import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type !== ADD_COMMENT) {
    return next(action)
  }

  return next({
    ...action,
    payload: {
      ...action.payload,
      id: new Date().getTime()
    }
  })
}
