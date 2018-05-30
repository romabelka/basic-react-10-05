import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)
console.log(defaultArticles)

export default (articleState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT:
      const article = articleState[payload.articleId]

      return {
        ...articleState,
        [article.id]: {
          ...article,
          comments: [...article.comments, payload.id]
        }
      }

    case DELETE_ARTICLE:
      return articleState.filter((article) => article.id !== payload.id)

    default:
      return articleState
  }
}
