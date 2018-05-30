import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

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
      return Object.keys(articleState)
        .filter((key) => key !== payload.id)
        .reduce(
          (acc, key) => ({
            ...acc,
            [key]: articleState[key]
          }),
          {}
        )

    case ADD_COMMENT:
      const articles = { ...articleState }
      const article = articles[payload.comment.articleId]
      const comments = article.comments.concat([])
      comments.push(payload.comment.id)
      article.comments = comments
      return articles

    default:
      return articleState
  }
}
