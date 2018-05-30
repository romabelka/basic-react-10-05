export default (store) => (next) => (action) => {
  if (action.type === 'SUBMIT_COMMENT') {
    action.payload.comment.id = Math.random()
      .toString(36)
      .substr(2, 9)
  }
  next(action)
}
