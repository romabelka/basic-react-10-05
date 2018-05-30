import { ADD_COMMENT } from '../constants'

function generateId() {
  function pad(length, number) {
    const string = number.toString()
    return string.length >= length
      ? string
      : new Array(length - string.length + 1).join('0') + number
  }

  return `${Date.now()}${pad(3, Math.round(0.5 + Math.random() * 999))}`
}

export default (store) => (next) => (action) => {
  const { type, payload } = action

  if (type === ADD_COMMENT)
    payload.comment = {
      ...payload.comment,
      id: generateId()
    }

  next(action)
}
