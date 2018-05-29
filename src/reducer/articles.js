import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import CommentHolder from '../entities/CommentHolder'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articleState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      delete articleState[payload.id]

      return {
        ...articleState
      }

    case ADD_COMMENT:
      if (payload.holder.getType() === CommentHolder.TYPE_ARTICLE) {
        const articleId = payload.holder.getId()
        const article = articleState[articleId]

        article.comments = [].concat(article.comments)
        article.comments.push(payload.comment.id)

        return {
          ...articleState,
          [articleId]: {
            ...article
          }
        }
      } else {
        return articleState
      }

    default:
      return articleState
  }
}
