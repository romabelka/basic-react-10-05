export default (store) => (next) => (action) => {
  const commentId = +new Date()
  next(action)
}
